const heroArea = document.getElementById('heroArea')
const openBtn = document.getElementById('sidebar-open-btn')
const closeBtn = document.getElementById('sidebar-close-btn')
const sidebar = document.getElementById('sidebar')

openBtn.addEventListener('click', () => {
  sidebar.style.display = 'block'
  sidebar.style.animation = 'sidebar-open 0.5s'
  heroArea.style.filter = 'blur(8px)'
})

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none'
  sidebar.style.animationDirection = 'reverse'
  heroArea.style.filter = 'none'
})
