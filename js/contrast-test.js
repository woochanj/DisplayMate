const contrastLayer = document.getElementById('contrast-layer');
const contrastContainer = document.getElementById('contrast-container');
const contrastOverlay = document.getElementById('contrast-overlay');

function startContrastTest() {
    // Show the layer
    contrastLayer.style.display = 'block';
    contrastOverlay.style.display = 'flex';

    // Generate bars if not already generated
    if (contrastContainer.children.length === 0) {
        generateContrastBars();
    }

    // Request fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
}

function generateContrastBars() {
    // Generate bars from 0% to 100% in 4% increments
    for (let i = 0; i <= 100; i += 4) {
        const bar = document.createElement('div');
        bar.className = 'contrast-bar';

        // Calculate grayscale color
        const grayLevel = Math.round((i / 100) * 255);
        bar.style.backgroundColor = `rgb(${grayLevel}, ${grayLevel}, ${grayLevel})`;

        // Add percentage label
        const label = document.createElement('span');
        label.textContent = `${i}%`;
        bar.appendChild(label);

        contrastContainer.appendChild(bar);
    }
}

function endContrastTest() {
    contrastLayer.style.display = 'none';
    if (document.exitFullscreen) document.exitFullscreen();
    // Optional: Show result modal or just return to main screen
}

// Toggle fullscreen and hide overlay on click
contrastLayer.addEventListener('click', () => {
    if (contrastOverlay.style.display !== 'none') {
        contrastOverlay.style.display = 'none';
    } else {
        // If overlay is hidden, clicking again exits the test
        endContrastTest();
    }
});

// Handle ESC key to exit properly
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        contrastLayer.style.display = 'none';
        contrastOverlay.style.display = 'flex'; // Reset overlay for next time
    }
});
