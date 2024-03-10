const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpop=document.querySelector('.btnLogin-popup');
const icon=document.querySelector('.close');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});
btnpop.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
icon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})
