/* Spin Tokens Function */
let tokens = 0;

// Add Tokens
const addTokens = document.getElementById('slot-show');
addTokens.addEventListener("click", () => {
    tokens += 5;
    tokenCounter();
});

// Token Counter Function
const tokenCount = document.getElementById('tokens-count');
const slotMachine = document.getElementById('slot-machine');
const spinButton = document.querySelector('.slot-button');
function tokenCounter() {
    // Update Token
    tokenCount.textContent = tokens;

    // Show/Hide Slot Machine
    if (tokens <= 0) {
        spinButton.disabled = true;
        setTimeout(() => {
            slotMachine.style.display = 'none';
        }, 1000);
    } else {
        slotMachine.style.display = 'flex';
    }
}

/* Slot Machine (Function)*/
function spin() {
    // Disable button
    const spinButton = document.querySelector('.slot-button');
    spinButton.disabled = true;

    const icons = ['<img src="img/One Piece.png">',
                    '<img src="img/Attack On Titan.png">',
                    '<img src="img/Dragon Ball.png">',
                    '<img src="img/Fairy Tail.png">',
                    '<img src="img/Seven Deadly Sins.png">'];
    const column1 = document.querySelector('#column1 .icons');
    const column2 = document.querySelector('#column2 .icons');
    const column3 = document.querySelector('#column3 .icons');

    // RNG Slot
    const pos1 = Math.floor(Math.random() * icons.length);
    const pos2 = Math.floor(Math.random() * icons.length);
    const pos3 = Math.floor(Math.random() * icons.length);

    // Transition Icons
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    function MediaChange(event) {
        if (event.matches) {
            // Mobile Viewport
            column1.style.top = `-${pos1 * 160}px`;
            column2.style.top = `-${pos2 * 160}px`;
            column3.style.top = `-${pos3 * 160}px`;
        } else {
            // Desktop Viewport
            column1.style.top = `-${pos1 * 200}px`;
            column2.style.top = `-${pos2 * 200}px`;
            column3.style.top = `-${pos3 * 200}px`;
        }
    }    
    mediaQuery.addListener(MediaChange);
    MediaChange(mediaQuery);

    // Result
    setTimeout(() => {
        if (pos1 === pos2 && pos2 === pos3) {
            // Display Jackpot
            const overlay = document.createElement('div');
            overlay.id = 'jackpot';
            overlay.innerHTML = `<img src="img/Jackpot.gif" style="width: 100%; height: 100%;">`;
            document.body.appendChild(overlay);

            // Remove Jackpot Animation
            setTimeout(() => {
                document.body.removeChild(overlay);
                spinButton.disabled = false;
            }, 2000);
        } else {
            spinButton.disabled = false;
        }

        // Decrease Tokens
        if (tokens > 0) {
            tokens--;
            tokenCounter();
        }
    }, 1000);
}

/* Slot Machine (Button-Function)*/
// Show
document.getElementById('slot-show').addEventListener('click', function() {
    const slotMachine = document.getElementById('slot-machine');
    slotMachine.style.display = 'flex';
    spinButton.disabled = false;
});

// Hide
document.getElementById('slot-close').addEventListener('click', function() {
    const slotMachine = document.getElementById('slot-machine');
    slotMachine.style.display = 'none';
    tokens = 0;
});