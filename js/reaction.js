/* --- Reaction Test Logic (New!) --- */
const reactionBox = document.getElementById('reaction-box');
const reactionTitle = document.getElementById('reaction-title');
const reactionDesc = document.getElementById('reaction-desc');

let reactionState = 'idle'; // idle, waiting, ready, result
let reactionTimer;
let startTime;

function handleReactionClick() {
    if (reactionState === 'idle' || reactionState === 'result') {
        // Start Game
        reactionState = 'waiting';
        reactionBox.style.backgroundColor = '#ce3838'; // Red
        reactionTitle.textContent = "Wait for Green...";
        reactionDesc.textContent = "Don't click yet.";
        
        // Random time between 2s ~ 5s
        const randomTime = Math.floor(Math.random() * 3000) + 2000;
        
        reactionTimer = setTimeout(() => {
            reactionState = 'ready';
            reactionBox.style.backgroundColor = '#32cd32'; // Green
            reactionTitle.textContent = "CLICK NOW!";
            reactionDesc.textContent = "";
            startTime = Date.now();
        }, randomTime);

    } else if (reactionState === 'waiting') {
        // Clicked too early
        clearTimeout(reactionTimer);
        reactionState = 'result';
        reactionBox.style.backgroundColor = '#ff9500'; // Orange
        reactionTitle.textContent = "Too Soon!";
        reactionDesc.textContent = "Click to try again.";

    } else if (reactionState === 'ready') {
        // Success
        const endTime = Date.now();
        const timeDiff = endTime - startTime;
        
        reactionState = 'result';
        reactionBox.style.backgroundColor = '#0071e3'; // Blue
        reactionTitle.textContent = `${timeDiff} ms`;
        reactionDesc.textContent = "Excellent! Click to retry.";
    }
}

