/* ===== 导航交互 ===== */
document.addEventListener('DOMContentLoaded', () => {
  // 当前页面高亮
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav .nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // 滚动时导航变化
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(37, 99, 235, 0.3)';
    } else {
      nav.style.borderBottomColor = '#1f2937';
    }
  });

  // 移动端菜单（可选，如需响应式可保留）
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});
