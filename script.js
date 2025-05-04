// script.js
document.addEventListener('DOMContentLoaded', function() {
  const pages = {
    home: document.getElementById('home'),
    companyRegister: document.getElementById('company-register'),
    companyChat: document.getElementById('company-chat'),
    talentCards: document.getElementById('talent-cards'),
    companyContact: document.getElementById('company-contact'),      // 新增
    studentRegister: document.getElementById('student-register'),
    studentResume: document.getElementById('student-resume'),
    resumeProgress: document.getElementById('resume-progress'),
    motivation: document.getElementById('motivation'),
    finish: document.getElementById('finish'),
    jobCards: document.getElementById('job-cards'),
  };

  function showPage(name) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[name].classList.add('active');
    if (name === 'companyChat') {
      setTimeout(() => {
        showPage('talentCards');
        renderTalentCard(0);
      }, 3000);
    }
  }

  // 首頁按鈕
  document.getElementById('btn-company').onclick = () => showPage('companyRegister');
  document.getElementById('btn-student').onclick = () => showPage('studentRegister');
  document.getElementById('company-next').onclick = () => showPage('companyChat');

  // section 4 的「聯絡」按鈕綁到 section 5
  document.getElementById('contact-btn').onclick = () => showPage('companyContact');

  // 動態卡片資料
  const talentCardsData = [
    { name: '軒軒', school: '輔仁大學中文系大三', tags: ['#文字轉化力強', '#細心'], exp: ['提案競賽季軍'], img: './people/p.jpg' },
    { name: 'FJU',  school: '範例大學',              tags: ['#多才多藝'],            exp: ['社團幹部'],       img: './people/fju.jpg' }
  ];
  let currentCard = 0;

  function renderTalentCard(idx) {
    const data = talentCardsData[idx];
    document.querySelector('.talent-cards-area').innerHTML = `
      <div class="talent-card">
        <img class="talent-img" src="${data.img}" alt="">
        <div class="talent-info">
          <div class="talent-school">${data.school}</div>
          <div class="talent-tags">${data.tags.map(t=>`<div>${t}</div>`).join('')}</div>
          <div class="talent-exp-title">實際經驗</div>
          <ul class="talent-exp">${data.exp.map(e=>`<li>${e}</li>`).join('')}</ul>
        </div>
      </div>
    `;
    attachSwipe(document.querySelector('.talent-card'));
  }

  document.getElementById('card-prev').onclick = () => {
    if (currentCard > 0) renderTalentCard(--currentCard);
  };
  document.getElementById('card-next').onclick = () => {
    if (currentCard < talentCardsData.length - 1) renderTalentCard(++currentCard);
  };

  // Tinder 式滑動效果
  function attachSwipe(card) {
    let startX, offsetX;
    const area = document.querySelector('.talent-cards-area');
    const threshold = 100;

    card.addEventListener('pointerdown', e => {
      startX = e.clientX;
      card.style.transition = 'none';
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    });

    function onMove(e) {
      offsetX = e.clientX - startX;
      card.style.transform = `translateX(${offsetX}px) rotate(${offsetX/10}deg)`;
    }

    function onUp() {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

      if (offsetX > threshold) {
        card.style.transform = `translateX(${area.clientWidth}px) rotate(30deg)`;
        nextCard();
      } else if (offsetX < -threshold) {
        card.style.transform = `translateX(-${area.clientWidth}px) rotate(-30deg)`;
        prevCard();
      } else {
        card.style.transform = 'translateX(-50%)';
      }
    }
  }

  function nextCard() {
    if (currentCard < talentCardsData.length - 1) {
      currentCard++;
      setTimeout(() => renderTalentCard(currentCard), 300);
    }
  }

  function prevCard() {
    if (currentCard > 0) {
      currentCard--;
      setTimeout(() => renderTalentCard(currentCard), 300);
    }
  }

  // 首次渲染
  renderTalentCard(0);
});




  // 學生註冊→履歷填寫
  document.getElementById('student-next').onclick = function() {
    showPage('studentResume');
  };
  // 履歷填寫→履歷進度
  document.getElementById('resume-next').onclick = function() {
    showPage('resumeProgress');
  };
  // 履歷進度→動機填寫
  document.getElementById('resume-motivation').onclick = function() {
    showPage('motivation');
  };
  // 動機填寫→完成
  document.getElementById('motivation-done').onclick = function() {
    showPage('finish');
  };

  // 學生履歷進度→推薦職缺
  document.getElementById('resume-progress-next').onclick = function() {
    showPage('job-cards');
    renderJobCard(0);
    currentJob = 0;
  };

  // 推薦職缺卡片資料與渲染
  const jobCardsData = [
    {
      title: '行銷企劃實習生',
      company: 'A公司',
      tags: ['#影音剪輯', '#社群經營', '#內容行銷'],
      desc: '協助短影音剪輯、社群貼文、素材整理，需細心、具責任感。',
      img: 'job1.jpg'
    },
    {
      title: '社群小編',
      company: 'B新創',
      tags: ['#社群經營', '#文案撰寫'],
      desc: '經營IG、FB，撰寫貼文、互動回覆，需創意與耐心。',
      img: 'job2.jpg'
    }
    // 可再加入更多職缺
  ];
  let currentJob = 0;
  function renderJobCard(idx) {
    const t = jobCardsData[idx];
    const area = document.querySelector('.job-cards-area');
    area.innerHTML = `
      <div class="job-card">
        <img src="${t.img}" class="job-img" alt="${t.title}">
        <div class="job-info">
          <div class="job-title">${t.title}</div>
          <div class="job-company">${t.company}</div>
          <div class="job-tags">${t.tags.map(tag => `<div>${tag}</div>`).join('')}</div>
          <div class="job-desc">${t.desc}</div>
        </div>
      </div>
    `;
  }
  document.getElementById('job-prev').onclick = function() {
    if (currentJob > 0) {
      currentJob--;
      renderJobCard(currentJob);
    }
  };
  document.getElementById('job-next').onclick = function() {
    if (currentJob < jobCardsData.length - 1) {
      currentJob++;
      renderJobCard(currentJob);
    }
  };

  // 自訂 show 事件（for AI對話自動切換）
  const origAdd = Element.prototype.classList.add;
  Element.prototype.classList.add = function(...args) {
    origAdd.apply(this.classList, args);
    if (args.includes('active')) {
      const evt = new Event('show');
      this.dispatchEvent(evt);
    }
  };
}); 
