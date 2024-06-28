import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Checkout from "../Checkout/checkout";


const Causes = () =>{
    return(


        <div id="Causes" className={styles.services}>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </head>
            <div className={styles.etitle} >
                <h3 className={styles.description}> Our Success Stories</h3>
                <p className={styles.ubuntu}>How your donations help</p>
            </div>
            <div className={styles.container}>
                                
            <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock}>
                <div className={styles.imageDiv}>
                    
                    <StaticImage  className={styles.simage}  style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
   

                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                    
                        // This is a presentational image, so the alt should be an empty string
                        src='../../images/joel-muniz-3k3l2brxmwQ-unsplash.jpg' alt="Air Tickets by Amir Hanna via Unsplash"
                        
                        formats={["auto", "webp", "avif"]}
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        textAlign:"center",
                        cursor: "pointer",
                        minHeight:"300px",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Cecile</button></a>
                    </div>
                    </div>                    
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p className={styles.cheader}>In her first year of nursing </p> 
                        <p> "Studying to achieve her dream of taking care of patients"</p>
                        <div className={styles.causeAmounts}>
                        </div>
                        <div class="progress" style={{height:"0.5rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"15%", backgroundColor: "#2FB0AB"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <a href = ""  className={styles.bLink} ><Checkout/></a>


                        </div>
                    </div>
                </div>
                </AnchorLink>

                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock}>
                    <div className={styles.imageDiv}>
                    
                    <StaticImage  className={styles.simage}  style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
   

                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                    
                        // This is a presentational image, so the alt should be an empty string
                        src='../../images/doug-linstedt-jEEYZsaxbH4-unsplash.jpg' alt="Air Tickets by Amir Hanna via Unsplash"
                        
                        formats={["auto", "webp", "avif"]}
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        textAlign:"center",
                        cursor: "pointer",
                        minHeight:"300px",
                        }}
                    >
                        {/* Any content here will be centered in the component */}

                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Egide</button></a>
                    </div>
                    </div>
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p className={styles.cheader}>Doing a bachelor's degree in education</p>
                        <p>"Thank you for the greatest chance to pursue education"</p>
                        <div className={styles.causeAmounts}>
                        </div>
                        <div class="progress" style={{height:"0.5rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"85%", backgroundColor: "#2FB0AB"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <a href = ""  className={styles.bLink} ><Checkout/></a>


                        </div>
                    </div>

                </div>
                </AnchorLink>


                

                

               
                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock}>
                <div className={styles.imageDiv}>
                    
                    <StaticImage  className={styles.simage}  style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
   

                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                    
                        // This is a presentational image, so the alt should be an empty string
                        src='../../images/bill-wegener-LqOO5Ko0zSo-unsplash.jpg' alt="Air Tickets by Amir Hanna via Unsplash"
                        
                        formats={["auto", "webp", "avif"]}
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        textAlign:"center",
                        cursor: "pointer",
                        minHeight:"300px",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Vincent</button></a>
                    </div>
                    </div>
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p className={styles.cheader}>Graduated university in 2019</p>
                        <p>Now helps people as a nurse</p>
                        <div className={styles.causeAmounts}>
                        </div>
                        <div class="progress" style={{height:"0.5rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"100%", backgroundColor: "#2FB0AB"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <a href = ""  className={styles.bLink} ><Checkout/></a>


                        </div>
                    </div>
                </div>
                </AnchorLink>
            </div>

            <div style={{margin:" 2% 10%",}}></div>
        </div>
        

    )
}

export default Causes