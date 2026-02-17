(function () {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const root = document.documentElement;

  const isDark = () => root.classList.contains('dark');

  function updateLabel() {
    const dark = isDark();
    // Show the CURRENT mode as the label:
    btn.textContent = dark ? 'Light mode' : 'Dark mode';
    // (optional a11y)
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Current theme: dark' : 'Current theme: light');
    btn.title = dark ? 'Light mode' : 'Dark mode';
  }

  function setTheme(dark) {
    root.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    updateLabel();
  }

  // Initial label (the early inline script already set the class)
  updateLabel();

  // Toggle on click
  btn.addEventListener('click', () => setTheme(!isDark()));

  // If no stored preference, follow OS changes live
  if (!localStorage.getItem('theme') && window.matchMedia) {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setTheme(e.matches);
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else if (mql.addListener) mql.addListener(onChange);
  }
})();