const ham = document.querySelector('.ham')
const closeMenu=document.querySelector('#close-Menu');
ham.addEventListener('click', e=>{
  document.querySelector('.mobile-nav').classList.add('show')
  document.querySelector('.overlay').style.display = 'block'
  document.querySelector('body').classList.add('lock')
})

closeMenu.addEventListener('click',e =>{
     document.querySelector('.mobile-nav').classList.remove('show')
     document.querySelector('.overlay').style.display = 'none'
     document.querySelector('body').classList.remove('lock')
 } )