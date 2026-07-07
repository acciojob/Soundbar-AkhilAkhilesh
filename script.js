const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
let audio = null;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0; 
        }
//sounds/tada.mp3
		//https://github.com/acciojob/Soundbar-AkhilAkhilesh/blob/master/sounds/applause.mp3
        const soundName = button.innerText.trim();
        audio = new Audio(`https://raw.githubusercontent.com/acciojob/Soundbar-AkhilAkhilesh/master/sounds/${soundName}.mp3`);
        
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