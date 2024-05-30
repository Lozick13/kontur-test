export function sidebarSwitch(callback) {
  const sidebarBtnOpen = document.querySelector('#sidebar-open');
  const sidebarBtnClose = document.querySelector('#sidebar-close');

  sidebarBtnOpen.addEventListener('click', callback);
  sidebarBtnClose.addEventListener('click', callback);
}
export function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const body = document.querySelector('body');

  sidebar.style.animation = sidebar.classList.contains('active')
    ? 'sidebarClose 0.25s ease'
    : 'sidebarOpen 0.25s ease';
  setTimeout(
    () => {
      sidebar.classList.toggle('sidebar_active');
      body.classList.toggle('scroll-bar-off');
    },
    sidebar.classList.contains('active') ? 250 : 0,
  );
}
