export const handleNavbarChange = () => {
  const navbar = document.querySelector('.navbar');
  const forminerDemo = document.querySelector('.forminer-demo');
  const forminerDocs = document.querySelector('.forminer-docs');

  if (navbar) {
    navbar.classList.toggle(
      'navbar-outside-homepage',
      !!forminerDemo || !!forminerDocs,
    );
    navbar.classList.toggle(
      'scroll',
      !forminerDemo &&
        !forminerDocs &&
        window.scrollY > window.innerHeight - 60,
    );
  }
};
