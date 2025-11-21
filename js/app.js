/* --- Tab Switching Logic --- */
function switchTab(tabName) {
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active-section'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    document.getElementById(`section-${tabName}`).classList.add('active-section');
    
    const navItems = document.querySelectorAll('.nav-item');
    if(tabName === 'monitor') navItems[0].classList.add('active');
    if(tabName === 'keyboard') navItems[1].classList.add('active');
    if(tabName === 'reaction') navItems[2].classList.add('active');
}

function closeModal() {
    document.getElementById('result-modal').style.display = 'none';
}

/* js/app.js 맨 아래에 추가 */

// --- Smart Header Logic ---
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 1. 스크롤을 내리는 중이고 & 어느 정도 내려왔다면 -> 헤더 숨김
    if (currentScrollTop > lastScrollTop && currentScrollTop > 60) {
        header.classList.add('header-hidden');
    } 
    // 2. 스크롤을 올리는 중이거나 & 맨 위에 도달했다면 -> 헤더 보임
    else {
        header.classList.remove('header-hidden');
    }
    
    // 현재 스크롤 위치를 저장 (다음 번 비교를 위해)
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
});

