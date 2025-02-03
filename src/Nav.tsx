import React from 'react';

interface LinkItem {
  to: string;
  label: string;
}

interface NavbarProps {
  title: string;
  links: LinkItem[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>{title}</h1>
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.to}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

