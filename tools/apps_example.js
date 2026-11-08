const card=(e,t,s,r='')=>`<div class="card"><div class="e">${e}</div><div class="m"><b>${t}</b><span>${s}</span></div>${r?`<div class="r">${r}</div>`:''}</div>`;
const tile=(e,t,s)=>`<div class="tile"><div class="e">${e}</div><b>${t}</b><span>${s}</span></div>`;
const row=(l,on)=>`<div class="row"><span>${l}</span><div class="tog${on?' on':''}"></div></div>`;
const bar=(p)=>`<div class="bar"><i style="width:${p}%"></i></div>`;
const foot='Concept by Ethan';
const qrCard=(l,s)=>`<div class="hero" style="text-align:center"><div class="l">${l}</div><div class="qr"></div><div class="s" style="max-width:none">${s}</div></div>`;

module.exports={
'topping-books':{
 name:'Topping & Company',logo:'📚',tagline:'Booksellers · Bath · Edinburgh · Ely · St Andrews',
 vars:{bg:'#1d1a16',blob1:'#9c6b30',blob2:'#2f5d50',brand:'#7a4f1f',onbrand:'#fff',paper:'#f8f4ec',card:'#fff',tint:'#f1e6d3',ink:'#1f1a14',muted:'#7a6f62'},
 screens:[
  {tab:'Events',icon:'🎤',html:`<div class="sub">Topping Bath</div><h1>Author events</h1>
   <div class="chips"><span class="chip on">Bath</span><span class="chip">Edinburgh</span><span class="chip">Ely</span><span class="chip">St Andrews</span></div>
   <div class="hero"><div class="l">This Thursday · 7pm</div><div class="v">In conversation</div><div class="s">Signed copies on the night</div><div class="btn">Book tickets</div><div class="em">🎙️</div></div>
   <h2>Coming up</h2>${card('🖋️','Poetry evening','Fri · 7.30pm','£8')}${card('🌍','Travel writing talk','Sat · 3pm','£10')}${card('🎄','Christmas readings','12 Dec','Free')}`},
  {tab:'Club',icon:'✍️',html:`<h1>Signed Fiction Club</h1><div class="sub">Your monthly signed first edition</div>
   <div class="hero"><div class="l">November's book</div><div class="v">Posted Friday</div><div class="s">With a letter from Carson, our Fiction Buyer</div>${bar(80)}</div>
   ${card('📦','Track delivery','Royal Mail · arriving Sat')}${card('🎁','Gift a subscription','3, 6, 9 or 12 books','Gift')}${row('Pause next month',false)}`},
  {tab:'Wishlist',icon:'🔖',html:`<h1>Your shelf</h1><div class="sub">Reserved at Topping Bath</div>
   ${card('📗','New Scottish fiction','Ready to collect','Ready')}${card('📘','History hardback','Ordering in · 3 days')}${card('📙','Signed cookbook','Wishlist')}`},
  {tab:'Vouchers',icon:'🎟️',html:`<h1>Book voucher</h1><div class="sub">Use in any of our four shops</div>${qrCard('Balance £25.00','Scan at the till')}${card('💌','Send a voucher','Arrives instantly by email','Send')}`}],
 steps:[
  {screen:0,caption:'Author events at every shop, booked in a tap',scroll:80},
  {screen:1,caption:'Signed Fiction Club tracked and managed',notif:{icon:'📚',title:'Your signed book is on its way',body:"November's Signed Fiction Club pick was posted today."}},
  {screen:2,caption:'Reserve books to collect in store'},
  {screen:3,caption:'Book vouchers sent and spent from the phone'}],
 outro:{title:'Topping,<br>in every reader\'s pocket',text:'Events, the Signed Fiction Club and vouchers across all four shops.',foot}
},
'brocksbushes':{
 name:'Brocksbushes',logo:'🍓',tagline:'Farm shop & Courtyard Kitchen · Stocksfield',
 vars:{bg:'#14241a',blob1:'#2f9e44',blob2:'#e8590c',brand:'#2b8a3e',onbrand:'#fff',paper:'#f5f8f2',card:'#fff',tint:'#e3f1df',ink:'#14231a',muted:'#5f6f62'},
 screens:[
  {tab:'Rewards',icon:'💚',html:`<div class="sub">Homegrown Rewards</div><h1>Hi Sarah</h1>
   <div class="hero"><div class="l">Your points</div><div class="v">412 points</div><div class="s">£4.12 to spend in store</div><div class="em">🥧</div></div>
   ${qrCard('Your rewards card','Scan at the till, no card to forget')}`},
  {tab:'Offers',icon:'🏷️',html:`<h1>Member prices</h1><div class="sub">This week's green labels</div>
   ${card('🌭','Homemade sausages','Butchery','−20%')}${card('🧀','Northumbrian cheese','Deli','−15%')}${card('🍑','Peach Melba','Farm shop','£2.50')}${card('🥚','Free range eggs','Farm shop','−10%')}`},
  {tab:'Book',icon:'🎟️',html:`<h1>Book a visit</h1><div class="sub">Play Barn, PYO and events</div>
   ${card('🛝','Play Barn','Today · 2pm slot','Book')}${card('🎂','Birthday party','Saturdays available','Book')}${card('🎄','Christmas Fayre','Members get early access','Early')}`},
  {tab:'Kitchen',icon:'☕',html:`<h1>Courtyard Kitchen</h1><div class="sub">Breakfast from 9.30am</div>
   ${card('🍳','Full breakfast','Table 12','Add')}${card('🫖','Takeaway afternoon tea','Collect Saturday','Order')}${card('🍰','Cheese scone','Fresh this morning','Add')}`}],
 steps:[
  {screen:0,caption:'Homegrown Rewards card on their phone'},
  {screen:1,caption:'Member prices from the farm shop, deli and butchery',notif:{icon:'🍓',title:'PYO opens Saturday',body:'Members get first booking for the new picking season.'}},
  {screen:2,caption:'Play Barn, parties and events booked in a tap'},
  {screen:3,caption:'Order from the Courtyard Kitchen'}],
 outro:{title:'Brocksbushes,<br>in every regular\'s pocket',text:'Rewards, member prices, Play Barn bookings and the Kitchen in one app.',foot}
},
'kemptown-bookshop':{
 name:'Kemptown Bookshop',logo:'📖',tagline:'Independent bookshop · Brighton',
 vars:{bg:'#1b1730',blob1:'#7048e8',blob2:'#f783ac',brand:'#5f3dc4',onbrand:'#fff',paper:'#f7f5fc',card:'#fff',tint:'#ebe5fc',ink:'#1a1530',muted:'#6c6680'},
 screens:[
  {tab:'Box',icon:'🎁',html:`<div class="sub">Book subscription box</div><h1>Your box</h1>
   <div class="hero"><div class="l">November box</div><div class="v">Hand delivered Thursday</div><div class="s">Hardback · wrapped · postcard, bookmark, drink and snack</div><div class="em">📦</div></div>
   ${card('🗓️','Box 4 of 12','Tote bag with your 12th box')}${row('Switch to paperback',false)}`},
  {tab:'Subscribe',icon:'✨',html:`<h1>Start a box</h1><div class="sub">Brighton & Hove hand delivery</div>
   <div class="chips"><span class="chip">3 months</span><span class="chip on">6 months</span><span class="chip">12 months</span></div>
   ${card('📕','Paperback','Six new fiction picks')}${card('📘','Hardback','Six new fiction picks')}<div class="btn solid" style="display:block;text-align:center">Subscribe in one tap</div>`},
  {tab:'Shop',icon:'🛍️',html:`<h1>Order to collect</h1><div class="sub">Ready in the shop</div>
   ${card('📗','Staff pick of the week','In stock','Reserve')}${card('📙','Brighton history','Ordering in · 2 days','Order')}`},
  {tab:'Gift',icon:'💌',html:`<h1>Gift a box</h1><div class="sub">The present that arrives every month</div>${card('🎄','Christmas gift box','Starts in December','Gift')}${card('✉️','Gift message','Printed on the first postcard')}`}],
 steps:[
  {screen:0,caption:'Subscribers see what\'s coming and when'},
  {screen:1,caption:'Sign up in one tap, no emails back and forth',notif:{icon:'📖',title:'Your box is out for delivery',body:"November's book is on its way across Kemptown."}},
  {screen:2,caption:'Reserve and order books to collect'},
  {screen:3,caption:'Gift boxes for Christmas'}],
 outro:{title:'Kemptown Bookshop,<br>in every reader\'s pocket',text:'Subscription boxes, reservations and gifts in one app.',foot}
},
'hambleton-bakery':{
 name:'Hambleton Bakery',logo:'🥖',tagline:'Artisan bakery · Rutland and beyond',
 vars:{bg:'#241a12',blob1:'#d9822b',blob2:'#a0522d',brand:'#b5651d',onbrand:'#fff',paper:'#faf6f0',card:'#fff',tint:'#f6e7d4',ink:'#22180f',muted:'#7a6a5a'},
 screens:[
  {tab:'Order',icon:'🥐',html:`<div class="sub">Collect from Oakham</div><h1>Order ahead</h1>
   <div class="chips"><span class="chip on">Oakham</span><span class="chip">Stamford</span><span class="chip">Oundle</span><span class="chip">St Ives</span></div>
   ${card('🍞','Hambleton sourdough','Baked this morning','Add')}${card('🥐','Croissants × 4','','Add')}${card('🍰','Brownies','','Add')}<div class="btn solid" style="display:block;text-align:center">Collect Saturday 9am</div>`},
  {tab:'Regular',icon:'🔁',html:`<h1>Weekly order</h1><div class="sub">Same loaf, every Saturday</div>
   ${card('🍞','Sourdough + 2 croissants','Every Saturday · Oakham')}${row('Skip this week',false)}${row('Remind me Friday',true)}`},
  {tab:'Card',icon:'⭐',html:`<h1>Loyalty</h1><div class="sub">Every 10th loaf on us</div>
   <div class="hero"><div class="l">Your card</div><div class="v">7 of 10</div><div class="stamps"><div class="stamp f">🍞</div><div class="stamp f">🍞</div><div class="stamp f">🍞</div><div class="stamp"></div><div class="stamp"></div></div></div>`},
  {tab:'Shops',icon:'📍',html:`<h1>Our shops</h1><div class="sub">Eight bakeries</div>${card('🏡','Exton','Bakery Café & Shop','Open')}${card('🏪','Oakham','Gaol Street','Open')}${card('🏪','Stamford','Ironmonger Street','Open')}${card('🏪','West Bridgford','Melton Road','Open')}`}],
 steps:[
  {screen:0,caption:'Order ahead from any of the eight shops'},
  {screen:1,caption:'A standing weekly order, skipped in a tap',notif:{icon:'🥖',title:'Your bread is ready',body:'Your Saturday order is waiting at Hambleton Oakham.'}},
  {screen:2,caption:'A loyalty card that rewards regulars'},
  {screen:3,caption:'Every shop and café, with opening times'}],
 outro:{title:'Hambleton Bakery,<br>in every regular\'s pocket',text:'Order ahead, weekly loaves and loyalty across all eight shops.',foot}
},
'wanderlust-wine':{
 name:'Wanderlust Wine',logo:'🍷',tagline:'Independent wine merchant · London',
 vars:{bg:'#1f0f17',blob1:'#a61e4d',blob2:'#e67700',brand:'#8f1d42',onbrand:'#fff',paper:'#faf5f6',card:'#fff',tint:'#f6e1e8',ink:'#1f0f17',muted:'#7a6068'},
 screens:[
  {tab:'Club',icon:'🍇',html:`<div class="sub">Gold member</div><h1>Your next case</h1>
   <div class="hero"><div class="l">Ships 1 December</div><div class="v">8 bottles</div><div class="s">Small producers from the Loire and Douro</div><div class="em">📦</div></div>
   ${row('Pause this shipment',false)}${card('🔁','Swap a bottle','Before 25 November','Swap')}`},
  {tab:'Notes',icon:'📝',html:`<h1>Tasting notes</h1><div class="sub">From this case</div>
   ${card('🍾','Loire Chenin','Pair with roast chicken','★★★★')}${card('🍷','Douro red','Pair with lamb','★★★★★')}${card('🥂','English sparkling','For Christmas','Saved')}`},
  {tab:'Shop',icon:'🛒',html:`<h1>Reorder</h1><div class="sub">Gold members save 10%</div>
   ${card('🍷','Douro red × 6','Your favourite','−10%')}${card('🎁','Gift a bottle','Delivered next working day','Gift')}<div class="btn solid" style="display:block;text-align:center">Next-day delivery</div>`},
  {tab:'Events',icon:'🥂',html:`<h1>Meet the makers</h1><div class="sub">Member invitations</div>${card('🍇','Producer evening','Thu 4 Dec · London','RSVP')}${card('🧀','Wine and cheese','January','Soon')}`}],
 steps:[
  {screen:0,caption:'Club members see and tweak their next case'},
  {screen:1,caption:'Tasting notes and pairings for every bottle',notif:{icon:'🍷',title:'Your case ships Monday',body:'Swap any bottle before Friday. Your Gold discount is applied.'}},
  {screen:2,caption:'Reorder favourites at the member price'},
  {screen:3,caption:'Producer events with one-tap RSVP'}],
 outro:{title:'Wanderlust,<br>in every member\'s pocket',text:'The wine club, tasting notes, reorders and events in one app.',foot}
},
'boulderryn':{
 name:'BoulderRyn',logo:'🧗',tagline:'Bouldering centre · Penryn',
 vars:{bg:'#0f1d24',blob1:'#0ca678',blob2:'#f59f00',brand:'#099268',onbrand:'#fff',paper:'#f3f8f6',card:'#fff',tint:'#d9f2e9',ink:'#0f1d1a',muted:'#5b6e68'},
 screens:[
  {tab:'Now',icon:'📊',html:`<div class="sub">BoulderRyn · Penryn</div><h1>Right now</h1>
   <div class="card"><div class="e">👥</div><div class="m"><b>Quiet · 12 climbers</b><span>Busiest after 6pm</span>${bar(25)}</div></div>
   <div class="hero"><div class="l">New set</div><div class="v">Green circuit reset</div><div class="s">14 new problems on the cave wall</div><div class="em">🪨</div></div>`},
  {tab:'Problems',icon:'🪨',html:`<h1>Your ticks</h1><div class="sub">80+ problems, reset regularly</div>
   ${card('🟢','Cave · green 4','Flashed today','✓')}${card('🔵','Slab · blue 6','2 attempts')}${card('🔴','Overhang · red 9','Project')}`},
  {tab:'Pass',icon:'🎟️',html:`<h1>Membership</h1><div class="sub">Monthly unlimited</div>${qrCard('Check-in pass','Scan at the desk')}`},
  {tab:'Stats',icon:'🔥',html:`<h1>Your climbing</h1><div class="sub">This month</div><div class="grid" style="margin-top:14px">${tile('🔥','5 weeks','Streak')}${tile('🧗','23','Sessions')}${tile('🟢','41','Problems ticked')}${tile('☕','6','Coffees')}</div>`}],
 steps:[
  {screen:0,caption:'See how busy it is before setting off'},
  {screen:1,caption:'Tick problems from every new set',notif:{icon:'🧗',title:'New problems are up',body:'The green circuit has been reset. 14 fresh problems on the cave wall.'}},
  {screen:2,caption:'Membership pass for quick check-in'},
  {screen:3,caption:'Streaks and stats that keep climbers coming back'}],
 outro:{title:'BoulderRyn,<br>in every climber\'s pocket',text:'Live busyness, new set alerts, ticks and check-in in one app.',foot}
},
'barn-climbing-centre':{
 name:'The Barn Climbing Centre',logo:'🧗‍♀️',tagline:'Climbing centre · Tavistock',
 vars:{bg:'#1e1a12',blob1:'#c2410c',blob2:'#4d7c0f',brand:'#b45309',onbrand:'#fff',paper:'#faf7f1',card:'#fff',tint:'#f8e8d3',ink:'#1e1a12',muted:'#74695a'},
 screens:[
  {tab:'Book',icon:'📅',html:`<div class="sub">The Barn · Tavistock</div><h1>Book a session</h1>
   <div class="chips"><span class="chip on">Climbing</span><span class="chip">Courses</span><span class="chip">Youth club</span></div>
   ${card('🧗','Open climbing','Sat · 10am to 1pm','Book')}${card('🪢','Intro to lead','Sun · 2 sessions','Book')}${card('🧒','Kids taster','Sat · 2pm','Book')}`},
  {tab:'Youth',icon:'🏅',html:`<h1>Youth club</h1><div class="sub">NICAS progress for Alfie</div>
   <div class="hero"><div class="l">NICAS Level 2</div><div class="v">6 of 9 skills signed off</div>${bar(66)}</div>
   ${card('✅','Tying in','Signed off by Tom')}${card('⏳','Lead clipping','Next session')}`},
  {tab:'Pass',icon:'🎟️',html:`<h1>Your pass</h1><div class="sub">10 visit pass</div>${qrCard('7 visits left','Scan at the desk')}`},
  {tab:'News',icon:'📣',html:`<h1>At the Barn</h1>${card('🪨','Boulder reset','New problems this week')}${card('🎉','Members social','Friday night','RSVP')}${card('🌤️','Outdoor trip','Dartmoor, Sunday','Join')}`}],
 steps:[
  {screen:0,caption:'Sessions, courses and youth club in one place'},
  {screen:1,caption:'Parents follow their child\'s NICAS progress',notif:{icon:'🏅',title:'Alfie passed a skill',body:'Lead clipping signed off at tonight\'s youth club.'}},
  {screen:2,caption:'Passes on the phone, no punch cards'},
  {screen:3,caption:'News, resets and trips straight to climbers'}],
 outro:{title:'The Barn,<br>in every climber\'s pocket',text:'Bookings, youth club progress, passes and news in one app.',foot}
},
'dogtown':{
 name:'Dogtown',logo:'🐕',tagline:'Daycare, grooming & rehab · Chiswick and Sheen',
 vars:{bg:'#10202b',blob1:'#1c7ed6',blob2:'#fab005',brand:'#1971c2',onbrand:'#fff',paper:'#f4f7fb',card:'#fff',tint:'#dfeaf8',ink:'#0f1b26',muted:'#5f6b78'},
 screens:[
  {tab:'Book',icon:'📅',html:`<div class="sub">For Biscuit</div><h1>Book</h1>
   <div class="chips"><span class="chip on">Daycare</span><span class="chip">Grooming</span><span class="chip">Hydro</span></div>
   ${card('🏡','Daycare · Chiswick','Tue, Wed, Fri','Booked')}${card('🚐','Collection','W4 · 8.15am','Added')}${card('✂️','Full groom','Fri · add to daycare','Add')}`},
  {tab:'Today',icon:'📸',html:`<h1>Biscuit's day</h1><div class="sub">Live from Chiswick</div>
   <div class="hero"><div class="l">11:42</div><div class="v">Playtime in the garden</div><div class="s">Made a new friend called Pepper</div><div class="em">🎾</div></div>
   ${card('🍖','Lunch','All gone')}${card('😴','Nap','30 minutes')}`},
  {tab:'Rehab',icon:'💧',html:`<h1>Hydrotherapy</h1><div class="sub">Rehab plan · Chiswick</div><div class="hero"><div class="l">Session 4 of 8</div><div class="v">Thursday 10am</div>${bar(50)}</div>${card('📝','Therapist notes','Better range of movement')}`},
  {tab:'Pet',icon:'🐾',html:`<h1>Biscuit</h1><div class="sub">Cockapoo · 3 years</div>${card('💉','Vaccinations','Up to date')}${card('✂️','Next groom due','In 2 weeks','Book')}`}],
 steps:[
  {screen:0,caption:'Daycare, collection and grooming booked together'},
  {screen:1,caption:'Photo updates through the day',notif:{icon:'🐕',title:'Biscuit is ready for collection',body:'Freshly groomed and tired out from a great day.'}},
  {screen:2,caption:'Hydrotherapy plans with therapist notes'},
  {screen:3,caption:'Every dog\'s details and reminders in one place'}],
 outro:{title:'Dogtown,<br>in every owner\'s pocket',text:'Daycare, grooming and rehab across Chiswick and Sheen in one app.',foot}
},
'chepstow-garden-centre':{
 name:'Chepstow Garden Centre',logo:'🌿',tagline:'Garden centre, restaurant & farm shop · Chepstow',
 vars:{bg:'#16231a',blob1:'#37b24d',blob2:'#f08c00',brand:'#2f9e44',onbrand:'#fff',paper:'#f4f8f2',card:'#fff',tint:'#e0f2e0',ink:'#14231a',muted:'#5d6e60'},
 screens:[
  {tab:'Club',icon:'💳',html:`<div class="sub">Gardener's Club</div><h1>Your card</h1>
   <div class="hero"><div class="l">Points</div><div class="v">1,260 points</div><div class="s">£12.60 to spend</div><div class="em">🌱</div></div>${qrCard('Scan at the till','In the garden centre, restaurant or farm shop')}`},
  {tab:'Offers',icon:'🏷️',html:`<h1>Member offers</h1><div class="sub">This week</div>
   ${card('🎂','Birthday voucher','Ready to use this month','Use')}${card('👵','Gold Tuesday','10% off for Gold members','Tue')}${card('🌷','Spring bulbs','3 for 2','Offer')}`},
  {tab:'Restaurant',icon:'🍰',html:`<h1>Garden Restaurant</h1><div class="sub">Book a table</div>${card('🫖','Afternoon tea','Sat · 2.30pm · 2 people','Book')}${card('🍽️','Lunch menu','Today\'s specials')}`},
  {tab:'Garden',icon:'🪴',html:`<h1>My garden</h1><div class="sub">Plants you've bought</div>${card('🌹','Rose · climbing','Feed this month')}${card('🥶','Frost tonight','Bring tender plants in','Alert')}`}],
 steps:[
  {screen:0,caption:'Gardener\'s Club card and points on the phone'},
  {screen:1,caption:'Birthday vouchers and member offers that get used',notif:{icon:'🌿',title:'Happy birthday from Chepstow',body:'Your Gardener\'s Club birthday voucher is ready in the app.'}},
  {screen:2,caption:'Afternoon tea booked in a tap'},
  {screen:3,caption:'Plant care reminders and frost alerts'}],
 outro:{title:'Chepstow Garden Centre,<br>in every member\'s pocket',text:'Gardener\'s Club, offers, the restaurant and plant care in one app.',foot}
},
'pocklington-arts-centre':{
 name:'Pocklington Arts Centre',logo:'🎭',tagline:'Arts centre · Pocklington',
 vars:{bg:'#1a1028',blob1:'#be4bdb',blob2:'#fd7e14',brand:'#9c36b5',onbrand:'#fff',paper:'#f9f5fb',card:'#fff',tint:'#f1e3f7',ink:'#1a1028',muted:'#6f6278'},
 screens:[
  {tab:"What's on",icon:'🎟️',html:`<div class="sub">Pocklington Arts Centre</div><h1>What's on</h1>
   <div class="chips"><span class="chip on">All</span><span class="chip">Cinema</span><span class="chip">Music</span><span class="chip">Comedy</span></div>
   <div class="hero"><div class="l">Friday · 8pm</div><div class="v">Live music</div><div class="s">Friends get priority on the waiting list</div><div class="btn">Book</div><div class="em">🎸</div></div>
   ${card('🎬','Evening cinema','Tonight · 7.30pm','£6.50')}${card('😂','Comedy night','Sat · 8pm','£14')}`},
  {tab:'Friends',icon:'💜',html:`<h1>Friends card</h1><div class="sub">Joint membership · renews May</div>${qrCard('Friend of PAC','Discounted cinema and 10% off at the bar')}`},
  {tab:'Waitlist',icon:'⏳',html:`<h1>Waiting list</h1><div class="sub">Friends priority</div>${card('🎤','Sold-out comedy','You\'re 2nd in line','Waiting')}${card('🎭','Panto','2 tickets released','Book')}`},
  {tab:'Bar',icon:'🍷',html:`<h1>Bar</h1><div class="sub">Order for the interval</div>${card('🍷','Glass of red','Friends 10% off','Add')}${card('🍫','Chocolate','','Add')}<div class="btn solid" style="display:block;text-align:center">Ready at the interval</div>`}],
 steps:[
  {screen:0,caption:'Cinema, music, comedy and theatre in one place'},
  {screen:1,caption:'The Friends card always with them'},
  {screen:2,caption:'Waiting list alerts for sold-out shows',notif:{icon:'🎭',title:'Tickets just came back',body:'2 seats released for Saturday. Friends get first chance.'}},
  {screen:3,caption:'Interval drinks ordered ahead'}],
 outro:{title:'PAC,<br>in every Friend\'s pocket',text:'What\'s on, Friends perks, waiting lists and bar orders in one app.',foot}
}
};
