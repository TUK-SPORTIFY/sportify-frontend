import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const HeaderNav = () => {
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  const HeaderNavbarPath =
    (location.pathname === '/' && token) ||
    location.pathname.startsWith('/ticket') ||
    location.pathname.startsWith('/manageCrew') ||
    location.pathname.startsWith('/my');

  const HeaderOnlyPath =
    location.pathname.startsWith('/addressSearch') || location.pathname.startsWith('/crewItem');

  useEffect(() => {
    if (HeaderNavbarPath) {
      document.body.style.margin = '5.6rem 0 8.08rem 0';
    } else if (HeaderOnlyPath) {
      document.body.style.margin = '5.6rem 0 0 0';
    } else {
      document.body.style.margin = '0';
    }

    return () => {
      document.body.style.margin = ''; // Cleanup
    };
  }, [HeaderNavbarPath, HeaderOnlyPath]);

  return (
    <>
      {(HeaderNavbarPath || HeaderOnlyPath) && <Header />}
      {HeaderNavbarPath && <Navbar />}
      <Outlet />
    </>
  );
};

export default HeaderNav;
