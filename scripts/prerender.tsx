import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../src/App';
import {SITE,images,pages,notFound,faqs} from '../src/site-data';
const template=await fs.readFile('dist/index.html','utf8');
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const route of [...Object.keys(pages),'/404']){
 const meta=pages[route]||notFound;
 const url=SITE+(route==='/'?'/':route);
 const graph:any[]=[
 {'@type':'Organization','@id':SITE+'/#organization',name:'Agro Arkafla',url:SITE+'/',logo:SITE+images.logo,description:'Agropecuária com atividades de agricultura, pecuária leiteira e silvicultura em Castro, Paraná.',address:{'@type':'PostalAddress',streetAddress:'Rua do Rosário, 130 - Centro',addressLocality:'Castro',addressRegion:'PR',postalCode:'84165-130',addressCountry:'BR'},contactPoint:{'@type':'ContactPoint',telephone:'+55-42-99958-6858',contactType:'atendimento',availableLanguage:'pt-BR'},sameAs:['https://www.instagram.com/agroarkafla/']},
 {'@type':'WebSite','@id':SITE+'/#website',name:'Agro Arkafla',url:SITE+'/',inLanguage:'pt-BR',publisher:{'@id':SITE+'/#organization'}},
 {'@type':'WebPage','@id':url+'#webpage',url,name:meta.title,description:meta.description,inLanguage:'pt-BR',isPartOf:{'@id':SITE+'/#website'},about:{'@id':SITE+'/#organization'}}
 ];
 if(route!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:SITE+'/'},{'@type':'ListItem',position:2,name:meta.title.split('|')[0].trim(),item:url}]});
 if(route==='/')graph.push({'@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))});
 const head='<title>'+esc(meta.title)+'</title>\n'+
 '<meta name="description" content="'+esc(meta.description)+'"/>\n'+
 '<meta name="robots" content="'+(meta.noindex?'noindex, follow':'index, follow, max-image-preview:large')+'"/>\n'+
 '<link rel="canonical" href="'+url+'"/>\n'+
 Object.entries({'og:type':'website','og:site_name':'Agro Arkafla','og:locale':'pt_BR','og:title':meta.title,'og:description':meta.description,'og:url':url,'og:image':SITE+'/og-agro-arkafla.png','og:image:width':'1200','og:image:height':'630','og:image:alt':'Agro Arkafla: agricultura, pecuária e silvicultura em Castro, Paraná'}).map(([k,v])=>'<meta property="'+k+'" content="'+esc(v)+'"/>').join('\n')+'\n'+
 Object.entries({'twitter:card':'summary_large_image','twitter:title':meta.title,'twitter:description':meta.description,'twitter:image':SITE+'/og-agro-arkafla.png','twitter:image:alt':'Agro Arkafla em Castro, Paraná'}).map(([k,v])=>'<meta name="'+k+'" content="'+esc(v)+'"/>').join('\n')+
 '<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')+'</script>';
 const outfile=route==='/'?'dist/index.html':'dist'+route+'.html';
 await fs.mkdir(path.dirname(outfile),{recursive:true});
 await fs.writeFile(outfile,template.replace('<!--app-head-->',head).replace('<!--app-html-->',renderToString(<App path={route}/>)));
}
const routes=Object.keys(pages);
await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(r=>'<url><loc>'+SITE+(r==='/'?'/':r)+'</loc></url>').join('')+'</urlset>');
await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+SITE+'/sitemap.xml\n');
console.log('Prerendered '+(routes.length+1)+' HTML pages with unique metadata and structured data.');
