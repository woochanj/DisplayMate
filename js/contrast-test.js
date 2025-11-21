document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('contrast-container');
    const overlay = document.getElementById('instruction-overlay');

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
        
        container.appendChild(bar);
    }

    // Toggle fullscreen and hide overlay
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
            overlay.style.display = 'none';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Click anywhere to toggle
    document.body.addEventListener('click', toggleFullscreen);

    // Handle ESC key to show overlay again if needed (optional, but good UX)
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            overlay.style.display = 'flex';
        }
    });
});
