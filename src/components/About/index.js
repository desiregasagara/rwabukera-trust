import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AboutImage from "../../images/aboutpic.png"
import { Link, navigate } from "gatsby"


const About = () =>{
    return(


        <div id="about" className={styles.aboutDiv}>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </head>

        <div className={styles.gridSetup} style={{}}>
          <div  className={styles.imgGrid}>
          <picture>
                <source media="(max-width: 799px)" srcset={AboutImage}></source>
                <source media="(min-width: 800px)" srcset={AboutImage}></source>
                <img
                  className={styles.heroImage}
                  //layout="fullWidth"
                
                  // You can optionally force an aspect ratio for the generated image
                  
                  // This is a presentational image, so the alt should be an empty string
                  alt="Santorini,Greece by Jonathan Gallegos via Unsplash"
                  // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                  src={
                      AboutImage
                  }
              
              ></img>
            </picture>
            </div>
      <div

        className={styles.innerGrid}
      >
                    {/* Any content here will be centered in the component */}
                    <div className={styles.heroContainer}>
                            <h3 className={styles.description}> ABOUT US</h3>
                            <p className={styles.ubuntu}>Embrace the highest form of love</p>
                            <p className={styles.info}>Our aim is to encourage 'the love of educational pursuit' as instilled in us by our elders. </p>
                            <Link to= "/about"  className={styles.bLink}> <button className={styles.btn}>Find out more</button></Link>
                    </div>

                </div>

        </div>
        <p className={styles.quoteText}>A good education is a foundation for a better future</p>
        <div className={styles.projectsdiv}>
             <div className={styles.projectBox}>
                <p className={styles.number}>20%</p>
                <div className={styles.projectText}>
                    <p className={styles.factHeader}>more children in Africa</p>
                    <p className={styles.factSub}>have enrolled in education in the past 10 years</p>
                </div>

            </div>

            <div className={styles.projectBox}>
                <p className={styles.number}>30%</p>
                <div className={styles.projectText}>
                    <p  className={styles.factHeader}>of children aged 6-14</p>
                    <p className={styles.factSub}>are out of education in Africa. </p>
                </div>

            </div>
            <div className={styles.projectBox}>
                <p className={styles.number}>100%</p>
                <div className={styles.projectText}>
                    <p className={styles.factHeader}>of your donations</p>
                    <p className={styles.factSub}>offer direct relief.</p>
                </div>

            </div>




        </div>
        </div>
        

    )
}

export default About