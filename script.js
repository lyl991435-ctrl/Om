let secretNumber = generateRandomNumber();
let hasGuessed = false; // علشان نخليها محاولة واحدة فقط

function generateRandomNumber() {
    // رقم عشوائي من 1 إلى 10
    return Math.floor(Math.random() * 10) + 1;
}

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');
const retryButton = document.getElementById('retryButton');

guessButton.addEventListener('click', () => {
    if (hasGuessed) {
        result.textContent = 'انتهت محاولتك! اضغط "لعبة جديدة" لإعادة اللعب.';
        return;
    }

    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        result.textContent = 'من فضلك أدخل رقمًا من 1 إلى 10.';
        return;
    }

    hasGuessed = true; // استخدم المحاولة الوحيدة

    if (userGuess === secretNumber) {
        result.textContent = `🎉 أحسنت! خمّنت الرقم الصحيح: ${secretNumber}`;
        result.style.color = '#22c55e';
    } else {
        result.textContent = `❌ خطأ! الرقم الصحيح كان: ${secretNumber}`;
        result.style.color = '#f97373';
    }

    // إظهار زر إعادة اللعب
    retryButton.style.display = 'inline-block';
});

// إعادة تشغيل اللعبة
retryButton.addEventListener('click', () => {
    secretNumber = generateRandomNumber();
    hasGuessed = false;
    result.textContent = '';
    result.style.color = '#f9fafb';
    guessInput.value = '';
    retryButton.style.display = 'none';
});