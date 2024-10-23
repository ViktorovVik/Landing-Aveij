const menuBurger = document.querySelector('.burger__body')
const menuBtn = document.querySelector('.burger__icon')

const body = document.body

if (menuBurger && menuBtn) {
   menuBtn.addEventListener('click', () => {
      menuBurger.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   })

   menuBurger.querySelectorAll('.burger__link').forEach(link => {
      link.addEventListener('click', () => {
         menuBurger.classList.remove('active')
         menuBtn.classList.remove('active')
         body.classList.remove('lock')
      })
   })
}

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
   anchor.addEventListener('click', event => {
      event.preventDefault()

      const blockID = anchor.getAttribute('href').substring(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})