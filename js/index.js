const navBar = document.querySelector('.navegador')
window.addEventListener('scroll', () =>{
    if(window.scrollY>0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
})
AOS.init();

$('.light-box').hide();
$('#open').click(function(){
    $('.light-box').show();
})
$('#close').click(function(){
    $('.light-box').hide();
})