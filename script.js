const mainContent = document.getElementById('main');
const phoneBackground = document.querySelector('.phone-container')
const youTubeIcon = document.querySelector('#main .fa-youtube');
const instagramIcon = document.querySelector('#main .fa-instagram');
const whatsappIcon = document.querySelector('#main .fa-whatsapp');
const facebookIcon = document.querySelector('#main .fa-facebook');
const twitterIcon = document.querySelector('#main .fa-twitter');



youTubeIcon.addEventListener('click', ()=>{
    mainContent.innerHTML = '<i class="fa-brands fa-youtube full"></i>';
    mainContent.classList.add('icons');
    phoneBackground.style.background = 'white';

});

instagramIcon.addEventListener('click', ()=>{
    mainContent.innerHTML = '<i class="fa-brands fa-instagram full"></i>';
    mainContent.classList.add('icons');
    phoneBackground.style.background = 'white';
    
});

whatsappIcon.addEventListener('click', ()=>{
    mainContent.innerHTML = '<i class="fa-brands fa-whatsapp full"></i>';
    mainContent.classList.add('icons');
    phoneBackground.style.background = '#25D366';
    
});

facebookIcon.addEventListener('click', ()=>{
    mainContent.innerHTML = '<i class="fa-brands fa-facebook full"></i>';
    mainContent.classList.add('icons');
    phoneBackground.style.background = '#4267B2';
    
});

twitterIcon.addEventListener('click', ()=>{
    mainContent.innerHTML = '<i class="fa-brands fa-twitter full"></i>';
    mainContent.classList.add('icons');
    phoneBackground.style.background = '#1DA1F2';
    
});
