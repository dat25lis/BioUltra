const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  const html = document.documentElement;
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    document.body.style.color = '#000';
  } else if (html.dataset.theme === 'light') {
    html.dataset.theme = 'neon';
    document.body.style.color = '#0ff';
  } else {
    html.dataset.theme = 'dark';
    document.body.style.color = '#fff';
  }
});
