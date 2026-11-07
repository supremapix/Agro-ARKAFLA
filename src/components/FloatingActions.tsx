"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUp, Check, Copy, MessageCircle, Phone, Share2, X } from "lucide-react";

export interface FloatingActionsProps {
  brandName: string;
  /** Use an international number with country code. Omit to hide the button. */
  phone?: string;
  /** International WhatsApp number, with country code. Omit to hide. */
  whatsapp?: string;
  /** Absolute, public canonical URL. Never include tokens or private data. */
  pageUrl: string;
  pageTitle: string;
  /** One absolute, public image URL used by Pinterest and the local preview. */
  ogImageUrl: string;
  /** Use colors with at least 4.5:1 contrast. */
  actionColor?: CSSProperties["backgroundColor"];
  actionTextColor?: CSSProperties["color"];
}

export function buildShareTexts(brandName: string): readonly string[] {
  return [
    `Conheça o site de ${brandName}.`,
    `Veja mais informações sobre ${brandName}.`,
    `Compartilho aqui o site de ${brandName}.`,
    `Uma página de ${brandName} para você conhecer.`,
    `Confira o conteúdo no site de ${brandName}.`,
    `Acesse o site de ${brandName} pelo link.`,
    `Saiba mais sobre ${brandName} nesta página.`,
    `Este é o site de ${brandName}.`,
    `Veja esta página de ${brandName}.`,
    `Deixo aqui o link de ${brandName}.`,
    `Explore as informações de ${brandName}.`,
    `Conheça esta página de ${brandName}.`,
    `Para saber mais sobre ${brandName}, acesse o link.`,
    `Informações sobre ${brandName} estão nesta página.`,
    `Compartilhando uma página de ${brandName}.`,
  ];
}

function publicHttpUrl(value: string, name: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${name} precisa ser uma URL absoluta HTTP(S).`);
  }
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) {
    throw new Error(`${name} precisa ser uma URL HTTP(S) sem credenciais.`);
  }
  return url.href;
}

function phoneDigits(value?: string): string | null {
  if (!value || !/^\+?[\d\s().-]+$/.test(value.trim())) return null;
  const digits = value.replace(/\D/g, "");
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : null;
}

function shareUrl(base: string, parameters: Record<string, string>): string {
  const url = new URL(base);
  Object.entries(parameters).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.href;
}

type CopyStatus = "idle" | "copying" | "copied" | "manual";

const roundButton =
  "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-lg " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "motion-safe:transition-transform motion-safe:hover:scale-105 motion-reduce:transform-none";

export function FloatingActions({
  brandName,
  phone,
  whatsapp,
  pageUrl,
  pageTitle,
  ogImageUrl,
  actionColor = "#0f172a",
  actionTextColor = "#ffffff",
}: FloatingActionsProps) {
  const canonicalUrl = useMemo(() => publicHttpUrl(pageUrl, "pageUrl"), [pageUrl]);
  const imageUrl = useMemo(() => publicHttpUrl(ogImageUrl, "ogImageUrl"), [ogImageUrl]);
  const texts = useMemo(() => buildShareTexts(brandName), [brandName]);
  const phoneNumber = phoneDigits(phone);
  const whatsappNumber = phoneDigits(whatsapp);
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const copyFieldRef = useRef<HTMLTextAreaElement>(null);
  const copyAttemptRef = useRef(0);
  const panelId = useId();
  const titleId = useId();
  const textId = useId();
  const copyHelpId = useId();
  const currentText = texts[textIndex % texts.length];
  const shareText = `${currentText}\n${pageTitle}`;
  const copyMessage = `${shareText}\n${canonicalUrl}`;
  const buttonStyle: CSSProperties = { backgroundColor: actionColor, color: actionTextColor };

  const closePanel = useCallback((returnFocus = true) => {
    copyAttemptRef.current += 1;
    setOpen(false);
    setCopyStatus("idle");
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 300);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    copyAttemptRef.current += 1;
    setCopyStatus("idle");
  }, [textIndex]);

  // Respect motion preferences by starting automatic text rotation paused.
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setTextIndex(0);
    copyAttemptRef.current += 1;
    setCopyStatus("idle");
  }, [brandName, canonicalUrl, pageTitle, imageUrl]);

  useEffect(() => {
    if (!open || paused) return;
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setTextIndex((index) => (index + 1) % texts.length);
      }
    }, 15_000);
    return () => window.clearInterval(interval);
  }, [open, paused, texts]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        closePanel();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePanel();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closePanel]);

  useEffect(() => () => { copyAttemptRef.current += 1; }, []);

  const socialLinks = [
    { name: "WhatsApp", href: shareUrl("https://wa.me/", { text: `${shareText}\n${canonicalUrl}` }) },
    { name: "Facebook", href: shareUrl("https://www.facebook.com/sharer/sharer.php", { u: canonicalUrl }) },
    { name: "X", href: shareUrl("https://twitter.com/intent/tweet", { text: shareText, url: canonicalUrl }) },
    { name: "Pinterest", href: shareUrl("https://www.pinterest.com/pin/create/button/", {
      url: canonicalUrl, media: imageUrl, description: shareText,
    }) },
    { name: "LinkedIn", href: shareUrl("https://www.linkedin.com/sharing/share-offsite/", { url: canonicalUrl }) },
    { name: "Threads", href: shareUrl("https://www.threads.net/intent/post", { text: `${shareText}\n${canonicalUrl}` }) },
  ];

  async function copyLink() {
    setPaused(true); // Keep the selected/copied suggestion stable.
    const attempt = ++copyAttemptRef.current;
    setCopyStatus("copying");
    try {
      if (!window.isSecureContext || !navigator.clipboard?.writeText) {
        throw new Error("Clipboard indisponível");
      }
      await navigator.clipboard.writeText(copyMessage);
      if (copyAttemptRef.current === attempt) setCopyStatus("copied");
    } catch {
      if (copyAttemptRef.current !== attempt) return;
      setCopyStatus("manual");
      copyFieldRef.current?.focus();
      copyFieldRef.current?.select();
    }
  }

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    // Keep keyboard focus on a persistent control when the top button disappears.
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <div
        ref={rootRef}
        className="share-actions fixed z-[80]"
        style={{
          left: "max(1rem, env(safe-area-inset-left))",
          bottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
        onBlur={(event) => {
          if (open && event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
            closePanel(false); // Tab can leave this non-modal panel naturally.
          }
        }}
      >
        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "Fechar opções de compartilhamento" : "Compartilhar esta página"}
          aria-expanded={open}
          aria-controls={panelId}
          aria-haspopup="dialog"
          className={roundButton}
          style={buttonStyle}
          onClick={() => open ? closePanel() : setOpen(true)}
        >
          <Share2 size={22} aria-hidden="true" />
        </button>

        {open && (
          <section
            id={panelId}
            role="dialog"
            aria-modal="false"
            aria-labelledby={titleId}
            className="share-panel absolute bottom-16 left-0 overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white/95 p-4 backdrop-blur-md text-slate-900 shadow-2xl"
            style={{
              width: "min(22rem, calc(100vw - 2rem - env(safe-area-inset-left) - env(safe-area-inset-right)))",
              maxHeight: "calc(100dvh - 6rem - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 id={titleId} className="text-base font-semibold">Compartilhar página</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => closePanel()}
                aria-label="Fechar compartilhamento"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100 focus-visible:outline focus-visible:outline-2"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <img
              src={imageUrl}
              alt=""
              loading="lazy"
              decoding="async"
              className="mt-2 aspect-video w-full rounded-lg object-cover"
            />
            <p className="mt-3 break-words text-sm font-semibold">{pageTitle}</p>
            <p id={textId} className="mt-2 break-words text-sm">{currentText}</p>
            <button
              type="button"
              aria-pressed={paused}
              aria-controls={textId}
              className="mt-1 min-h-11 rounded px-1 text-xs underline focus-visible:outline focus-visible:outline-2"
              onClick={() => { setPaused((value) => !value); setCopyStatus("idle"); }}
            >
              {paused ? "Retomar sugestões automáticas" : "Pausar sugestões automáticas"}
            </button>
            <p className="mb-3 text-xs leading-relaxed text-slate-600">
              Sugestões mudam a cada 15 segundos. A imagem e o texto exibidos pela rede
              dependem da própria plataforma. Algumas redes compartilham apenas o link.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {socialLinks.map(({ name, href }) => (
                <li key={name} className="min-w-0">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-2 py-2 text-center text-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2"
                    aria-label={`Compartilhar no ${name} (abre em nova aba)`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <label htmlFor={`${panelId}-url`} className="mt-4 block text-xs font-medium">
              Mensagem de indicação
            </label>
            <textarea
              ref={copyFieldRef}
              id={`${panelId}-url`}
              readOnly
              rows={4}
              value={copyMessage}
              aria-describedby={copyHelpId}
              className="mt-1 block w-full resize-none rounded-lg border border-slate-300 p-2 text-xs focus-visible:outline focus-visible:outline-2"
              onFocus={(event) => event.currentTarget.select()}
            />
            <button
              type="button"
              onClick={() => { void copyLink(); }}
              disabled={copyStatus === "copying"}
              className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {copyStatus === "copied" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              {copyStatus === "copying" ? "Copiando…" : copyStatus === "copied" ? "Mensagem copiada" : "Copiar mensagem"}
            </button>
            <p id={copyHelpId} role="status" aria-live="polite" className="mt-2 text-xs leading-relaxed text-slate-600">
              {copyStatus === "copied"
                ? "Mensagem copiada para a área de transferência."
                : copyStatus === "manual"
                  ? "Não foi possível copiar automaticamente. A mensagem está selecionada: use Ctrl+C, Command+C ou a opção Copiar do aparelho."
                  : "Você também pode selecionar e copiar a mensagem manualmente."}
            </p>
          </section>
        )}
      </div>

      <nav
        aria-label="Contato e navegação rápida"
        className="fixed z-40 flex flex-col gap-3"
        style={{
          right: "max(1rem, env(safe-area-inset-right))",
          bottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        {showTop && (
          <button type="button" aria-label="Voltar ao topo" onClick={scrollToTop}
            className={roundButton} style={buttonStyle}>
            <ArrowUp size={22} aria-hidden="true" />
          </button>
        )}
        {phoneNumber && (
          <a href={`tel:+${phoneNumber}`} aria-label={`Ligar para ${brandName}`}
            className={`${roundButton} relative`} style={{ ...buttonStyle, backgroundImage: "linear-gradient(135deg, #1e40af, #4338ca)", color: "#ffffff" }}>
            <Phone size={22} aria-hidden="true" />
          </a>
        )}
        {whatsappNumber && (
          <a
            href={shareUrl(`https://wa.me/${whatsappNumber}`, { text: `Olá! Gostaria de saber mais sobre ${brandName}.` })}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar com ${brandName} no WhatsApp (abre em nova aba)`}
            className={`${roundButton} relative`}
            style={{ ...buttonStyle, backgroundImage: "linear-gradient(135deg, #166534, #15803d)", color: "#ffffff" }}
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full ring-4 ring-emerald-600/20 motion-safe:animate-pulse motion-reduce:animate-none" />
            <MessageCircle size={22} aria-hidden="true" />
          </a>
        )}
      </nav>
    </>
  );
}
