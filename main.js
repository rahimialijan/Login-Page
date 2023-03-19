const fogotPass = document.querySelector('.forgot-pass');
const registerAccount = document.querySelector('.register-account');
const login = document.querySelector('.login');
const close = document.querySelector('.close');
const loginSection = document.querySelector('.login-page');
const registerSection = document.querySelector('.register-container');
const forgotSection = document.querySelector('.forgot-container');

fogotPass.addEventListener('click', () => {
  loginSection.style.display = 'none';
  forgotSection.style.display = 'flex';
});

registerAccount.addEventListener('click', () => {
  loginSection.style.display = 'none';
  registerSection.style.display = 'flex';
});
login.addEventListener('click', () => {
  registerSection.style.display = 'none';
  loginSection.style.display = 'flex';
});
close.addEventListener('click', () => {
  forgotSection.style.display = 'none';
  loginSection.style.display = 'flex';
});