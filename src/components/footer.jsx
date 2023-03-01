import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top theme-purple px-5">
        <p className="col-md-4 mb-0  white-font">© 2023 Company, Inc</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 white-font">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 white-font">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 white-font">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
