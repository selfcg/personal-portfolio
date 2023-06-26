import {useState} from 'react';
import styles from './Navbar.module.scss';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (prevState) => {
    setIsMenuOpen(!prevState);
  }



  return (
    <nav className={styles['navbar']}>
      {/* mobile nav */}
      <div className={styles['mob ile-nav']}>
        <button className={styles['menu-button']}>
          Menu
        </button>
        {isMenuOpen && (
          <div classname={styles['mobile-menu']}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar