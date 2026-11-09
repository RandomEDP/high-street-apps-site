// v2 recorder: APPS=./apps_sample.js node rec.js [slug...]  ->  out/<slug>/{raw.webm,poster.png}
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const apps=require(path.resolve(process.env.APPS||'./apps_sample.js'));
(async()=>{
 const b=await chromium.launch();
 for(const key of (process.argv[2]?process.argv.slice(2):Object.keys(apps))){
  const dir=path.resolve('out',key);fs.mkdirSync(dir,{recursive:true});
  fs.copyFileSync(path.join(__dirname,'template.html'),path.join(dir,'index.html'));
  fs.writeFileSync(path.join(dir,'app.js'),'window.APP='+JSON.stringify(apps[key])+';');
  const ctx=await b.newContext({viewport:{width:720,height:1280},recordVideo:{dir,size:{width:720,height:1280}}});
  const p=await ctx.newPage();await p.goto('file://'+dir+'/index.html');
  // poster = lock screen with the notification showing
  await p.waitForFunction(()=>window.POSTER===true);await p.waitForTimeout(900);await p.screenshot({path:path.join(dir,'poster.png')});
  await p.waitForFunction(()=>window.DONE===true,null,{timeout:60000});
  const v=await p.video().path();await ctx.close();fs.renameSync(v,path.join(dir,'raw.webm'));console.log('done',key);
 }
 await b.close();
})();
