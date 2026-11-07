# Agro Arkafla

Site institucional em React, TypeScript e Vite. As páginas são renderizadas em HTML no build, com hidratação no navegador para menu, galeria e compartilhamento. Produção: https://www.agroarkafla.com/

## Desenvolvimento e validação

- `npm ci`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm test`
- `npm run preview` abre o servidor estático em http://127.0.0.1:4176

Node 24. O deploy Vercel usa `npm run build` e o diretório `dist`. Não há serviço de backend, chave de IA, formulário armazenado nem pagamento. O formulário apenas prepara uma mensagem para revisão e envio no WhatsApp.

## Conteúdo e manutenção

- `src/site-data.ts`: metadados, contatos, atividades, fotografias e cidades.
- `src/App.tsx`: páginas e componentes institucionais.
- `src/index.css`: identidade visual e responsividade.
- `src/components/FloatingActions.tsx`: modelo Suprema de compartilhamento e ações flutuantes.
- `src/components/SupremaCredit.tsx`: assinatura oficial Suprema.
- `scripts/prerender.tsx`: HTML, canonical, Open Graph, JSON-LD, sitemap e robots.
- `scripts/check.mjs`: testes de páginas, links, imagens, formulários, esquema, ícones e metadados.
- `scripts/graphics.mjs`: cartão social e favicons produzidos com a biblioteca oficial RealFaviconGenerator.
- `public/llms.txt`: guia factual das páginas públicas. Sua presença não garante indexação ou recomendação por IA.

As páginas antigas em `src/pages`, `src/data` e os componentes antigos foram preservados como histórico, mas não são importados, compilados ou usados para geração do CSS. A versão publicada utiliza somente os arquivos explicitamente listados no tsconfig e nos diretivos `@source`.

## Publicação

O repositório `supremapix/Agro-ARKAFLA`, branch `main`, está conectado ao projeto Vercel `agro-arkafla`. Antes de publicar, execute lint, build e testes, revise o diff e confirme os contatos e alegações. Depois, confira a implantação READY, o domínio público, páginas internas, erro 404, sitemap e imagem social.

Um rollback pode ser feito promovendo a implantação anterior no Vercel ou revertendo o commit no Git, sem apagar o histórico. A implantação anterior à remodelação foi `dpl_7gJQ5LjASBimRiyZWdpwhYn7sRFD`, commit `e076d86`.

## Limites de escopo

O domínio `www.agroarkafla.com.br` tem hospedagem e certificado separados na KingHost. Ele não faz parte deste projeto Vercel. Este código não altera DNS, certificados nem e-mail. Não altere seus apontamentos presumindo que os domínios sejam equivalentes.

A remodelação mantém marca, fotos, contatos, unidades e atividades do site de origem. Não publica métricas conflitantes, produtividade garantida, filiais fictícias, resultados comerciais ou disponibilidade não confirmada. Rotas de cidades orientam o contato e esclarecem a base em Castro.

Vídeos e Instagram são carregados somente após escolha do visitante. Não são usados rastreadores próprios, fontes remotas ou cookies analíticos nesta versão. Links sociais levam a serviços externos com suas próprias políticas.
