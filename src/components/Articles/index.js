import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Articles = () =>{
    return(

        <div id="Causes" className={styles.services}>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </head>
            <div className={styles.etitle} >
                <h3 className={styles.description}> LATEST NEWS</h3>
                <h3 className={styles.ubuntu}>Latest Articles</h3>
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
                        src='../../images/ticket.jpeg' alt="Air Tickets by Amir Hanna via Unsplash"
                        
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
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Education</button></a>
                    </div>
                    </div>
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p>Bring together people who care about a cause</p>
                        <div class="progress" style={{height:"0.5rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"65%", backgroundColor: "#2FB0AB"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className={styles.date}>16 Aug, 2023</p>
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
                        src='../../images/ticket.jpeg' alt="Air Tickets by Amir Hanna via Unsplash"
                        
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
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Food</button></a>
                    </div>
                    </div>                    
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p>Bring together people who care about a cause</p>
                        <div class="progress" style={{height:"0.5rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"65%", backgroundColor: "#2FB0AB"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className={styles.date}>16 Aug, 2023</p>
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
                        src='../../images/ticket.jpeg' alt="Air Tickets by Amir Hanna via Unsplash"
                        
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
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Charity</button></a>
                    </div>
                    </div>
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p>Bring together people who care about a cause</p>
                        <div class="progress" style={{height:"0.5rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"65%", backgroundColor: "#2FB0AB"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className={styles.date}>16 Aug, 2023</p>
                        </div>

                    </div>
                </div>
                </AnchorLink>
            </div>
            <div className={styles.letterContainer}>
                <div >
                <h3 className={styles.ubuntu}>Newsletter</h3>
                <p className={styles.info}>Bring together people who care about a cause</p>
                </div>
                <div className={styles.submitContainer}>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="email" className={styles.form} onSubmit="process(event)">
                    <div className={styles.cform}>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <label for="femail" className = {styles.labels} >
                            <input type="email"name="email" id="email"  className={styles.formControl} placeholder="Your Email" required /> 
                        </label>
                        <button type="submit" id="submit" className={styles.btn}>
                        SUBSCRIBE
                        </button>

                    </div>

                </form>
                </div>
            </div>



        </div>
        

    )
}

export default Articles