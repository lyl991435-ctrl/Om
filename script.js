let secretNumber;
let attempts;

function startGame() {
    // اختيار رقم عشوائي بين 1 و 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = ;

    document.getElementById('attempts').textContent = attempts;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('resetButton').style.display = 'none';
}

function checkGuess() {
    const input = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');

    const userGuess = Number(input.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'من فضلك أدخل رقم صحيح بين 1 و 100.';
        return;
    }

    attempts++;
    attemptsSpan.textContent = attempts;

    if (userGuess === secretNumber) {
        message.textContent = `👏 أحسنت! خمّنت الرقم الصحيح ${secretNumber} بعد ${attempts} محاولة.`;
        document.getElementById('resetButton').style.display = 'inline-block';
    } else if (userGuess < secretNumber) {
        message.textContent = 'الرقم أكبر من هذا 🔼';
    } else {
        message.textContent = 'الرقم أصغر من هذا 🔽';
    }

    input.value = '';
    input.focus();
}

// ربط الأزرار بالأحداث
document.addEventListener('DOMContentLoaded', () => {
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const input = document.getElementById('guessInput');

    guessButton.addEventListener('click', checkGuess);
    resetButton.addEventListener('click', startGame);

    // السماح بالضغط على Enter بدل الزر
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });

    // بدء اللعبة أول مرة
    startGame();
});
