import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const About = () =>{
    return(


        <div id="about" className={styles.aboutDiv}>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </head>
        <div className={styles.about}>
                <StaticImage
                    imgStyle={{height:"100%" ,width:"auto",bottom:"0",left:"auto"}}
                    style={{
                    gridArea: "1/1 / auto / auto",
                    // You can set a maximum height for the image, if you wish.
                    //width: "100%",
                    //height: "100%",
                
                    }}
                    //layout="fullWidth"
                
                    // You can optionally force an aspect ratio for the generated image
                    
                    // This is a presentational image, so the alt should be an empty string
                    alt="Santorini,Greece by Jonathan Gallegos via Unsplash"
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src={
                        '../../images/aboutpic.png'
                    }
                    
                />
                <div
                    style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/2",
                    position: "relative",
                    
                
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                    {/* Any content here will be centered in the component */}
                    <div className={styles.heroContainer}>
                            <h3 className={styles.description}> ABOUT US</h3>
                            <p className={styles.ubuntu}>Lorem ipsum dolor sit amet</p>
                            <p className={styles.info}>The practice of charity means the voluntary giving of help to those in need, as a humanitarian act. There are a number of philosophies.</p>
                            <a href = ""  className={styles.bLink} ><button className={styles.btn}>ABOUT US</button></a>
                    </div>

                </div>

        </div>
        <p className={styles.quoteText}>Whatever it is that you care about, there will be a charity working on it.</p>
        <div className={styles.projectsdiv}>
            <div className={styles.projectBox}>
                <p className={styles.number}>42</p>
                <div className={styles.projectText}>
                    <p style={{fontFamily:'Manrope',fontSize:'20px'}}>People</p>
                    <p style={{fontFamily:'Manrope',fontSize:'16px',color:'#3A1700'}}>Prevention of Cruelty</p>
                </div>

            </div>
            <div className={styles.projectBox}>
                <p className={styles.number}>73</p>
                <div className={styles.projectText}>
                    <p>Society</p>
                    <p>Direct Relief</p>
                </div>

            </div>
            <div className={styles.projectBox}>
                <p className={styles.number}>09</p>
                <div className={styles.projectText}>
                    <p>Project</p>
                    <p>Research Hospital</p>
                </div>

            </div>


        </div>
        </div>
        

    )
}

export default About