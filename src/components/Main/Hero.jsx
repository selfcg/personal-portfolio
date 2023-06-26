import heroImage from "../../assets/images/hero.jpg";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes['hero-container']}>
        <img src={heroImage} className={classes['hero-image']} alt='Code Snippet Image'></img>
        <div className={classes['image-overlay']}></div>
        <div className={classes['text-container']}>
            <h2 className={classes['text-title']}>.cameron-self</h2>
            <p className={classes['text-description']}>Software Engineer</p>
        </div>
    </div>
  )
}
export default Hero