import lannayLogo from '../assets/images/lannay.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <span className="footer__copy">&copy; {new Date().getFullYear()} Chloe Webb. All rights reserved.</span>
          <span className="footer__attribution">
            Made by <a href="https://sambunker.com" target="_blank" rel="noopener noreferrer">Samuel Bunker</a>
          </span>
          <a href="#hero" className="footer__top">↑ Surface</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
