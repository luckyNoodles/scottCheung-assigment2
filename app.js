const navToggle = document.querySelector('.material-symbols-outlined');
const mainNav = document.querySelector('.navFlexContainer');

navToggle.addEventListener('click', function() {
 mainNav.classList.toggle('mobileNav')
})