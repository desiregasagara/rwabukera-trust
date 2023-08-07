import * as React  from "react";
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Events = () => {
    return(
        
        <div id="care" className={styles.destinations}>
            <div className={styles.etitle} >
                <h3 className={styles.description}> Future Events</h3>
                <h3 className={styles.ubuntu}>Explore Events</h3>
            </div>


        <div className={styles.imageDiv}>
                    
                   
            <div className={styles.eventContainer}>



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
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Water</button></a>
                    </div>
                    </div>                    
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p>Bring together people who care about a cause</p>
                        <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className={styles.date}>16 Aug, 2023</p>
                        </div>
                        <a href = ""  className={styles.bLink} ><button className={styles.btn}>Explore</button></a>


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
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Water</button></a>
                    </div>
                    </div>                    
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p>Bring together people who care about a cause</p>
                        <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className={styles.date}>16 Aug, 2023</p>
                        </div>
                        <a href = ""  className={styles.bLink} ><button className={styles.btn}>Explore</button></a>


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
                    <a href = ""  className={styles.bLink} ><button className={styles.btnTitle}>Water</button></a>
                    </div>
                    </div>                    
                    <div className={styles.causeDiv}>
                        <div className={styles.causeInner}>
                        <p>Bring together people who care about a cause</p>
                        <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className={styles.date}>16 Aug, 2023</p>
                        </div>
                        <a href = ""  className={styles.bLink} ><button className={styles.btn}>Explore</button></a>


                    </div>
                </div>
                </AnchorLink>
                
                <a href = ""  className={styles.bLink} style={{display:"flex",justifyContent:"center",alignSelf:"center"}}><button className={styles.btnExplore}>Explore All</button></a>
            
            </div>
            </div>
        
        </div>

           
        
    )

}

export default Events