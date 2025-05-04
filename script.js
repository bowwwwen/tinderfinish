// script.js
document.addEventListener('DOMContentLoaded', function() {
  const pages = {
    home: document.getElementById('home'),
    companyRegister: document.getElementById('company-register'),
    companyChat: document.getElementById('company-chat'),
    talentCards: document.getElementById('talent-cards'),
    companyContact: document.getElementById('company-contact'),
    studentRegister: document.getElementById('student-register'),
    studentResume: document.getElementById('student-resume'),
    resumeProgress: document.getElementById('resume-progress'),
    motivation: document.getElementById('motivation'),
    finish: document.getElementById('finish'),
    jobCards: document.getElementById('job-cards')
  };

  function showPage(name) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[name].classList.add('active');
  }

  // 首頁按鈕
  document.getElementById('btn-company').onclick = () => showPage('companyRegister');
  document.getElementById('btn-student').onclick = () => showPage('studentRegister');
  document.getElementById('company-next').onclick = () => showPage('companyChat');

  // 卡片導航 & 聯絡
  document.getElementById('card-prev').onclick = prevCard;
  document.getElementById('card-next').onclick = nextCard;
  document.getElementById('contact-btn').onclick = () => showPage('companyContact');

  // 動態卡片資料
  const talentCardsData = [
    { name: '軒軒', school: '輔仁大學中文系大三', tags: ['#文字轉化力強', '#細心'], exp: ['提案競賽季軍'], img: 'images/people/p.jpg' },
    { name: 'FJU',  school: '範例大學',                tags: ['#多才多藝'],            exp: ['社團幹部'],       img: 'images/people/fju.jpg' }
  ];
  let currentCard = 0;

  function renderTalentCard(idx) {
    const data = talentCardsData[idx];
    document.querySelector('.talent-cards-area').innerHTML = `
      <div class="talent-card">
        <img class="talent-img" src="${data.img}" alt="${data.name}">
        <div class="talent-info">
          <div class="talent-school">${data.school}</div>
          <div class="talent-tags">${data.tags.map(t=>`<div>${t}</div>`).join('')}</div>
          <div class="talent-exp-title">實際經驗</div>
          <ul class="talent-exp">${data.exp.map(e=>`<li>${e}</li>`).join('')}</ul>
        </div>
      </div>`;
  }

  function prevCard() {
    if (currentCard > 0) {
      currentCard--;
      renderTalentCard(currentCard);
    }
  }

  function nextCard() {
    if (currentCard < talentCardsData.length - 1) {
      currentCard++;
      renderTalentCard(currentCard);
    }
  }

  renderTalentCard(0);
});
