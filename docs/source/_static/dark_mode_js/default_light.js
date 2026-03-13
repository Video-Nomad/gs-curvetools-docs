window.themeStore = {
  get: () => localStorage.getItem('theme') || 'light',
  set: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },
};

const loadTheme = () => {
  window.themeStore.set(window.themeStore.get());
};

loadTheme();
