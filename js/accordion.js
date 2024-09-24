document.querySelectorAll('.accordion__trigger').forEach((item) => {
   item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordion__item--active')
   })
})


