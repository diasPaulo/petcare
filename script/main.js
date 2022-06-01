const openCloseMenu = () => document.body.classList.toggle('openCloseMenu')

const onResize = () =>
  window.innerWidth >= 1024
    ? document.body.classList.remove('openCloseMenu')
    : null

var menu = document.getElementById('btn-menu')
menu.addEventListener('click', openCloseMenu)
window.addEventListener('resize', onResize)
