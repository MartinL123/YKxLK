// ===== PERSONAS =====
const personas = {
  explorer:{label:'EXPLORER',pbLabel:'250 € → Art Lover',pbPts:'125 pts',pbFill:25,statusIdx:0,
    sbName:'Explorer',sbPts:'125 pts'},
  artlover:{label:'ART LOVER',pbLabel:'500 € → Ambassador',pbPts:'695 pts',pbFill:55,statusIdx:1,
    sbName:'Art Lover',sbPts:'695 pts'},
  ambassador:{label:'AMBASSADOR',pbLabel:'2 000 € atteints',pbPts:'1 840 pts',pbFill:100,statusIdx:2,
    sbName:'Ambassador',sbPts:'1 840 pts'},
};
let currentPersona='explorer';

const statusDefs=[
  {key:'explorer',name:'EXPLORER',threshold:"Dès l'inscription",
   icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#283553"/></svg>`,
   perks:[
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,'text':'1 point par euro dépensé'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,'text':'20 points de bienvenue'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,'text':'20 points anniversaire'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,'text':'Frais de port réduits'},
   ],
   progress:{text:'Il reste 250€ pour atteindre Art Lover',fill:50}},
  {key:'artlover',name:'ART LOVER',threshold:'Dès 500 € cumulés',
   icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="#283553" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
   perks:[
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,'text':'1,5 point par euro dépensé'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,'text':'50 points de bienvenue'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,'text':'Un Artprint encadré offert'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,'text':'50 points anniversaire'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,'text':'Frais de port réduits'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/><circle cx="9" cy="7" r="4"/></svg>`,'text':'Offres exclusives & évènements'},
   ],
   progress:{text:'Il reste 900€ pour atteindre Ambassador',fill:45}},
  {key:'ambassador',name:'AMBASSADOR',threshold:'Dès 2 000 € cumulés',
   icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
   lockedIcon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
   perks:[
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,'text':'3 points par euro dépensé'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,'text':'200 points de bienvenue'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,'text':'Artshot ou Sélection offert'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,'text':'Livraison offerte sans minimum'},
     {icon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#283553" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,'text':'Accès VIP galeries'},
   ],
   progress:null},
];

// ===== NAVIGATE =====
function navigate(screen){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+screen).classList.add('active');
  document.querySelectorAll('.sb-link').forEach(l=>{
    const isActive=l.dataset.screen===screen;
    l.classList.toggle('active',isActive);
    if(isActive) l.setAttribute('aria-current','page');
    else l.removeAttribute('aria-current');
  });
  const pb=document.getElementById('progress-bar');
  pb.classList.toggle('visible',screen==='fidelite');
  document.getElementById('fidelite-scroll').classList.toggle('with-pb',screen==='fidelite');
  const topRight=document.getElementById('topbar-right');
  topRight.innerHTML=screen==='fidelite'?buildPersonaSwitcher():'';
  if(screen==='fidelite') renderStatusCards();
  closeDrawer();
}

// ===== DRAWER (mobile) =====
function updateSidebarA11y(){
  const sidebar=document.getElementById('sidebar');
  const burger=document.querySelector('.burger-btn');
  const isMobile=window.matchMedia('(max-width:899px)').matches;
  const open=sidebar.classList.contains('open');
  sidebar.setAttribute('aria-hidden',(isMobile&&!open)?'true':'false');
  if(burger) burger.setAttribute('aria-expanded',open?'true':'false');
}
function toggleDrawer(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('drawer-overlay').classList.toggle('open');
  updateSidebarA11y();
}
function closeDrawer(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  updateSidebarA11y();
}
window.addEventListener('resize',updateSidebarA11y);

// ===== PERSONA SWITCHER =====
function buildPersonaSwitcher(){
  const p=personas[currentPersona];
  return `<div class="persona-switcher">
    <button class="persona-btn" id="persona-btn" onclick="togglePersonaDD(event)" aria-haspopup="true" aria-expanded="false">
      <span style="font-size:8px;">●</span> ${p.label}
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="persona-dropdown" id="persona-dd" role="menu">
      ${Object.entries(personas).map(([k,v])=>`
        <div class="persona-option ${k===currentPersona?'active':''}" onclick="selectPersona('${k}')" role="menuitem" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectPersona('${k}')}">
          <span class="persona-dot" style="background:${k==='ambassador'?'#c0a000':k==='artlover'?'#283553':'#3a9a3a'}"></span>
          ${v.label}
        </div>`).join('')}
    </div>
  </div>`;
}
function togglePersonaDD(e){
  e.stopPropagation();
  const dd=document.getElementById('persona-dd');
  const btn=document.getElementById('persona-btn');
  const open=dd?.classList.toggle('open');
  btn?.classList.toggle('open');
  btn?.setAttribute('aria-expanded',open?'true':'false');
}
function applyPersona(k){
  currentPersona=k;
  const p=personas[k];
  document.getElementById('pb-badge').textContent=p.label;
  document.getElementById('pb-label').textContent=p.pbLabel;
  document.getElementById('pb-pts').textContent=p.pbPts;
  document.getElementById('pb-fill').style.width=p.pbFill+'%';
  document.getElementById('fid-status-label').textContent=p.label;
  document.getElementById('sb-status-name').textContent=p.sbName;
  document.getElementById('sb-status-pts').textContent=p.sbPts;
}
function selectPersona(k){
  applyPersona(k);
  localStorage.setItem('mykorner-persona',k);
  document.getElementById('topbar-right').innerHTML=buildPersonaSwitcher();
  renderStatusCards();
}
document.addEventListener('click',()=>{
  document.getElementById('persona-dd')?.classList.remove('open');
  const personaBtn=document.getElementById('persona-btn');
  personaBtn?.classList.remove('open');
  personaBtn?.setAttribute('aria-expanded','false');
});

// ===== STATUS CARDS =====
function renderStatusCards(){
  const activeIdx=personas[currentPersona].statusIdx;
  const c=document.getElementById('status-carousel');
  const d=document.getElementById('status-dots');
  c.innerHTML=statusDefs.map((s,i)=>{
    const locked=i>activeIdx;
    const badge=i<=activeIdx?'ACQUIS':'À DÉBLOQUER';
    const iconHtml=locked&&s.lockedIcon?s.lockedIcon:s.icon;
    const perksHtml=s.perks.map(p=>`<div class="status-perk"><span class="status-perk-icon">${p.icon}</span><span>${p.text}</span></div>`).join('');
    const progressHtml=(i===activeIdx&&s.progress)?`
      <div class="status-divider"></div>
      <div class="status-progress-text">${s.progress.text}</div>
      <div class="status-progress-track"><div class="status-progress-fill" style="width:${s.progress.fill}%"></div></div>`:'';
    return `<div class="status-card ${locked?'locked':''}" data-idx="${i}">
      <div class="status-card-header">
        <div class="status-icon-wrap">${iconHtml}</div>
        <div><div class="status-name">${s.name}</div><div class="status-threshold">${s.threshold}</div></div>
        <span class="status-badge">${badge}</span>
      </div>
      <div class="status-divider"></div>
      ${perksHtml}${progressHtml}
    </div>`;
  }).join('');
  d.innerHTML=statusDefs.map((_,i)=>`<div class="dot ${i===activeIdx?'active':''}"></div>`).join('');
  setTimeout(()=>{
    const el=c.querySelector(`[data-idx="${activeIdx}"]`);
    if(el) el.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  },60);
}

// ===== ORDERS =====
function filterOrders(btn,brand){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.order-card').forEach(card=>{
    card.style.display=(brand==='all'||card.dataset.brand===brand)?'block':'none';
  });
}

// ===== MODALS =====
let lastFocusedElement=null;
function openModal(id){
  lastFocusedElement=document.activeElement;
  const overlay=document.getElementById(id);
  overlay.classList.add('open');
  const focusable=overlay.querySelector('.modal-sheet').querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  focusable?.focus();
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  lastFocusedElement?.focus();
  lastFocusedElement=null;
}
function closeModalOverlay(e,id){if(e.target===document.getElementById(id))closeModal(id);}
function openTrackModal(){openModal('track-modal');}
function openOrderDetail(){openModal('order-detail-modal');}

// Escape-to-close & focus trap for modals/drawer
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    const openModalEl=document.querySelector('.modal-overlay.open');
    if(openModalEl){closeModal(openModalEl.id);return;}
    if(document.getElementById('sidebar').classList.contains('open'))closeDrawer();
    return;
  }
  if(e.key==='Tab'){
    const openModalEl=document.querySelector('.modal-overlay.open');
    if(!openModalEl)return;
    const focusables=openModalEl.querySelector('.modal-sheet').querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if(!focusables.length)return;
    const first=focusables[0],last=focusables[focusables.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});

// ===== ÉCHANGER MES POINTS =====
let pendingExchange=null;
function openExchangeModal(label,cost){
  const balance=parseInt(personas[currentPersona].sbPts,10);
  pendingExchange={label,cost};
  document.getElementById('exchange-title').textContent=label;
  document.getElementById('exchange-cost').textContent=cost+' pts';
  document.getElementById('exchange-balance').textContent=balance+' pts';
  document.getElementById('exchange-after').textContent=Math.max(balance-cost,0)+' pts';
  openModal('exchange-modal');
}
function confirmExchange(){
  if(!pendingExchange)return;
  closeModal('exchange-modal');
  showToast(pendingExchange.label+' généré !');
  pendingExchange=null;
}

// ===== COPY =====
const copyIcon=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
const copiedIcon=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12l3 3 5-6"/></svg>`;
function copyCode(code,row){
  navigator.clipboard.writeText(code).catch(()=>{});
  showToast('Code copié !');
  const btn=row?.querySelector('.copy-btn');
  if(!btn||btn.dataset.copied)return;
  btn.dataset.copied='1';
  const original=btn.innerHTML;
  btn.classList.add('copied');
  btn.innerHTML=copiedIcon+'Copié';
  setTimeout(()=>{
    btn.classList.remove('copied');
    btn.innerHTML=original;
    delete btn.dataset.copied;
  },2000);
}

// ===== TOAST =====
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

// ===== CAROUSEL DOTS SYNC =====
function syncCarouselDots(carousel,dotsContainer,itemSelector){
  const items=carousel.querySelectorAll(itemSelector);
  const dots=dotsContainer.querySelectorAll('.dot');
  if(!items.length||!dots.length)return;
  const center=carousel.scrollLeft+carousel.clientWidth/2;
  let closest=0,closestDist=Infinity;
  items.forEach((item,i)=>{
    const dist=Math.abs((item.offsetLeft+item.offsetWidth/2)-center);
    if(dist<closestDist){closestDist=dist;closest=i;}
  });
  dots.forEach((d,i)=>d.classList.toggle('active',i===closest));
}
function setupCarouselDots(carouselId,dotsId,itemSelector){
  const carousel=document.getElementById(carouselId);
  const dotsContainer=document.getElementById(dotsId);
  if(!carousel||!dotsContainer)return;
  carousel.addEventListener('scroll',()=>syncCarouselDots(carousel,dotsContainer,itemSelector));
}
setupCarouselDots('status-carousel','status-dots','.status-card');
setupCarouselDots('points-carousel','points-dots','.point-item');

// ===== TOGGLE SWITCHES (Mes informations) =====
const TOGGLE_STORAGE_KEY='mykorner-toggles';
function setToggleState(toggle,on){
  toggle.classList.toggle('on',on);
  toggle.setAttribute('aria-checked',on?'true':'false');
}
function toggleSwitch(toggle){
  const on=!toggle.classList.contains('on');
  setToggleState(toggle,on);
  let saved={};
  try{saved=JSON.parse(localStorage.getItem(TOGGLE_STORAGE_KEY))||{};}catch(e){}
  saved[toggle.dataset.toggleId]=on;
  localStorage.setItem(TOGGLE_STORAGE_KEY,JSON.stringify(saved));
}
function toggleSwitchKey(e,toggle){
  if(e.key==='Enter'||e.key===' '){
    e.preventDefault();
    toggleSwitch(toggle);
  }
}
function restoreToggleStates(){
  let saved={};
  try{saved=JSON.parse(localStorage.getItem(TOGGLE_STORAGE_KEY))||{};}catch(e){}
  document.querySelectorAll('.toggle[data-toggle-id]').forEach(toggle=>{
    const id=toggle.dataset.toggleId;
    if(Object.prototype.hasOwnProperty.call(saved,id)) setToggleState(toggle,saved[id]);
  });
}

// ===== INIT =====
const savedPersona=localStorage.getItem('mykorner-persona');
if(savedPersona&&personas[savedPersona]) applyPersona(savedPersona);
restoreToggleStates();
updateSidebarA11y();
renderStatusCards();
