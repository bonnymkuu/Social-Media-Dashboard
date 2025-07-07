import React from 'react';

const Footer = ({ darkMode }) => (
  <footer className={`text-center py-3 mt-auto ${darkMode ? 'bg-dark text-secondary border-top border-secondary' : 'bg-light text-muted border-top'}`}>
    <small>&copy; {new Date().getFullYear()} Social Dashboard Inc.</small>
  </footer>
);

export default Footer;
