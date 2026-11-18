document.getElementById("reg").href="#upcoming-events";
var COL=[["#0a3a68","#10a37f"],["#5b2a86","#0b5fa5"],["#b4472a","#e8a33d"],["#0d6b5a","#4fb286"],["#243b6b","#6a8fd8"],["#7a1f4d","#d86a9a"]];


var SLIDE_IMG=["images/slider/slide1.jpeg","images/slider/slider-new1.png","images/slider/slider-new2.jpeg"];

var GALLERY={
 "Events":[
  "images/gallery/events/e1.jpeg",
  "images/gallery/events/e2.jpeg",
  "images/gallery/events/e3.jpeg"
 ],
 "Workshops":[
  "images/gallery/workshops/w1.jpeg",
  "images/gallery/workshops/w2.jpeg",
  "images/gallery/workshops/w3.jpeg",
  "images/gallery/workshops/w3.jpeg"
 ],
 "Industrial Visits":[
  "images/gallery/industrial_visits/i1.jpeg",
  "images/gallery/industrial_visits/i5.jpeg",
  "images/gallery/industrial_visits/i4.jpeg",
 "images/gallery/industrial_visits/i3.jpeg",
  "images/gallery/industrial_visits/i2.jpeg"
 ],
 "Competitions":[
  "images/gallery/competitions/c1.jpeg",
  "images/gallery/competitions/c2.jpeg",
  "images/gallery/competitions/c3.jpeg"
 ],
 "K-12":[
  "images/gallery/sports/s5.jpeg",
  "images/gallery/sports/s3.jpeg",
  "images/gallery/sports/s2.jpeg",
  "images/gallery/sports/s1.jpeg",
  "images/gallery/sports/s8.jpeg",
 ]
};

var REAL={
 "Event 1":"images/olympiad/image.png",
 "Events 2":"images/events2.jpg",
 "Workshops 1":"images/workshop1.jpg",
 "Industrial Visits 1":"images/visit1.jpg",
 "Competitions 1":"images/comp1.jpg",
 "Sports 1":"images/sports1.jpg",
 "Past Event 1":"images/past1.jpg"
};

var LATEST=[
  {
    t: "ChemE Genesis", 
    d: "An introductory flagship program welcoming new chemical engineering minds to innovation and community.", 
    img: "images/event/generics.jpeg"
  },
  {
    t: "AIChE Summit", 
    d: "A premier national gathering uniting chemical engineers for technical talks, competitions, and professional networking.", 
    img: "images/event/summit.jpeg"
  },
  {
    t: "K-12 Session", 
    d: "A STEM outreach initiative inspiring young school students with hands-on science and engineering fundamentals.", 
    img: "images/event/k12.jpeg"
  }
];

var UPCOMING=[
 {t:"Poster Presentation", d:"Present your research and ideas in front of experts and fellow students.", date:"5 Dec 2026", place:"JUST Campus", img:"images/upcoming/poster.png", link:"https://docs.google.com/forms/d/e/1FAIpQLSfWsmH-ita_GxRBnds2FvVlEzcbnDACCD4kj2WArC2nSQQIlQ/viewform", btn:"Register Now"},
 {t:"ChemE Cross", d:"A fun and challenging chemical engineering crossword competition.", date:"5 Dec 2026", place:"JUST Campus", img:"images/upcoming/cross.png", link:"https://docs.google.com/forms/d/e/1FAIpQLScpJjqwv9Gs_1bC1kqMusB0jZ9vmOvzAUMHUxUl3f41JwbFUg/viewform", btn:"Register Now"},
 {t:"ChemE Car", d:"Design and build a car powered by a chemical reaction.", date:"5 Dec 2026", place:"JUST Campus", img:"images/upcoming/car.png", link:"https://docs.google.com/forms/d/e/1FAIpQLSd1jeHvkyQAku3yRC3skVkw0p9HIoiFcpMyJK_uoa8OCb50kQ/viewform", btn:"Register Now"},
 {t:"eFootball", d:"Show your skills in our eFootball tournament.", date:"5 Dec 2026", place:"JUST Campus", img:"images/upcoming/E-Football.png", link:"https://docs.google.com/forms/d/e/1FAIpQLSfnt1cIDrZcK1HblAAQZQit2rEsWZeK7PUVP8ckZzR3Mw2Gjg/viewform", btn:"Register Now"},
 {t:"Video Competition", d:"Tell a creative story about chemical engineering in a short video.", date:"5 Dec 2026", place:"JUST Campus", img:"images/upcoming/video.png", link:"https://docs.google.com/forms/d/e/1FAIpQLSfY1V0onxcAAVHG7azkvz-hsYEYnTEVVcxewEtEGZy797IEfA/viewform", btn:"Register Now"},
 {t:"MEB Olympiad", d:"Test your knowledge in our chemical engineering olympiad.", date:"5 Dec 2026", place:"JUST Campus", img:"images/upcoming/MEB.png", link:"https://docs.google.com/forms/d/e/1FAIpQLSfooEYmIAUPRwgDXXlUAO_DAE30szP9cEjhtRs7-ST0wFFffw/viewform", btn:"Register Now"}
];

var TEAM=[
 {img:"images/team/10.jpeg"},
 {img:"images/team/9.jpeg"},
 {img:"images/team/7.jpeg"},
 {img:"images/team/8.jpeg"},
 {img:"images/team/3.jpeg"},
 {img:"images/team/6.jpeg"},
 {img:"images/team/4.jpeg"},
 {img:"images/team/5.jpeg"},
 {img:"images/team/12.jpeg"},
 {img:"images/team/15.jpeg"},
 {img:"images/team/16.jpeg"},
 {img:"images/team/11.jpeg"},
 {img:"images/team/2.jpeg"},
 {img:"images/team/14.jpeg"},
 {img:"images/team/1.jpeg"},
 {img:"images/team/13.jpeg"},
]

var PAST=[
 {t:"ChemE Genesis", d:"Write one short line about this event.", date:"Date", place:"Place", img:"images/event/generics.jpeg"},
 {t:"K-12 Session", d:"Write one short line about this event.", date:"Date", place:"Place", img:"images/event/k-12.jpeg"}
];

var WORKSHOPS=[
 {t:"Workshop Title", d:"Topic, speaker and key takeaways.", date:"Date", place:"Place", img:"images/gallery/competitions/c2.jpeg"},
 {t:"Seminar Title", d:"Topic, speaker and key takeaways.", date:"Date", place:"Place", img:"images/gallery/competitions/c3.jpeg"}
];

function count(b){var m=/^(\d+)(\+?)$/.exec(b.textContent);if(!m)return;var n=+m[1],s=m[2],st=null;(function f(ts){st=st||ts;var k=Math.min(1,(ts-st)/1200);b.textContent=Math.round(n*k)+s;if(k<1)requestAnimationFrame(f)})(performance.now())}
function reveal(){
 var els=document.querySelectorAll("#app .card,#app h2,#app .lead,#app .gal img,#app .team img,#app .tl div");
 if(!("IntersectionObserver" in window))return;
 var io=new IntersectionObserver(function(en){en.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add("in");io.unobserve(t);if(t.parentNode.classList.contains("stats"))count(t.querySelector("b"))})},{threshold:.12});
 els.forEach(function(el){el.classList.add("rv");el.style.animationDelay=(Array.prototype.indexOf.call(el.parentNode.children,el)%6)*90+"ms";io.observe(el)})}

 

var T
function evCard(e,ci){return '<div class="card"><img src="'+(e.img||img(e.t,ci))+'" alt="'+e.t+'" loading="lazy"><h3>'+e.t+'</h3><p>'+e.d+'</p><p><small>📅 '+e.date+(e.place?' · 📍 '+e.place:'')+'</small></p>'+(e.link?'<p><a class="btn" style="background:var(--brand);color:#fff" href="'+e.link+'" target="_blank" rel="noopener">'+(e.btn||"Learn more")+'</a></p>':'')+'</div>'}
function evList(a,msg){return a.length?grid(a.map(evCard)):'<p class="lead">'+msg+'</p>'}


function img(t,i,w,h){if(REAL[t])return REAL[t];var c=COL[(i||0)%6];w=w||800;h=h||600;return "data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+c[0]+'"/><stop offset="1" stop-color="'+c[1]+'"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" fill="#fff" font-family="sans-serif" font-size="'+Math.round(w/16)+'" text-anchor="middle" dominant-baseline="middle" opacity=".9">'+t+'</text></svg>')}
function av(i){return img("👤",i,200,200)}
function card(ic,t,d,x){return '<div class="card"><div class="ic">'+ic+'</div><h3>'+t+'</h3><p>'+d+'</p>'+(x?'<p><small>'+x+'</small></p>':'')+'</div>'}
function grid(a){return '<div class="grid">'+a.join("")+'</div>'}
function hdr(t,s){return '<div class="hdr"><h1>'+t+'</h1><p>'+s+'</p></div>'}
function sec(t,l){return '<h2>'+t+'</h2>'+(l?'<p class="lead">'+l+'</p>':'')}
function per(n,r,i){return '<div class="card person"><img src="'+av(i)+'" alt=""><h3>'+n+'</h3><p>'+r+'</p></div>'}



var SL=[["UPCOMING EVENT","National AIChE Summit 2026","Biggest meetup of chemical engineers · 5 Dec · 10:00 AM · JUST Campus","#upcoming-events","Register Now"],["WORKSHOPS & SEMINARS","Learn From Experts","Technical workshops, expert talks and knowledge-sharing sessions.","#workshops-seminars","See Workshops"],["INDUSTRIAL VISITS","Meet Real-World Chemical Engineering","Explore industries and understand how real processes work.","#gallery","View Gallery"]];

var GC={"Events":6,"Workshops":6,"Industrial Visits":6,"Competitions":6,"Sports":6};
// navigation

var MENU=[["home","Home"],["about","About Us"],["team","Our Team"],["events","Events & Activities",[["upcoming-events","Upcoming"],["past-events","Past Events"],["workshops-seminars","Workshops & Seminars"]]],["gallery","Gallery"]];

// Home 

var P={
home:function(){
 var s=SL.map(function(x,i){return '<div class="slide"><img src="'+(SLIDE_IMG[i]||img(x[1],i,1400,700))+'" alt=""><div> <span class="tag">'+x[0]+'</span><h1>'+x[1]+'</h1><p>'+x[2]+'</p><a class="btn" href="'+x[3]+'"'+(i==0?' target="_blank" rel="noopener"':'')+'>'+x[4]+'</a>'+(i==0?'<a class="btn o" href="#upcoming-events">Details</a>':'')+'</div></div>'}).join("");
 return '<div class="slider"><div class="slides" id="sl">'+s+'</div><button class="arr" style="left:8px" id="pv">‹</button><button class="arr" style="right:8px" id="nx">›</button><div class="dots" id="dt">'+SL.map(function(){return '<i></i>'}).join("")+'</div></div>'+
 '<div class="cdw"><b>⏳ National AIChE Summit 2026 starts in</b><div class="cd" id="cd"></div><div class="pbar"><i id="cdbar"></i></div><p class="cdnote">📅 5 December 2026 · 09:00 AM · 📍 JUST Campus</p><a class="btn" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=National%20AIChE%20Summit%202026&dates=20261205T040000Z/20261205T110000Z&location=JUST%20Campus%2C%20Jashore" target="_blank" rel="noopener">➕ Add to Calendar</a></div><main>'
 +
 sec("About AIChE JUST","We are the AIChE Student Chapter at Jashore University of Science and Technology (JUST), a community of passionate chemical engineering students dedicated to learning, innovation, and professional growth. Through workshops, seminars, industrial visits and various activities, we aim to bridge the gap between academia and industry.")+
 '<div class="stats">'+[["90+","Members"],["6+","Events"],["2+","Workshops"],["Upcoming","Industrial Visits"]].map(function(x){return '<div class="card"><b>'+x[0]+'</b>'+x[1]+'</div>'}).join("")+'</div>'+
 sec("Our Mission & Vision")+grid([card("🎯","Our Mission","To promote knowledge, innovation, and leadership in chemical engineering by creating opportunities for students to learn, explore new ideas, develop practical skills, and contribute to technological advancement."),card("🚀","Our Vision","To build a vibrant and inclusive community of future chemical engineers who are passionate about innovation, committed to lifelong learning, and prepared to make a positive impact on industry and society.")])+
 sec("What We Do","Empowering future chemical engineers through learning, collaboration, innovation and professional development.")+grid([card("🎓","Workshops & Seminars","Technical workshops, expert talks and knowledge-sharing sessions."),card("🏆","Technical Competitions","Creativity, teamwork and problem-solving through technical challenges."),card("🤝","Networking & Career","Connections with alumni, professionals, researchers, industry experts and other chapters."),card("⚽","Sports","Friendly tournaments that build teamwork and community."),card("🔬","Research & Innovation","Scientific curiosity, research activities and innovative solutions."),card("🏭","Industrial Visits","Explore industries and real-world chemical engineering processes.")])+
 sec("Explore Chemical Engineering","Areas our chapter activities connect with.")+grid([card("🛡️","Process Safety","Safer plants, safer people."),card("🌱","Sustainability","Green processes and cleaner energy."),card("💻","Process Simulation","Aspen, MATLAB and modelling skills."),card("⚡","Energy & Environment","Energy systems and pollution control."),card("💊","Pharma & Biochem","Bioprocess and pharmaceutical engineering."),card("🧪","Materials & Polymers","Advanced materials and product design.")])+
 sec("Latest Activities & Events","Discover our recent programs, workshops, achievements and student activities.")+

//  add latest image
 '<div class="grid">'+LATEST.map(function(e){return '<div class="card"><img src="'+(e.img||img(e.t,0))+'" alt=""><h3>'+e.t+'</h3><p>'+e.d+'</p></div>'}).join("")+'</div><p style="text-align:center"><a href="#upcoming-events">View all events →</a></p>'+
 sec("Why Join Us?")+grid([card("📚","Learn","Skills beyond the classroom."),card("🌐","Network","Alumni, industry and other chapters."),card("🏅","Lead","Organize events and grow as a leader.")])+'</main>'},

//  about

about:function(){return hdr("About Us","AIChE Student Chapter · Jashore University of Science and Technology")+'<main>'+sec("Who We Are","We are a community of chemical engineering students at JUST, affiliated with the American Institute of Chemical Engineers (AIChE), the global professional society for chemical engineers.")+
 grid([card("🎯","Our Mission","To promote knowledge, innovation, and leadership in chemical engineering by creating opportunities for students to learn, explore new ideas, develop practical skills, and contribute to technological advancement."),card("🚀","Our Vision","To build a vibrant and inclusive community of future chemical engineers who are passionate about innovation, committed to lifelong learning, and prepared to make a positive impact on industry and society."),card("💎","Our Values","Learning · Innovation · Teamwork · Integrity · Service to society")])+
 sec("Our Objectives")+grid([card("1️⃣","Bridge academia and industry",""),card("2️⃣","Build technical and soft skills",""),card("3️⃣","Encourage research and innovation",""),card("4️⃣","Create a strong professional network","")])+
//  sec("Our History")+'<div class="tl"><div><b>Year</b><br>Chapter founded at the Department of Chemical Engineering, JUST.</div><div><b>Year</b><br>First workshop or seminar organized.</div><div><b>Year</b><br>First industrial visit.</div><div><b>2026</b><br>Hosting the National AIChE Summit at JUST.</div></div>'+
//  sec("Founders")+grid([per("Founder Name","Founding President",1),per("Founder Name","Founding Secretary",2),per("Founder Name","Founding Member",3)])+
//  sec("Faculty Advisors")+grid([per("Dr. / Prof. Name","Chief Advisor",4),per("Dr. / Prof. Name","Faculty Advisor",5)])+
 sec("Organization","JUST AIChE is run by three committees working under faculty guidance.")+grid([card("👑","Executive Committee","Leads the chapter and sets yearly plans."),card("🧩","Program Committee","Plans and runs events and activities."),card("🕰️","Previous Committee","Past leaders who built the chapter.")])+'</main>'},

//  Team

team:function(){return hdr("Our Team","1st Executive Committee")+'<main><div class="team">'+TEAM.map(function(m){return '<img src="'+m.img+'" alt="'+m.n+' – '+m.r+'" loading="lazy">'}).join("")+'</div></main>'},
events:function(){return P["upcoming-events"]()},

// event-activities

"upcoming-events":function(){return hdr("Events & Activities","Upcoming Events")+tabs("upcoming-events")+'<main>'+evList(UPCOMING,"New events will be announced soon. Stay tuned!")+'</main>'},
"past-events":function(){return hdr("Events & Activities","Past Events")+tabs("past-events")+'<main>'+evList(PAST,"Our past events will appear here.")+'</main>'},
"workshops-seminars":function(){return hdr("Events & Activities","Workshops & Seminars")+tabs("workshops-seminars")+'<main>'+evList(WORKSHOPS,"Workshops and seminars will appear here.")+'</main>'},

// gallery

gallery:function(){var k=Object.keys(GALLERY);return hdr("Gallery","Moments from our events, visits and activities")+'<main><div class="sub" id="gf"><span class="chip on" data-c="All">All</span>'+k.map(function(c){return '<span class="chip" data-c="'+c+'">'+c+'</span>'}).join("")+'</div><div class="gal" id="gg">'+k.map(function(c,ci){var list=GALLERY[c].length?GALLERY[c]:[null,null,null];return list.map(function(p,i){return '<img data-cat="'+c+'" src="'+(p||img(c+" "+(i+1),ci+i))+'" alt="'+c+'" loading="lazy">'}).join("")}).join("")+'</div></main>'}};


function tabs(r){var m=MENU.filter(function(x){return x[2]&&x[2].some(function(s){return s[0]==r})})[0];return '<div class="sub">'+m[2].map(function(s){return '<a class="'+(s[0]==r?"on":"")+'" href="#'+s[0]+'">'+s[1]+'</a>'}).join("")+'</div>'}
function par(r){return MENU.filter(function(m){return m[0]==r||(m[2]&&m[2].some(function(s){return s[0]==r}))})[0]||MENU[0]}
var T;
function render(){var r=(location.hash||"#home").slice(1);if(!P[r])r="home";var p=par(r);
 document.getElementById("menu").innerHTML=MENU.map(function(m){return '<a class="'+(m===p?"on":"")+'" href="#'+(m[2]?m[2][0][0]:m[0])+'">'+m[1]+'</a>'}).join("");
 document.getElementById("menu").classList.remove("open");
 document.getElementById("app").innerHTML=P[r]();window.scrollTo(0,0);clearInterval(T);
 if(r=="home"){slider();tick()}

  if(r=="gallery")gal();
 reveal()}

function slider(){var i=0,n=SL.length,s=document.getElementById("sl"),d=document.querySelectorAll("#dt i");

function go(k){i=(k+n)%n;s.style.transform="translateX(-"+i*100+"%)";d.forEach(function(x,j){x.className=j==i?"on":""});document.querySelectorAll(".slide").forEach(function(x,j){x.classList.toggle("act",j==i)})} go(0);

 document.getElementById("pv").onclick=function(){go(i-1)};document.getElementById("nx").onclick=function(){go(i+1)};

 d.forEach(function(x,j){x.onclick=function(){go(j)}});T=setInterval(function(){go(i+1)},5000)}
//  count down
var CT
function tick(){var el=document.getElementById("cd");if(!el)return;
 var end=new Date("2026-12-05T09:00:00+06:00"),d=end-new Date();
 if(d<0){el.innerHTML="<b>The Summit is live! 🎉</b>";return}
 var v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60],n=["Days","Hours","Minutes","Seconds"];
 if(!el.dataset.b){el.dataset.b=1;el.innerHTML=n.map(function(x){return '<div><b>00</b><span>'+x+'</span></div>'}).join("")}
 var b=el.querySelectorAll("b");
 v.forEach(function(x,i){var t=(x<10?"0":"")+x;if(b[i].textContent!==t){b[i].textContent=t;b[i].classList.remove("flip");void b[i].offsetWidth;b[i].classList.add("flip")}});
 var p=document.getElementById("cdbar");

 if(p){var s=new Date("2026-11-01T00:00:00+06:00");p.style.width=Math.min(100,Math.max(0,(1-d/(end-s))*100))+"%"}
 clearTimeout(CT);CT=setTimeout(tick,1000);
  
 if(d<0){el.innerHTML="<b>The Summit is live! 🎉</b>";return}
 el.innerHTML=[[Math.floor(d/864e5),"Days"],[Math.floor(d/36e5)%24,"Hours"],[Math.floor(d/6e4)%60,"Minutes"],[Math.floor(d/1e3)%60,"Seconds"]].map(function(x){return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("");setTimeout(tick,1000)}
function gal(){var f=document.querySelectorAll("#gf .chip");f.forEach(function(b){b.onclick=function(){f.forEach(function(x){x.classList.remove("on")});b.classList.add("on");document.querySelectorAll("#gg img").forEach(function(im){im.style.display=(b.dataset.c=="All"||im.dataset.cat==b.dataset.c)?"":"none"})}});
 document.querySelectorAll("#gg img").forEach(function(im){im.onclick=function(){var l=document.getElementById("lb");l.firstChild.src=im.src;l.style.display="flex"}})}
document.getElementById("lb").onclick=function(){this.style.display="none"};
document.getElementById("burger").onclick=function(){document.getElementById("menu").classList.toggle("open")};
window.addEventListener("hashchange",render);render();
