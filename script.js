const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');

function validateName(name) {
  if (name.trim() === '') {
    return false;
  }
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name);
}



function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

document.querySelector('input[type="submit"]').addEventListener('click', event => {
  event.preventDefault();

  if (!validateName(nameInput.value)) {
    nameError.textContent = 'نام کامل را به درستی وارد کنید.';
  } else {
    nameError.textContent = '';
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'ایمیل را به درستی وارد کنید.';
  } else {
    emailError.textContent = '';
  }

  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent =
      'رمز عبور باید شامل حداقل 8 کاراکتر باشد و شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد.';
  } else {
    passwordError.textContent = '';
  }
});
