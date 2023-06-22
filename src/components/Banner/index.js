import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby'

//  (Static image)      <div className={styles.wnav}>  <a href = "" href = "https://wa.me/250783788760" className={styles.flexLogo}><div className={styles.border2}><StaticImage src='../../images/wapp.png' alt=' Victoria Travel Whatsapp link' className={styles.clogo2}/></div></a></div> 
// (Static image example )    <StaticImage src='../../images/logo.jpg' alt=' Victoria Travel Services Logo' className={styles.logo}/>



const Banner = () => {
    return(
        <div className={styles.bannerBack}>
            <h1>Our scholarship application window is closing soon!</h1>
            <Link href=""  className={styles.navlink}>Check whether you're eligible</Link>
        </div>
    )
}

export default Banner;