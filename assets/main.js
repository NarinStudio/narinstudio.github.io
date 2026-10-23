// 한국어 / 영어 문구. 문구를 바꿀 때는 여기와 index.html의 한국어 기본 문구를 함께 고칩니다.
const translations = {
  ko: {
    "brand": "나린 스튜디오",
    "nav.about": "소개",
    "nav.games": "게임",
    "nav.contact": "연락처",
    "hero.eyebrow": "게임 개발 스튜디오",
    "hero.title": "오래 기억에 남는<br>게임을 만듭니다",
    "hero.lead": "나린 스튜디오는 플레이어에게 즐거운 경험을 선물하는 게임을 만들고 있습니다.",
    "hero.cta": "문의하기",
    "about.title": "소개",
    "about.body": "나린 스튜디오는 성남 판교에 자리한 게임 개발 스튜디오입니다. 작지만 단단한 팀으로, 오래도록 즐길 수 있는 게임을 만드는 것을 목표로 합니다.",
    "games.title": "게임",
    "games.badge": "개발 중",
    "games.body": "첫 번째 게임을 준비하고 있습니다. 곧 소식을 전해드릴게요.",
    "contact.title": "연락처",
    "contact.email": "이메일",
    "contact.address": "주소",
    "contact.addressValue": "경기 성남시 수정구 창업로 54 (기업성장센터 923호)",
    "contact.map": "지도 보기"
  },
  en: {
    "brand": "Narin Studio",
    "nav.about": "About",
    "nav.games": "Games",
    "nav.contact": "Contact",
    "hero.eyebrow": "Game Development Studio",
    "hero.title": "We make games<br>worth remembering",
    "hero.lead": "Narin Studio creates games that bring joyful experiences to players.",
    "hero.cta": "Get in touch",
    "about.title": "About",
    "about.body": "Narin Studio is a game development studio based in Pangyo, Seongnam, Korea. We are a small but dedicated team focused on making games people enjoy for a long time.",
    "games.title": "Games",
    "games.badge": "In development",
    "games.body": "Our first game is in development. Stay tuned for updates.",
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.addressValue": "Room 923, Business Growth Center, 54 Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea",
    "contact.map": "View map"
  }
};

const titles = {
  ko: "나린 스튜디오 | Narin Studio",
  en: "Narin Studio | 나린 스튜디오"
};

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ko" || saved === "en") return saved;
  } catch (e) {}
  const browser = (navigator.language || "ko").toLowerCase();
  return browser.startsWith("ko") ? "ko" : "en";
}

function applyLang(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.documentElement.lang = lang;
  document.title = titles[lang];
  document.querySelector(".lang-toggle").textContent = lang === "ko" ? "EN" : "KO";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

let currentLang = getInitialLang();
applyLang(currentLang);

document.querySelector(".lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "ko" ? "en" : "ko";
  applyLang(currentLang);
});

document.getElementById("year").textContent = new Date().getFullYear();
