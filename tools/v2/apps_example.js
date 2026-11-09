// v2 mockup config (sample). Differences from v1: opens on a lock-screen notification,
// taps through a real action, line icons instead of emoji, bigger owner-facing captions, outro with the ask.
const card=(t,ts,title,sub,r='',cls='')=>`<div class="card ${cls}"><div class="t">${t}<small>${ts}</small></div><div class="m"><b>${title}</b><span>${sub}</span></div>${r?`<div class="r">${r}</div>`:''}</div>`;
const item=(title,sub,r='')=>`<div class="card"><div class="photo"></div><div class="m"><b>${title}</b><span>${sub}</span></div>${r?`<div class="r">${r}</div>`:''}</div>`;

module.exports={
'shepreth-wildlife-park':{
 name:'Shepreth Wildlife Park',mono:'S',kicker:'App concept for',
 vars:{bg:'#10231a',glow1:'#2f8f4e',glow2:'#d9822b',lock:'#0c1a13',brand:'#1f7a43',onbrand:'#fff',paper:'#f4f6f1',card:'#fff',tint:'#dcefe0',ink:'#13201a',muted:'#66736b'},
 lock:{date:'Saturday 14 November',title:'Tiger talk starts in 15 minutes',body:'Head to the tiger enclosure for 11am. Tap to see the rest of today.',caption:'What your visitors would see on the day'},
 screens:[
  {tab:'Today',icon:'today',html:`<div class="sub">Open today · 10am to 4.30pm</div><h1>Today at the park</h1>
   ${card('11:00','am','Tiger talk','Tiger enclosure · starts in 15 min','Next','now')}
   ${card('12:30','pm','Meerkat feed','Meerkat mound')}
   ${card('2:00','pm','Red panda talk','Red panda walk-through')}
   ${card('3:15','pm','Otter feed','By the lake')}`},
  {tab:'My pass',icon:'pass',html:`<h1>Annual pass</h1><div class="sub">Sarah Jones · adult pass</div>
   <div class="swap"><div class="b1"><div class="upload"><div class="circle">{{camera}}</div><b style="font-size:15px">Add your photo</b><div class="sub">Take a selfie and your pass is ready straight away</div><div class="btn" id="addphoto">Take photo</div></div></div>
   <div class="b2"><div class="pass"><div class="row"><div class="face"></div><div><b>Sarah Jones</b><small>Annual pass · valid to Nov 2027</small></div></div><div class="qr"></div><div style="text-align:center"><span class="ok">✓ Ready to scan at the gate</span></div></div></div></div>`},
  {tab:'Perks',icon:'perks',html:`<h1>Pass holder perks</h1><div class="sub">Show your pass to use them</div>
   <div class="hero"><div class="l">Partner attractions</div><div class="v">30% off entry</div><div class="s">At partner parks, all year round</div></div>
   ${item('Gift a pass','Sent to their phone in seconds','Gift')}
   ${item('Bring a friend','Guest tickets for pass holders','View')}`}],
 steps:[
  {screen:0,caption:'Keeper talks land on every phone, so the day runs itself',dwell:2300},
  {screen:1,caption:'New pass holders add a photo…',tap:'#addphoto',done:'.swap',before:1200,dwell:900},
  {caption:'…and the pass is ready. No cards to print, collect or replace.',before:200,dwell:2600},
  {screen:2,caption:'Partner discounts and gift passes, all in one place',dwell:2300}],
 outro:{title:'Shepreth Wildlife Park,<br>in every pass holder\'s pocket',text:'Talks, passes and perks in one iPhone app, built around how the park already works.',cta:'Like it? Just reply to my email',foot:'Concept by Ethan · High Street Apps'}
}};
