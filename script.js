const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
let audio = null;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0; 
        }

        const soundName = button.innerText.trim();
        audio = new Audio(`./sounds/${soundName}.mp3`);
        
        audio.play().catch(error => {
            console.log("Audio playback failed or was interrupted:", error);
        });
    });
});

// Stop button functionality
stopBtn.addEventListener('click', () => {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset playback position
    }
});