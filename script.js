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
    jobCards: document.getElementById('job-cards'),
  };

  function showPage(name) {
    Object.values(pages).forEach(p => p?.classList.remove('active'));
    pages[name]?.classList.add('active');
    if (name === 'companyChat') {
      setTimeout(() => {
        showPage('talentCards');
        if (talentCardsData.length > 0) {
          renderTalentCard(0);
        }
      }, 3000);
    }
  }

  // 綁定按鈕事件，使用 ?. 避免元素不存在時報錯
  document.getElementById('btn-company')?.addEventListener('click', () => showPage('companyRegister'));
  document.getElementById('btn-student')?.addEventListener('click', () => showPage('studentRegister'));
  document.getElementById('company-next')?.addEventListener('click', () => showPage('companyChat'));
  document.getElementById('contact-btn')?.addEventListener('click', () => showPage('companyContact'));

  const talentCardsData = [
    { name: '軒軒', school: '輔仁大學中文系大三', tags: ['#文字轉化力強', '#細心'], exp: ['提案競賽季軍'], img: './people/p.jpg' },
    { name: 'FJU',  school: '範例大學',              tags: ['#多才多藝'],            exp: ['社團幹部'],       img: './people/fju.jpg' }
  ];
  let currentCard = 0;

  function renderTalentCard(idx) {
    const data = talentCardsData[idx];
    if (!data) return;

    document.querySelector('.talent-cards-area').innerHTML = `
      <div class="talent-card">
        <img class="talent-img" src="${data.img}" alt="">
        <div class="talent-info">
          <div class="talent-school">${data.school}</div>
          <div class="talent-tags">${data.tags.map(t => `<div>${t}</div>`).join('')}</div>
          <div class="talent-exp-title">實際經驗</div>
          <ul class="talent-exp">${data.exp.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
      </div>
    `;

    // 若你已實作 attachSwipe，請取消註解下一行
    // attachSwipe(document.querySelector('.talent-card'));
  }

  document.getElementById('card-prev')?.addEventListener('click', () => {
    if (currentCard > 0) renderTalentCard(--currentCard);
  });

  document.getElementById('card-next')?.addEventListener('click', () => {
    if (currentCard < talentCardsData.length - 1) renderTalentCard(++currentCard);
  });

  if (talentCardsData.length > 0) {
    renderTalentCard(0);
  }
});
