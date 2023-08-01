export const handleNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scroll', window.scrollY > window.innerHeight - 60);
  }
};

export const handleNavbarBackground = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('homepage-navbar');
  }
};
