import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import HeroImage from "../../images/Hero image1.png"
import HeroImageSmall from "../../images/bkimage.png"
import Checkout from '../Checkout/checkout';

import { loadStripe } from "@stripe/stripe-js"
import { Link } from 'gatsby-plugin-modal-routing';

const Hero = () =>{

    return (

        <div className={styles.gridSetup} style={{}}>
          <div  className={styles.imgGrid}>
          <Link to="/about">
          <picture className={styles.picDiv}>
                <source media="(max-width: 799px)" srcset={HeroImageSmall}></source>
                <source media="(min-width: 800px)" srcset={HeroImage}></source>
                <img
                  className={styles.heroImage}
                  //layout="fullWidth"
                
                  // You can optionally force an aspect ratio for the generated image
                  
                  // This is a presentational image, so the alt should be an empty string
                  alt="Santorini,Greece by Jonathan Gallegos via Unsplash"
                  // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                  src={
                      HeroImage
                  }
              
              ></img>
            </picture>
            </Link>
            </div>
      <div

        className={styles.innerGrid}
      >
        {/* Any content here will be centered in the component */}
        <div className={styles.heroContainer}>
          
        <h1 className={styles.header}>Supporting Better Futures</h1>
        <Checkout/>
        </div>
      </div>
    </div>

    )
}

export default Hero