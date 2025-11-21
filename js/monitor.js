/* --- Monitor Test Logic --- */
const colors = ['black', 'white', '#ff0000', '#00ff00', '#0000ff', 'yellow', 'magenta', 'cyan', '#808080'];
let colorIndex = 0;
const testLayer = document.getElementById('test-layer');

function startMonitorTest() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    
    colorIndex = 0;
    testLayer.style.display = 'block';
    testLayer.style.backgroundColor = colors[colorIndex];
}

function nextColor() {
    colorIndex++;
    if (colorIndex < colors.length) {
        testLayer.style.backgroundColor = colors[colorIndex];
    } else {
        endMonitorTest();
    }
}

testLayer.addEventListener('click', nextColor);

// 스페이스바로도 색상 전환 가능
document.addEventListener('keydown', (e) => {
    if (testLayer.style.display === 'block' && e.code === 'Space') {
        e.preventDefault(); // 스크롤 방지
        nextColor();
    }
});

function endMonitorTest() {
    testLayer.style.display = 'none';
    if (document.exitFullscreen) document.exitFullscreen();
    document.getElementById('result-modal').style.display = 'flex';
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) testLayer.style.display = 'none';
});

