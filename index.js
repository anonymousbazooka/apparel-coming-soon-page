const emailInput = document.getElementById('email');
const errorImage = document.getElementById('error-image');
const errorMessage = document.querySelector('.invalid');

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    if (isValidEmail(email)) {
        errorImage.classList.add('hidden');
        errorMessage.classList.add('hidden');
    } else {
        errorImage.classList.remove('hidden');
        errorMessage.classList.remove('hidden');
    }V
});

