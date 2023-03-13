import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <Link
        to="/"
        className={activeLink === '/' ? 'active' : ''}
        onClick={() => handleLinkClick('/')}
      >
        <div>Employees</div>
      </Link>

      <Link
        to="/tasks"
        className={activeLink === '/tasks' ? 'active' : ''}
        onClick={() => handleLinkClick('/tasks')}
      >
        <div>Tasks</div>
      </Link>

      <Link
        to="/departments"
        className={activeLink === '/departments' ? 'active' : ''}
        onClick={() => handleLinkClick('/departments')}
      >
        <div>Departments</div>
      </Link>
    </nav>
  );
};

export default Navigation;
