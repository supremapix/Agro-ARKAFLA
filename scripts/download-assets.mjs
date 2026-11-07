import fs from 'node:fs/promises';
import path from 'node:path';
const dir='src';
async function walk(d){return (await Promise.all((await fs.readdir(d,{withFileTypes:true})).map(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]))).flat()}
const text=(await Promise.all((await walk(dir)).map(f=>fs.readFile(f,'utf8')))).join('\n');
const urls=[...new Set([...text.matchAll(/https:\/\/fazendafundamento\.agroarkafla\.com\/assets\/images\/[^\s"'<>]+/g)].map(m=>m[0]))];
for(const u of urls){try{const r=await fetch(u);if(!r.ok)throw Error(r.status);const b=Buffer.from(await r.arrayBuffer());await fs.writeFile('public/images/'+u.split('/').pop(),b);console.log(r.status,b.length,u.split('/').pop());}catch(e){console.log('FAIL',u,e.message)}}
const r=await fetch('https://img.supremamidia.com/suprema-img.png');if(r.ok)await fs.writeFile('public/images/suprema-img.png',Buffer.from(await r.arrayBuffer()));
