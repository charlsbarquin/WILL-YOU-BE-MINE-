(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I'll be really sad...",
    "I'll be very sad...",
    "I'll be very very sad...",
    "Ok fine, I'll stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Add shake animation
    noButton.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noButton.style.animation = '';
    }, 500);
}

function handleYesClick() {
    const container = document.querySelector('.container');
    container.style.animation = 'celebrate 1s forwards';
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1000);
}

// Add to your CSS:
// @keyframes shake {
//     0%, 100% { transform: translateX(0); }
//     25% { transform: translateX(-5px); }
//     50% { transform: translateX(5px); }
//     75% { transform: translateX(-5px); }
// }
// 
// @keyframes celebrate {
//     0% { transform: scale(1); }
//     50% { transform: scale(1.1); }
//     100% { transform: scale(1); }
// }