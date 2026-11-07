import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {load} from 'cheerio';
const base=process.argv[2]||'http://127.0.0.1:4176';
const sitemap=await(await fetch(base+'/sitemap.xml')).text();
const routes=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
const results=[];
for(const path of [...routes,'/robots.txt','/llms.txt','/site.webmanifest','/favicon.ico','/og-agro-arkafla.png','/nao-existe-verificacao']){
 const r=await fetch(base+path);const expected=path==='/nao-existe-verificacao'?404:200;assert.equal(r.status,expected,path);
 const text=r.headers.get('content-type')?.includes('text/html')?await r.text():'';
 if(text){const $=load(text);assert.equal($('h1').length,1,path);assert.equal($('link[rel=canonical]').length,1,path);assert.ok($('main').text().length>200,path);if(expected===404)assert.ok($('meta[name=robots]').attr('content').includes('noindex'));}
 results.push({path,status:r.status,contentType:r.headers.get('content-type')});
}
console.log(JSON.stringify({base,status:'PASS',checked:results.length,results},null,2));
