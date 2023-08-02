import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';

const handleNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scroll', window.scrollY > window.innerHeight - 60);
  }
};

const handleNavbarBackground = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.add('homepage-navbar');
  }
};

export const useNavbarStyles = () => {
  const history = useHistory();

  useEffect(() => {
    history.location.pathname === '/' && handleNavbarBackground();
  }, [history.location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarScroll);

    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
    };
  }, []);
};
