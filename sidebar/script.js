document.addEventListener("DOMContentLoaded", () => {
  // サイドバーと背景オーバーレイのHTML構造を自動作成
  const sidebarHTML = `
    <div class="overlay" id="overlay"></div>
    <nav class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <button class="close-btn" id="closeBtn" aria-label="閉じる">&times;</button>
      </div>
      <ul class="sidebar-menu">
        <li><a href="#">ここにテキスト</a></li>
        <li><a href="#">ここにテキスト</a></li>
        <li><a href="#">ここにテキスト</a></li>
        <li><a href="#">ここにテキスト</a></li>
        <li><a href="#">ここにテキスト</a></li>
      </ul>
    </nav>
  `;

  // bodyタグの最後に挿入
  document.body.insertAdjacentHTML("beforeend", sidebarHTML);

  // 開閉処理の追加
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  if (menuBtn) menuBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
});