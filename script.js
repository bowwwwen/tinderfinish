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
 @@ -29,37 +30,29 @@
   document.getElementById('btn-student').onclick = () => showPage('studentRegister');
   document.getElementById('company-next').onclick = () => showPage('companyChat');
 
   // section 4 的「聯絡」按鈕綁到 section 5
   document.getElementById('contact-btn').onclick = () => showPage('companyContact');
 
   // 動態卡片資料
   const talentCardsData = [
     {
       name: '軒軒',
       school: '輔仁大學中文系大三',
       tags: ['#文字轉化力強', '#細心'],
       exp: ['提案競賽季軍'],
       img: './people/p.jpg'       // 第一張
     },
     {
       name: 'FJU',
       school: '範例大學',
       tags: ['#多才多藝'],
       exp: ['社團幹部'],
       img: './people/fju.jpg'    // 第二張
     }
     { name: '軒軒', school: '輔仁大學中文系大三', tags: ['#文字轉化力強', '#細心'], exp: ['提案競賽季軍'], img: './people/p.jpg' },
     { name: 'FJU',  school: '範例大學',              tags: ['#多才多藝'],            exp: ['社團幹部'],       img: './people/fju.jpg' }
   ];
   let currentCard = 0;
 
   function renderTalentCard(idx) {
     const data = talentCardsData[idx];
     document.querySelector('.talent-cards-area').innerHTML = `
       <div class="talent-card">
         <img src="${data.img}" class="talent-img" alt="${data.name}">
         <img class="talent-img" src="${data.img}" alt="">
         <div class="talent-info">
           <div class="talent-school">${data.school} ${data.name}</div>
           <div class="talent-school">${data.school}</div>
           <div class="talent-tags">${data.tags.map(t=>`<div>${t}</div>`).join('')}</div>
           <div class="talent-exp-title">實際經驗</div>
           <ul class="talent-exp">${data.exp.map(e=>`<li>${e}</li>`).join('')}</ul>
         </div>
       </div>`;
       </div>
     `;
     attachSwipe(document.querySelector('.talent-card'));
   }
 
