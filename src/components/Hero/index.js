import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () =>{

    return (

        <div style={{ display: "grid",backgroundColor:"#F3F2E7", width:"100%",marginBottom:"0.5%", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <StaticImage
            imgStyle={{height:"100%" ,width:"auto",bottom:"0",left:"auto"}}
            style={{
              gridArea: "1/2 / auto / auto",
              // You can set a maximum height for the image, if you wish.
              width: "85%",
              marginLeft: "auto",
          
            }}
            //layout="fullWidth"
          
            // You can optionally force an aspect ratio for the generated image
            
            // This is a presentational image, so the alt should be an empty string
            alt="Santorini,Greece by Jonathan Gallegos via Unsplash"
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={
                '../../images/Hero image1.png'
            }
        
          />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
        
       
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <div className={styles.heroContainer}>
          
        <h1 className={styles.header}>Supporting Better Futures</h1>
        <p className={styles.info}>It involves giving money, goods or time and effort to those who need it.</p>
        <AnchorLink to="/#destinations" className={styles.bLink} ><button className={styles.btn}>MAKE A DONATION</button></AnchorLink>
        </div>
      </div>
    </div>

    )
}

export default Hero