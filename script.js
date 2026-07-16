// ---------- i18n ----------
const translations = {
  en: {
    "meta.title": "VirtualPets: Pet Care World",
    "meta.desc": "VirtualPets lets you adopt, feed, and care for 8 lovable pets right from your phone.",
    "nav.home": "Home", "nav.features": "Features", "nav.pets": "Pet Collection",
    "nav.play": "Try It Out", "nav.about": "About", "nav.contact": "Contact", "nav.download": "Download Now",
    "hero.eyebrow": "Anywhere you go, together",
    "hero.title": "Pocket-sized pets,<br>full-sized love",
    "hero.desc": "VirtualPets lets you adopt 8 lovable pets — Corgi, Golden Retriever, Ragdoll Cat, Orange Tabby, Hamster, Guinea Pig, Budgie, and Goldfish. Feed, play, dress up, and take them on trips — caring for a pet has never been this easy.",
    "store.getItOn": "GET IT ON", "store.googlePlay": "Google Play",
    "store.downloadOn": "Download on the", "store.appStore": "App Store",
    "features.title": "Things to do with your pet",
    "features.sub": "Rich, playful interactions that make every day feel like company",
    "features.f1.title": "Pet & Cuddle", "features.f1.desc": "Head pats and belly rubs — feel your pet react in real time.",
    "features.f2.title": "Feed & Hydrate", "features.f2.desc": "Serve snacks and fresh water to keep your pet happy and full.",
    "features.f5.title": "Toys & Outfits", "features.f5.desc": "Buy new toys and looks to build a one-of-a-kind pet.",
    "pets.title": "Pet Collection",
    "pets.sub": "Always growing — there's bound to be one that steals your heart",
    "pets.p1.name": "Corgi", "pets.p1.desc": "Short legs, big personality — always up for playtime.",
    "pets.p2.name": "Golden Retriever", "pets.p2.desc": "Loyal and gentle — the friendliest face in the yard.",
    "pets.p3.name": "Ragdoll Cat", "pets.p3.desc": "Floppy, affectionate, and always ready for a cuddle.",
    "pets.p4.name": "Orange Tabby", "pets.p4.desc": "A curious little troublemaker with a big appetite.",
    "pets.p5.name": "Hamster", "pets.p5.desc": "Tiny, quick, and always stuffing its cheeks.",
    "pets.p6.name": "Guinea Pig", "pets.p6.desc": "Soft, squeaky, and always happy to see you.",
    "pets.p7.name": "Budgie", "pets.p7.desc": "A cheerful little bird that loves to sing along.",
    "pets.p8.name": "Goldfish", "pets.p8.desc": "Calm and low-maintenance — perfect for a cozy tank.",
    "pets.tag.dog": "Dog", "pets.tag.cat": "Cat", "pets.tag.small": "Small Pet", "pets.tag.bird": "Bird", "pets.tag.fish": "Fish",
    "play.title": "Want to try it first?",
    "play.sub": "Tap the buttons below and see how your pet responds to your care.",
    "play.hunger": "Fullness", "play.happy": "Happiness",
    "play.feed": "Feed", "play.pet": "Pet", "play.walk": "Walk",
    "play.msgDefault": "Your pet is waiting for you~",
    "play.msgFeed": "Yum! Thanks for the snack! 🍖",
    "play.msgPet": "So cozy, I love it when you pet me 🤗",
    "play.msgWalk": "That walk was fun, let's go again soon! 🚶",
    "about.title": "About Us",
    "about.p1": "We're a small crew brought together by a love of code and a love of animals. With a warm idea and plenty of experience, we built an app we hope brings a little more companionship and joy into your day.",
    "about.p2": "We believe that even when you can't have a real pet with you all the time, you should still get to feel that pure companionship. That's why VirtualPets exists.",
    "download.title": "Ready to adopt your first pet?",
    "download.sub": "Download VirtualPets for free and start your journey today",
    "contact.title": "Contact Us",
    "contact.sub": "Questions or feedback? We'd love to hear from you.",
    "contact.name": "Your name", "contact.email": "Email address", "contact.message": "Your message",
    "contact.submit": "Submit", "contact.emailLabel": "Email:",
    "contact.thanks": "Thanks for reaching out — we'll get back to you soon!",
    "footer.copyright": "© 2026 VirtualPets: Pet Care World. All rights reserved.",
    "footer.privacy": "Privacy Policy", "footer.terms": "Terms of Service", "footer.delete": "Delete Data"
  },
  zh: {
    "meta.title": "VirtualPets 虚拟宠物世界",
    "meta.desc": "VirtualPets 让你在手机上领养、喂养、照顾 8 只可爱的宠物。",
    "nav.home": "首页", "nav.features": "功能", "nav.pets": "宠物图鉴",
    "nav.play": "互动体验", "nav.about": "关于我们", "nav.contact": "联系", "nav.download": "立即下载",
    "hero.eyebrow": "随时随地 · 陪伴身边",
    "hero.title": "把可爱的宠物<br>装进你的口袋",
    "hero.desc": "VirtualPets 让你领养 8 只可爱的宠物——柯基、金毛、布偶猫、橘猫、仓鼠、豚鼠、budgie 鹦鹉和金鱼。喂食、玩耍、装扮，还能带它们去不同的场景旅行——照顾宠物从没这么简单有爱。",
    "store.getItOn": "立即下载", "store.googlePlay": "Google Play",
    "store.downloadOn": "立即下载", "store.appStore": "App Store",
    "features.title": "和你的宠物一起做的事",
    "features.sub": "丰富的互动玩法，让每一天都充满陪伴感",
    "features.f1.title": "互动抚摸", "features.f1.desc": "摸摸头、戳戳肚子，感受宠物的真实反应。",
    "features.f2.title": "喂食喂水", "features.f2.desc": "按时投喂零食和清水，照顾宠物的一日三餐。",
    "features.f5.title": "玩具与装扮", "features.f5.desc": "购买新玩具和造型，打造专属的宠物形象。",
    "pets.title": "宠物图鉴",
    "pets.sub": "持续更新中，总有一只会让你心动",
    "pets.p1.name": "柯基", "pets.p1.desc": "短腿萌宠，精力充沛，随时准备玩耍。",
    "pets.p2.name": "金毛寻回犬", "pets.p2.desc": "忠诚温顺，是院子里最友好的笑脸。",
    "pets.p3.name": "布偶猫", "pets.p3.desc": "软萌黏人，随时准备被你抱起来撸。",
    "pets.p4.name": "橘猫", "pets.p4.desc": "好奇又贪吃的小捣蛋鬼。",
    "pets.p5.name": "仓鼠", "pets.p5.desc": "小小一只，动作飞快，脸颊永远塞得鼓鼓的。",
    "pets.p6.name": "豚鼠", "pets.p6.desc": "软乎乎、吱吱叫，看到你就开心。",
    "pets.p7.name": "budgie 鹦鹉", "pets.p7.desc": "爱唱歌的开心果小鸟。",
    "pets.p8.name": "金鱼", "pets.p8.desc": "安静好养，最适合待在温馨的小鱼缸里。",
    "pets.tag.dog": "狗狗", "pets.tag.cat": "猫咪", "pets.tag.small": "小型宠物", "pets.tag.bird": "鸟类", "pets.tag.fish": "鱼类",
    "play.title": "先体验一下？",
    "play.sub": "点击下面的按钮，看看你的宠物如何回应你的照顾。",
    "play.hunger": "饱食度", "play.happy": "开心度",
    "play.feed": "喂食", "play.pet": "抚摸", "play.walk": "散步",
    "play.msgDefault": "你的宠物正等着你哦～",
    "play.msgFeed": "好好吃！谢谢你喂我～ 🍖",
    "play.msgPet": "好舒服呀，最喜欢你摸摸我了 🤗",
    "play.msgWalk": "散步真开心，我们下次再去吧！🚶",
    "about.title": "关于我们",
    "about.p1": "我们是一群因为编程和动物而聚在一起的年轻人。带着一个温暖的想法和不少的经验，我们做出了这款希望能给大家带来陪伴与快乐的应用。",
    "about.p2": "我们相信，即使不能随时养一只真实的宠物，也应该有办法感受那份纯粹的陪伴。这就是 VirtualPets 诞生的原因。",
    "download.title": "准备好收养第一只宠物了吗？",
    "download.sub": "免费下载 VirtualPets，开始你的养宠之旅",
    "contact.title": "联系我们",
    "contact.sub": "有问题或建议？欢迎给我们留言。",
    "contact.name": "你的名字", "contact.email": "邮箱地址", "contact.message": "留言内容",
    "contact.submit": "提交", "contact.emailLabel": "邮箱：",
    "contact.thanks": "感谢你的留言，我们会尽快回复！",
    "footer.copyright": "© 2026 VirtualPets: Pet Care World. All rights reserved.",
    "footer.privacy": "隐私政策", "footer.terms": "服务条款", "footer.delete": "删除数据"
  }
};

const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('virtualpets-lang') || 'en';

function applyLanguage(lang){
  if (!translations[lang]) lang = 'en';
  const dict = translations[lang];

  document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.title = dict['meta.title'];
  const metaDesc = document.getElementById('metaDesc');
  if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);
  langToggle.textContent = lang === 'en' ? '中文' : 'English';

  currentLang = lang;
  localStorage.setItem('virtualpets-lang', lang);
}

langToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'zh' : 'en');
});

applyLanguage(currentLang);

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---------- Interactive pet demo ----------
const hungerBar = document.getElementById('hungerBar');
const happyBar = document.getElementById('happyBar');
const playMsg = document.getElementById('playMsg');
const petBubble = document.getElementById('petBubble');

let hunger = 60;
let happy = 60;

function clamp(v){ return Math.max(0, Math.min(100, v)); }

function updateBars(){
  hungerBar.style.width = hunger + '%';
  happyBar.style.width = happy + '%';
}

function bounce(){
  petBubble.style.transform = 'scale(1.1)';
  setTimeout(() => { petBubble.style.transform = 'scale(1)'; }, 200);
}

document.getElementById('feedBtn').addEventListener('click', () => {
  hunger = clamp(hunger + 20);
  happy = clamp(happy + 5);
  updateBars(); bounce();
  playMsg.textContent = translations[currentLang]['play.msgFeed'];
});

document.getElementById('petBtn').addEventListener('click', () => {
  happy = clamp(happy + 15);
  updateBars(); bounce();
  playMsg.textContent = translations[currentLang]['play.msgPet'];
});

document.getElementById('walkBtn').addEventListener('click', () => {
  happy = clamp(happy + 10);
  hunger = clamp(hunger - 10);
  updateBars(); bounce();
  playMsg.textContent = translations[currentLang]['play.msgWalk'];
});

// ---------- Contact form (front-end only demo) ----------
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = translations[currentLang]['contact.thanks'];
  contactForm.reset();
});
