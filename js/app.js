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

