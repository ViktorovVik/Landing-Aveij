const items = document.querySelectorAll('[data-accordion-item]')

items.forEach( item => {
   item.addEventListener('click', () => {

      const contentBlock = document.nextElementSibling;

      if (item.classList.contains('accordion__item--active')) {
         item.classList.remove('accordion__item--active');
         contentBlock.style.display="none";
      } else {
         items.forEach((btn) => {
            btn.classList.remove('accordion__item--active')
         })
      }
      item.classList.add('accordion__item--active')
   })
})


