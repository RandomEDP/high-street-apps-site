const card=(e,t,s,r='')=>`<div class="card"><div class="e">${e}</div><div class="m"><b>${t}</b><span>${s}</span></div>${r?`<div class="r">${r}</div>`:''}</div>`;
const tile=(e,t,s)=>`<div class="tile"><div class="e">${e}</div><b>${t}</b><span>${s}</span></div>`;
const row=(l,on)=>`<div class="row"><span>${l}</span><div class="tog${on?' on':''}"></div></div>`;
const week=(d,on,skip=[])=>`<div class="week">${d.map((x,i)=>`<div class="day${on.includes(i)?' on':''}${skip.includes(i)?' skip':''}">${x[0]}<b>${x[1]}</b></div>`).join('')}</div>`;
const foot='Concept by Ethan';

module.exports={
'showroom-cinema':{
 name:'Showroom Cinema',logo:'🎬',tagline:'Independent cinema · Sheffield',
 vars:{bg:'#141414',blob1:'#d6336c',blob2:'#3b5bdb',brand:'#c2255c',onbrand:'#fff',paper:'#f7f5f2',card:'#fff',tint:'#fbe3ec',ink:'#161616',muted:'#6f6a6a'},
 screens:[
  {tab:"What's on",icon:'🎞️',html:`<div class="sub">Tonight in Sheffield</div><h1>What's on</h1>
   <div class="chips"><span class="chip on">Today</span><span class="chip">Tomorrow</span><span class="chip">Seasons</span><span class="chip">Festivals</span></div>
   <div class="hero"><div class="l">New this week</div><div class="v">Members' preview</div><div class="s">18:15 · 20:40 · Screen 2</div><div class="btn">Book seats</div><div class="em">🍿</div></div>
   <h2>Showing today</h2>${card('🎥','Cinema Strand','Director retrospective','17:30')}${card('🌍','World cinema','Subtitled','18:00')}${card('🧒','Break Into Film','Young programmers','19:00')}`},
  {tab:'Seats',icon:'💺',html:`<h1>Choose seats</h1><div class="sub">Screen 2 · 20:40</div>
   <div style="margin:16px 0 8px;height:6px;border-radius:4px;background:var(--brand);opacity:.6"></div><div class="sub" style="text-align:center">SCREEN</div>
   <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;margin-top:14px">${Array.from({length:48},(_,i)=>`<div style="aspect-ratio:1;border-radius:5px;background:${[19,20].includes(i)?'var(--brand)':[3,4,11,12,27,28,35,40,41].includes(i)?'#cfc8c8':'var(--tint)'}"></div>`).join('')}</div>
   <div class="card" style="margin-top:16px"><div class="e">🎟️</div><div class="m"><b>2 seats · E4, E5</b><span>Member price · no booking fee</span></div></div>`},
  {tab:'Card',icon:'💳',html:`<h1>Membership</h1><div class="sub">CINE26 · until your 27th birthday</div>
   <div class="hero" style="text-align:center"><div class="l">Member card</div><div class="qr"></div><div class="s" style="max-width:none">Scan at the Box Office or Café Bar</div></div>
   <h2>Your perks</h2>${card('🎁','Birthday gift','Ready to claim','Claim')}${card('☕','Café Bar discount','On food','Active')}`},
  {tab:'Café Bar',icon:'🍷',html:`<h1>Café Bar</h1><div class="sub">Order now, collect before the film</div>
   ${card('🍕','Pizza','Ready in 12 min','Add')}${card('🍿','Popcorn','Sweet or salted','Add')}${card('🍷','Glass of red','','Add')}${card('🥤','Soft drink','','Add')}<div class="btn solid" style="display:block;text-align:center">Collect at the bar · 20:25</div>`}],
 steps:[
  {screen:0,caption:"Tonight's films and seasons in one tap",scroll:90},
  {screen:1,caption:'Pick seats with member pricing, no booking fees'},
  {screen:2,caption:'Membership card and perks always with them',notif:{icon:'🎬',title:'Priority booking is open',body:'Members get first pick for the new season. Book before tickets go on general sale.'}},
  {screen:3,caption:'Pre-order from the Café Bar before the film'}],
 outro:{title:'Showroom Cinema,<br>in every member\'s pocket',text:'Priority booking, digital membership and Café Bar orders in one app.',foot}
},
'plymouth-arts-cinema':{
 name:'Plymouth Arts Cinema',logo:'🎟️',tagline:'Independent cinema · Plymouth',
 vars:{bg:'#0f1b2d',blob1:'#1c7ed6',blob2:'#f59f00',brand:'#1864ab',onbrand:'#fff',paper:'#f5f7fa',card:'#fff',tint:'#e3eefb',ink:'#111827',muted:'#667085'},
 screens:[
  {tab:'Films',icon:'🎞️',html:`<div class="sub">This week</div><h1>Now showing</h1>
   <div class="hero"><div class="l">Tuesday</div><div class="v">£6.50 Tuesdays</div><div class="s">For Friends members, every Tuesday screening</div><div class="btn">See films</div><div class="em">🎥</div></div>
   <h2>Today</h2>${card('🌍','International cinema','Subtitled','18:00')}${card('🎞️','Classic revival','35th anniversary','20:30')}${card('🎤','Q&A screening','With the director','Book')}`},
  {tab:'Membership',icon:'⭐',html:`<h1>Your membership</h1><div class="sub">Friend · Double</div>
   <div class="hero" style="text-align:center"><div class="l">Member card</div><div class="qr"></div><div class="s" style="max-width:none">No booking fees · 10% off tickets</div></div>
   <h2>Ready to use</h2>${card('🎟️','2 free tickets','Use on any screening','Use')}${card('🍸','2 free G&Ts','Plymouth Gin','Use')}`},
  {tab:'Guide',icon:'📖',html:`<h1>Cinema guide</h1><div class="sub">The new guide, on your phone</div>
   ${card('🎬','Coming soon','Priority booking open','New')}${card('🎉','Special events','Members invited','RSVP')}${card('❤️','Saved films','3 on your list','View')}`},
  {tab:'Support',icon:'💙',html:`<h1>Support PAC</h1><div class="sub">An independent, not-for-profit cinema</div>
   ${card('🙌','Supporter','No booking fees','£15')}${card('🎟️','Friend','Free ticket, 10% off','£35')}${card('🏆','Champion','Every screening','£300')}<div class="btn solid" style="display:block;text-align:center">Renew in one tap</div>`}],
 steps:[
  {screen:0,caption:"See what's on and book in seconds",scroll:60},
  {screen:1,caption:'Free tickets and drinks, ready at the door',notif:{icon:'🎟️',title:'Plymouth Arts Cinema',body:'Priority booking for members is now open. Your free tickets are waiting.'}},
  {screen:2,caption:'The cinema guide, without the postage'},
  {screen:3,caption:'Join or renew membership in one tap'}],
 outro:{title:'Plymouth Arts Cinema,<br>one tap from a ticket',text:'Membership, priority booking and the cinema guide in one app.',foot}
},
'barehams':{
 name:'Barehams Day Care',logo:'🐕',tagline:'Doggy day care · Orsett, Essex',
 vars:{bg:'#1f2f1c',blob1:'#5c8d3c',blob2:'#e0a339',brand:'#3f6d2a',onbrand:'#fff',paper:'#f8f6ef',card:'#fff',tint:'#e8f0dd',ink:'#1e2619',muted:'#6d7464'},
 screens:[
  {tab:'Book',icon:'🗓️',html:`<div class="sub">Hi there 👋</div><h1>Book Bella in</h1>
   ${week([['Mon','10'],['Tue','11'],['Wed','12'],['Thu','13'],['Fri','14']],[0,2,4])}
   <h2>Session</h2>${card('☀️','Full day','7:30am to 5:30pm','£27.50')}${card('🌤️','Half day','Up to 5 hours','£20.00')}${card('🚐','Pick-up & drop-off','Within 3 miles','Add')}`},
  {tab:'Today',icon:'📸',html:`<h1>Bella's day</h1><div class="sub">Checked in at 8:12am</div>
   <div class="hero"><div class="l">Photo update · 11:40</div><div class="v">Zoomies in the top field</div><div class="s">Played with 6 friends, drank lots of water</div><div class="em">🐾</div></div>
   <h2>Timeline</h2>${card('🌳','Open play','Outdoor area','09:00')}${card('🦴','Snack & rest','Indoor lounge','12:30')}${card('🎾','Ball games','Puppy area','14:00')}`},
  {tab:'Rewards',icon:'⭐',html:`<h1>Loyalty points</h1><div class="sub">Earned on every visit</div>
   <div class="hero"><div class="l">Your points</div><div class="v">340 points</div><div class="s">60 more for a free half day</div><div class="bar" style="background:rgba(255,255,255,.3)"><i style="width:85%;background:#fff"></i></div></div>`},
  {tab:'Bella',icon:'🐶',html:`<h1>Bella</h1><div class="sub">Cockapoo · 3 years</div>
   ${row('Vaccinations up to date',true)}${row('Flea & worm treatment',true)}${row('Assessment passed',true)}${row('Remind me before renewals',false)}`}],
 steps:[
  {screen:0,caption:'Book days and pick-ups in a few taps'},
  {screen:1,caption:'Photo updates through the day',notif:{icon:'🐕',title:'Bella is having a great day!',body:'New photo from the top field. Pick-up is from 4:30pm.'}},
  {screen:2,caption:'Loyalty points that bring owners back'},
  {screen:3,caption:'Vaccination records and reminders built in',toggle:'.tog:not(.on)'}],
 outro:{title:'Barehams,<br>in every owner\'s pocket',text:'Easier booking, happier owners and fewer phone calls.',foot}
},
'kings-dog-daycare':{
 name:"King's Dog Daycare",logo:'👑',tagline:'Daycare, grooming & café · Chelsea',
 vars:{bg:'#1b1730',blob1:'#7048e8',blob2:'#f08c00',brand:'#2b2350',onbrand:'#fff',paper:'#f7f6fb',card:'#fff',tint:'#ebe7f7',ink:'#18152a',muted:'#6b6780'},
 screens:[
  {tab:'Daycare',icon:'🐾',html:`<div class="sub">177 Fulham Road</div><h1>Book daycare</h1>
   <div class="hero"><div class="l">Small dogs up to 15kg</div><div class="v">3 spaces left Friday</div><div class="s">We cap the day at 27 dogs</div><div class="btn">Book Friday</div><div class="em">🐩</div></div>
   ${week([['Mon','10'],['Tue','11'],['Wed','12'],['Thu','13'],['Fri','14']],[1,3])}`},
  {tab:'Grooming',icon:'✂️',html:`<h1>Grooming salon</h1><div class="sub">Add a groom to a daycare day</div>
   ${card('🛁','Bath & blow-dry','Small dogs','Book')}${card('✂️','Full groom','Breed style','Book')}${card('💅','Nail trim','While they play','Add')}`},
  {tab:'Live',icon:'📸',html:`<h1>Teddy today</h1><div class="sub">Checked in 8:05am</div>
   <div class="hero"><div class="l">New photo · 13:10</div><div class="v">Nap time after the park</div><div class="s">Teddy and Luna are inseparable</div><div class="em">😴</div></div>
   ${card('🎾','Play session','Morning group','Done')}${card('🛁','Groom','Booked 15:00','Next')}`},
  {tab:'Café',icon:'☕',html:`<h1>Café</h1><div class="sub">Grab a coffee at drop-off</div>
   ${card('☕','Flat white','Ready at pick-up','Add')}${card('🥐','Croissant','','Add')}${card('🦴','Pup treat','Homemade','Add')}${card('🐶','Pet-a-Pooch','Sat 11am','Book')}`}],
 steps:[
  {screen:0,caption:'Live spaces, so owners book before the day fills up'},
  {screen:1,caption:'Add grooming to a daycare day'},
  {screen:2,caption:'Photo updates owners love',notif:{icon:'👑',title:"Teddy's groom is done",body:"He's looking fabulous! Ready for pick-up from 5pm."}},
  {screen:3,caption:'Coffee and Pet-a-Pooch, booked ahead'}],
 outro:{title:"King's,<br>in every owner's pocket",text:'Daycare, grooming, café and updates, all in one app.',foot}
},
'nick-nairn-cook-school':{
 name:'Nick Nairn Cook School',logo:'🔪',tagline:'Lake of Menteith · Stirling',
 vars:{bg:'#14241f',blob1:'#2b8a6e',blob2:'#c99a2e',brand:'#1f4d3f',onbrand:'#fff',paper:'#f8f6f1',card:'#fff',tint:'#e3eee9',ink:'#17201c',muted:'#6a726d'},
 screens:[
  {tab:'Classes',icon:'🍳',html:`<div class="sub">On the shores of the Lake of Menteith</div><h1>Cook with Nick</h1>
   <div class="chips"><span class="chip on">All</span><span class="chip">Seafood</span><span class="chip">Game</span><span class="chip">Baking</span></div><h2>Coming up</h2>
   ${card('🐟','Scottish seafood','Full day · 4 spaces','Book')}${card('🦌','Game & foraging','Full day','Book')}${card('🍰','Puddings','Half day','Book')}${card('🌿','Polytunnel to plate','Seasonal','Book')}`},
  {tab:'Vouchers',icon:'🎁',html:`<h1>Give a class</h1><div class="sub">Gift vouchers, sent instantly</div>
   <div class="hero"><div class="l">Gift voucher</div><div class="v">A day at the Cook School</div><div class="s">Personal message, delivered by email or text</div><div class="btn">Send a voucher</div><div class="em">🎁</div></div>
   ${card('🎟️','Redeem a voucher','Choose any date','Redeem')}`},
  {tab:'Recipes',icon:'📖',html:`<h1>Your recipes</h1><div class="sub">From your class with Nick</div>
   ${card('🐟','Pan-roast hake','Seafood class','Open')}${card('🥬','Polytunnel salad','Harvested on the day','Open')}${card('🍮','Cranachan','Scottish classic','Open')}`},
  {tab:'Shop',icon:'🛍️',html:`<h1>Shop</h1><div class="sub">Take the kitchen home</div>
   <div class="grid" style="margin-top:14px">${tile('📕','Cookbooks','Signed by Nick')}${tile('🔪','Knives','Used in class')}${tile('🧂','Larder','Scottish produce')}${tile('🎁','Gift sets','For foodies')}</div>`}],
 steps:[
  {screen:0,caption:'Browse and book classes in seconds',scroll:60},
  {screen:1,caption:'Gift vouchers sent straight from the phone'},
  {screen:2,caption:'Recipes from class, saved after they get home',notif:{icon:'🔪',title:'Nick Nairn Cook School',body:"Your recipes from today's seafood class are ready. Happy cooking!"}},
  {screen:3,caption:'Cookbooks and kit, a tap away'}],
 outro:{title:'Nick Nairn Cook School,<br>in every food lover\'s pocket',text:'Classes, vouchers, recipes and the shop in one app.',foot}
},
'horsham-brewery':{
 name:'Horsham Brewery',logo:'🍺',tagline:'Brewery & Tap Room · Horsham',
 vars:{bg:'#1d1a14',blob1:'#e8a317',blob2:'#a83e1d',brand:'#1f1f1f',onbrand:'#f5c542',paper:'#faf7f0',card:'#fff',tint:'#f6ecd0',ink:'#1b1a17',muted:'#706a5d'},
 screens:[
  {tab:'On tap',icon:'🍺',html:`<div class="sub">Open today 1pm to 11pm</div><h1>On tap now</h1>
   ${card('🍺','Kerveball','Grapefruit IPA · 4.5%','Best seller')}${card('🖤','Baby Sedge','Dry Irish stout · 4.2%','On')}${card('🍍','Trafalgar','Tropical pale · 4.2%','On')}${card('🥝','Victory','NZ pale · 3.8%','On')}${card('🧡','Carfax','Big & juicy · 6.2%','On')}`},
  {tab:'Beer Club',icon:'🎟️',html:`<h1>Beer Club</h1><div class="sub">£25 a month</div>
   <div class="hero"><div class="l">This month</div><div class="v">3 of 4 beers left</div><div class="stamps" style="grid-template-columns:repeat(4,1fr)"><div class="stamp f">🍺</div><div class="stamp"></div><div class="stamp"></div><div class="stamp"></div></div></div>
   <h2>Member perks</h2>${card('🆕','New brew discount','As soon as it hits the taps','Active')}`},
  {tab:'Events',icon:'🎉',html:`<h1>At the Tap Room</h1><div class="sub">Dog friendly · free parking</div>
   ${card('🎲','Horsham Wargaming Club','Sun 15 Nov · 6pm','Going')}${card('🎆',"New Year's Eve @ HBC",'Tickets £12.50','Book')}${card('🍻','Beer festival','September','Notify me')}`},
  {tab:'Takeaway',icon:'🛍️',html:`<h1>Order to collect</h1><div class="sub">Ready at the bar</div>
   ${card('🍺','Kerveball 4-pack','Cans','Add')}${card('🖤','Baby Sedge 4-pack','Cans','Add')}${card('👕','Festival T-shirt','£18.50','Add')}<div class="btn solid" style="display:block;text-align:center">Collect Friday from 4pm</div>`}],
 steps:[
  {screen:0,caption:"What's pouring right now",notif:{icon:'🍺',title:'New on tap!',body:'A fresh batch just hit the taps. Beer Club members get it cheaper today.'}},
  {screen:1,caption:'Beer Club allowance tracked automatically'},
  {screen:2,caption:'Events and tickets in one place'},
  {screen:3,caption:'Order takeaway cans to collect'}],
 outro:{title:'Horsham Brewery,<br>in every regular\'s pocket',text:'Beer Club, events and what\'s on tap, all in one app.',foot}
},
'thetford-garden-centre':{
 name:'Thetford Garden Centre',logo:'🌿',tagline:'Kilverstone · Norfolk',
 vars:{bg:'#1b2a20',blob1:'#40916c',blob2:'#d4a017',brand:'#2d6a4f',onbrand:'#fff',paper:'#f7f7f2',card:'#fff',tint:'#e2efe7',ink:'#18231c',muted:'#69736c'},
 screens:[
  {tab:'Home',icon:'🏡',html:`<div class="sub">Good morning</div><h1>This week at Thetford</h1>
   <div class="hero"><div class="l">In season</div><div class="v">Christmas trees are in</div><div class="s">Reserve yours to collect</div><div class="btn">Reserve</div><div class="em">🎄</div></div>
   <h2>Just arrived</h2>${card('🌹','Bare-root roses','Plant now','View')}${card('🌷','Spring bulbs','Last call','View')}`},
  {tab:'Events',icon:'🎟️',html:`<h1>Events</h1><div class="sub">Talks, family days and pop-ups</div>
   ${card('🎅','Santa\'s grotto','Weekends in December','Book')}${card('🎤','Gardening talk','Winter pruning','Book')}${card('🌮','Street food evening','Summer pop-up','Notify me')}${card('🧒','Family craft morning','Half term','Book')}`},
  {tab:'Kitchen',icon:'☕',html:`<h1>Lime Kiln Kitchen</h1><div class="sub">Breakfast, lunch & afternoon tea</div>
   ${card('🍳','Full breakfast','Until 11:30','Add')}${card('🫖','Afternoon tea','For two','Book')}${card('🍰','Cake of the day','','Add')}<div class="btn solid" style="display:block;text-align:center">Book a table</div>`},
  {tab:'Plant help',icon:'📷',html:`<h1>Plant care</h1><div class="sub">Tips for what you've bought</div>
   ${row('Watering reminders',true)}${row('Frost alerts for Norfolk',false)}${row('Monthly jobs in the garden',true)}`}],
 steps:[
  {screen:0,caption:"What's in season, straight to their phone"},
  {screen:1,caption:'Events and Santa bookings in a tap',scroll:40},
  {screen:2,caption:'Book the Lime Kiln Kitchen'},
  {screen:3,caption:'Plant care reminders keep customers coming back',toggle:'.tog:not(.on)',notif:{icon:'❄️',title:'Frost tonight in Thetford',body:'Bring tender plants in or cover them with fleece. We have fleece in store.'}}],
 outro:{title:'Thetford Garden Centre,<br>in your customers\' pocket',text:'Events, café bookings and seasonal nudges in one app.',foot}
},
'gardentime':{
 name:'Gardentime',logo:'🌻',tagline:'Garden centre, farm shop & café · South Hams',
 vars:{bg:'#1e2a2b',blob1:'#3a8f7b',blob2:'#f2b134',brand:'#2f6f62',onbrand:'#fff',paper:'#f9f7f1',card:'#fff',tint:'#e1efe9',ink:'#192322',muted:'#69736f'},
 screens:[
  {tab:'Garden Club',icon:'🌱',html:`<div class="sub">Garden Club member</div><h1>Your card</h1>
   <div class="hero" style="text-align:center"><div class="l">Loyalty card</div><div class="qr"></div><div class="s" style="max-width:none">Earn points in the centre, shop and café</div></div>
   <div class="card"><div class="e">⭐</div><div class="m"><b>420 points</b><span>80 more for a £5 voucher</span><div class="bar"><i style="width:84%"></i></div></div></div>`},
  {tab:'Offers',icon:'🏷️',html:`<h1>Member offers</h1><div class="sub">While stocks last</div>
   ${card('🌸','Half price plant','One per member','Use')}${card('🌼','Dahlias','£3 off with your card','Use')}${card('🌺','Nemesia','2 for £10','Use')}${card('🎄','Christmas trees','From 23 November','Reserve')}`},
  {tab:'Café',icon:'☕',html:`<h1>The Glasshouse Café</h1><div class="sub">Views to the coast · dogs welcome</div>
   ${card('🥧','Homity pie','West Country classic','Add')}${card('🫖','Cream tea','Scones & clotted cream','Add')}${card('☕','Local coffee','','Add')}<div class="btn solid" style="display:block;text-align:center">Order to your table</div>`},
  {tab:'Tips',icon:'📖',html:`<h1>Monthly tips</h1><div class="sub">From the Gardentime team</div>
   ${card('✂️','Prune your roses','This month','Read')}${card('🥕','Plant garlic','Before the frost','Read')}${card('🐦','Feed the birds','Winter care','Read')}`}],
 steps:[
  {screen:0,caption:'The loyalty card moves onto their phone'},
  {screen:1,caption:'Member offers in their pocket, not their inbox',notif:{icon:'🌻',title:'Gardentime',body:"Garden Club: this week's member offer is half price on one plant. See you soon!"}},
  {screen:2,caption:'Order in the Glasshouse Café'},
  {screen:3,caption:'Monthly tips keep members engaged'}],
 outro:{title:'Gardentime,<br>in every member\'s pocket',text:'Garden Club, offers and café orders in one app.',foot}
},
'painting-pottery-cafe':{
 name:'The Painting Pottery Café',logo:'🎨',tagline:'Paint your own pottery · Brighton',
 vars:{bg:'#23172e',blob1:'#e64980',blob2:'#15aabf',brand:'#c2255c',onbrand:'#fff',paper:'#fdf8f5',card:'#fff',tint:'#fde4ec',ink:'#22171f',muted:'#7a6b73'},
 screens:[
  {tab:'Book',icon:'🗓️',html:`<div class="sub">Open 7 days</div><h1>Book a session</h1>
   ${week([['Sat','15'],['Sun','16'],['Mon','17'],['Tue','18']],[0])}<h2>Saturday</h2>
   ${card('🎨','10:30 session','2 hours · 4 tables left','Book')}${card('🎨','1:00 session','2 tables left','Book')}${card('🎨','3:30 session','Fully booked','Waitlist')}<div class="sub">£10 deposit comes off your bill</div>`},
  {tab:'My pottery',icon:'🏺',html:`<h1>Your pottery</h1><div class="sub">Painted Saturday 15th</div>
   <div class="hero"><div class="l">In the kiln</div><div class="v">Ready in about 4 days</div><div class="s">We'll let you know the moment it's out</div><div class="bar" style="background:rgba(255,255,255,.3)"><i style="width:65%;background:#fff"></i></div><div class="em">🏺</div></div>
   ${card('☕','Mug','Glazed','Firing')}${card('🍽️','Plate','Glazed','Firing')}`},
  {tab:'Parties',icon:'🎉',html:`<h1>Parties</h1><div class="sub">Groups of 6+</div>
   ${card('🎂','Kids party','Private space','Plan')}${card('🥂','Evening private hire','Weekdays from 6pm','Enquire')}${card('👯','Group booking','£5pp deposit','Book')}`},
  {tab:'Collect',icon:'🛍️',html:`<h1>Collection</h1><div class="sub">Show this at the counter</div>
   <div class="hero" style="text-align:center"><div class="l">Collection pass</div><div class="qr"></div><div class="s" style="max-width:none">Quietest now: 1:30 to 2:30pm</div></div>`}],
 steps:[
  {screen:0,caption:'Book sessions and pay the deposit in seconds'},
  {screen:1,caption:'Track pottery through the kiln',notif:{icon:'🏺',title:'Your pottery is ready! 🎉',body:'Your mug and plate are out of the kiln. Collect any day, quietest 1:30 to 2:30pm.'}},
  {screen:2,caption:'Parties and private hire without the back and forth'},
  {screen:3,caption:'A collection pass, so no more names at the counter'}],
 outro:{title:'Painting Pottery Café,<br>in every painter\'s pocket',text:'Bookings, kiln updates and collection, all in one app.',foot}
},
'little-pottery-painting-co':{
 name:'The Little Pottery Painting Co',logo:'🖌️',tagline:'Royal Wootton Bassett',
 vars:{bg:'#1c2433',blob1:'#4c6ef5',blob2:'#fab005',brand:'#364fc7',onbrand:'#fff',paper:'#f8f8fc',card:'#fff',tint:'#e5e9fb',ink:'#161a28',muted:'#6a6f80'},
 screens:[
  {tab:'Sessions',icon:'🗓️',html:`<div class="sub">Apsley House Arcade</div><h1>What's on</h1>
   <div class="chips"><span class="chip on">Family</span><span class="chip">Adults</span><span class="chip">Workshops</span></div><h2>This week</h2>
   ${card('🎨','Family painting','Sat 10am','Book')}${card('🍷','Adult evening','Fri 7pm · no kids','Book')}${card('💐','Dried flower workshop','Thu 6:30pm','Book')}${card('🐾','Paw print session','Summer','Notify me')}`},
  {tab:'Kiln',icon:'🔥',html:`<h1>Your pieces</h1><div class="sub">Ready about 7 days after painting</div>
   <div class="hero"><div class="l">Firing now</div><div class="v">Ready Thursday</div><div class="s">We'll send a notification when they're ready</div><div class="em">🔥</div></div>
   ${card('🐶','Dog bowl','Glazing','Day 4')}${card('☕','Mug','Glazing','Day 4')}`},
  {tab:'Parties',icon:'🎈',html:`<h1>Parties</h1><div class="sub">Low-stress kids' parties</div>
   <div class="hero"><div class="l">Next available</div><div class="v">Sat 29th, 2pm</div><div class="s">Up to 12 children</div><div class="btn">Hold this slot</div><div class="em">🎈</div></div>`},
  {tab:'Snacks',icon:'🍪',html:`<h1>Snacks & drinks</h1><div class="sub">Order to your table</div>
   ${card('☕','Latte','','Add')}${card('🧃','Kids juice','','Add')}${card('🍪','Cookie','','Add')}`}],
 steps:[
  {screen:0,caption:'Family sessions, adult evenings and workshops',scroll:40},
  {screen:1,caption:'Kiln updates, so customers know when to collect',notif:{icon:'🖌️',title:'Your pieces are ready!',body:'Your dog bowl and mug are out of the kiln. Pop in to collect any time.'}},
  {screen:2,caption:'Book a party in a couple of taps'},
  {screen:3,caption:'Order snacks without leaving the table'}],
 outro:{title:'Little Pottery Painting Co,<br>in your customers\' pocket',text:'Bookings, kiln updates and parties in one app.',foot}
}};
