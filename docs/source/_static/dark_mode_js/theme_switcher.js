/*
 * Based on sphinx-rtd-dark-mode by MrDogeBro (MIT License)
 * https://github.com/MrDogeBro/sphinx_rtd_dark_mode
 */
const createThemeSwitcher = () => {
  let btn = document.createElement('BUTTON');
  btn.className = 'theme-switcher';
  btn.id = 'themeSwitcher';
  btn.innerHTML =
    '<i id=themeMoon class="fa fa-moon-o"></i><i id=themeSun class="fa fa-sun-o"></i>';
  document.body.appendChild(btn);

  if (window.themeStore.get() === 'dark') $('#themeMoon').hide(0);
  else $('#themeSun').hide(0);
};

$(document).ready(() => {
  createThemeSwitcher();
  $('#themeSwitcher').click(switchTheme);
});

const switchTheme = () => {
  if (window.themeStore.get() === 'dark') {
    window.themeStore.set('light');

    $('#themeSun').fadeOut(200, () => {
      $('#themeMoon').fadeIn(200);
    });
  } else {
    window.themeStore.set('dark');

    $('#themeMoon').fadeOut(200, () => {
      $('#themeSun').fadeIn(200);
    });
  }
};
