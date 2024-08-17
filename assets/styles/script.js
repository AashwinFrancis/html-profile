document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const menuToggleButton = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');
    const body = document.body;
    sideNav.style.width = '0';
    // Toggle theme
    themeToggleButton.addEventListener('click', () => {
      body.classList.toggle('custom-dark-theme');
      themeToggleButton.textContent = body.classList.contains('custom-dark-theme') ? '🌞' : '🌙';
    });
  
   
  
    // Handle side menu toggling
    menuToggleButton.addEventListener('click', () => {
      sideNav.style.width = sideNav.style.width === '100%' ? '0' : '100%';
    });
  
    closeBtn.addEventListener('click', () => {
      sideNav.style.width = '0';
    });
  });
 
  
  document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});