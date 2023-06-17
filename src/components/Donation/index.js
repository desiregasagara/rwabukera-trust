import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Donation = () =>{
    return(
        <div id="Donation" className={styles.DonationDiv}>
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
                        '../../images/block@2x.png'
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
                    <div className={styles.sliceContainer}>

                            <div >
                                <h3 className={styles.ubuntu}> Make A Donation</h3>
                                <p className={styles.description}>A charity must have one or more of the purposes which have been defined in law.</p>
                            </div>
                            <div className={styles.buttonDiv}>
                                <a href = ""  className={styles.bLink} ><button className={styles.btnContact}>CONTACT US</button></a>
                                <a href = ""  className={styles.bLink} ><button className={styles.btnDonation}>MAKE A DONATION</button></a>
                            </div>
                  
                    </div>

                </div>

        </div>
        
        </div>
        

    )
}

export default Donation