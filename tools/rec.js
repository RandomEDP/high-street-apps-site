const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const apps=require(process.env.APPS||'./apps.js');
(async()=>{
 const b=await chromium.launch();
 for(const key of (process.argv[2]?process.argv.slice(2):Object.keys(apps))){
  const dir=path.resolve('out',key);fs.mkdirSync(dir,{recursive:true});
  fs.copyFileSync('template.html',path.join(dir,'index.html'));
  const a=apps[key];
  fs.writeFileSync(path.join(dir,'app.js'),'window.APP='+JSON.stringify(a)+';');
  const ctx=await b.newContext({viewport:{width:720,height:1280},recordVideo:{dir,size:{width:720,height:1280}}});
  const p=await ctx.newPage();await p.goto('file://'+dir+'/index.html');
  // poster frame mid-way
  await p.waitForTimeout(2700);await p.screenshot({path:path.join(dir,'poster.png')});
  await p.waitForFunction(()=>window.DONE===true,null,{timeout:60000});
  const v=await p.video().path();await ctx.close();
  fs.renameSync(v,path.join(dir,'raw.webm'));console.log('done',key);
 }
 await b.close();
})();
