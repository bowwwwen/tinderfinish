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

  document.getElementById('student-next')?.addEventListener('click', () => showPage('studentResume'));
  document.getElementById('resume-next')?.addEventListener('click', () => showPage('resumeProgress'));
  document.getElementById('resume-progress-next')?.addEventListener('click', () => showPage('jobCards'));
  document.getElementById('job-next')?.addEventListener('click', () => showPage('motivation'));
  document.getElementById('motivation-done')?.addEventListener('click', () => showPage('finish'));

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
        <img class="talent-img" src="${data.img}" alt="${data.name}" />
        <h3 class="talent-name">${data.name}</h3>
        <p class="talent-school">${data.school}</p>
        <div class="talent-tags">${data.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
        <ul class="talent-exp">${data.exp.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>
    `;
  }

  document.getElementById('card-prev')?.addEventListener('click', () => {
    if (currentCard > 0) {
      currentCard--;
      renderTalentCard(currentCard);
    }
  });
});
