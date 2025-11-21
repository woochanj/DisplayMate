/* js/keyboard.js */

const keyDisplay = document.getElementById('key-display');
const codeDisplay = document.getElementById('code-display');
const historyContainer = document.getElementById('key-history');

// 키보드 이벤트 리스너
document.addEventListener('keydown', (e) => {
    
    // 1. 현재 '키보드 테스트' 탭이 아니라면? -> 함수 종료 (스크롤 되게 둠)
    const keyboardSection = document.getElementById('section-keyboard');
    if (!keyboardSection.classList.contains('active-section')) return;

    // 2. ⛔ 스크롤 방지 로직 (핵심)
    // 스페이스바(Space) 또는 화살표 키(Arrow)를 눌렀을 때 브라우저의 기본 동작(스크롤)을 막습니다.
    if (e.code === 'Space' || e.code.includes('Arrow')) {
        e.preventDefault();
    }

    // 3. F5(새로고침), F11(전체화면), F12(개발자도구) 등은 막지 않음
    // (필요하다면 여기서 특정 키를 제외할 수 있습니다)

    // 4. 화면에 키 정보 표시 (기존 로직)
    keyDisplay.textContent = e.key === ' ' ? 'Space' : e.key;
    codeDisplay.textContent = `Code: ${e.code} | Key: ${e.keyCode}`;
    
    // 5. 히스토리 칩 추가
    const chip = document.createElement('div');
    chip.className = 'history-chip';
    chip.textContent = e.key === ' ' ? 'Space' : e.key;
    
    // 최신순으로 앞에 추가
    historyContainer.prepend(chip);

    // 칩이 20개 넘어가면 삭제 (성능 관리)
    if (historyContainer.children.length > 20) {
        historyContainer.removeChild(historyContainer.lastChild);
    }
});