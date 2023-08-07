import * as React  from "react";
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Care = () => {
    return(
        
        <div id="care" className={styles.destinations}>
            <div className={styles.etitle} >
                <h3 className={styles.description}> OUR CARE POINTS</h3>
                <q className={styles.ubuntu}>I am because we are</q>
            </div>
        <div className={styles.carepointBoxes}>
            <div className={styles.careContainer}>
                <div className={styles.carepointBox}>
                    <div className={styles.logoBox}>
                    <StaticImage src='../../images/hand logo.png' alt="Family kayaking in forest by Philippe Oursel via Unsplash" className={styles.simages}/>
                    <p className={styles.boxTitle}>Direct Help</p>
                    </div>
                    <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                   
                    <p className={styles.boxDescription}>We bring together people  who care about a cause so that they can make a difference.</p>
                </div>
                <div className={styles.carepointBox}>
                    <div className={styles.logoBox}>
                    <StaticImage src='../../images/awarenes.png' alt="Family kayaking in forest by Philippe Oursel via Unsplash" className={styles.simages}></StaticImage>
                    <p className={styles.boxTitle}>Raise Awareness</p>
                    </div>
                    <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                    
                    <p className={styles.boxDescription}>We raise awareness for situations and issues that would otherwise not be seen</p>
                </div>
            </div>
            <div className={styles.careContainer}>
                <div className={styles.carepointBox}>
                    <div className={styles.logoBox}>
                    <StaticImage src='../../images/giving.png' alt="Family kayaking in forest by Philippe Oursel via Unsplash" className={styles.simages}></StaticImage>
                    <p className={styles.boxTitle}>Support Education</p>
                    </div>
                    <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                    <p className={styles.boxDescription}>We support the futures of the next bright minds not yet given a chance to shine</p>
                </div>
                <div className={styles.carepointBox}>
                    <div className={styles.logoBox}>
                    <StaticImage src='../../images/poverty.png' alt="Family kayaking in forest by Philippe Oursel via Unsplash" className={styles.simages}></StaticImage>
                    <p className={styles.boxTitle}>Relieve Poverty</p>
                    </div>
                    <div class="progress" style={{height:"0.25rem",borderRadius:"2.5rem", margin:"5% 0%"}}>
                            <div class="progress-bar" role="progressbar" style={{width:"35%", backgroundColor: "black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>                    
                    <p className={styles.boxDescription}>We help in lots of different ways, but the main ways are by providing direct help.</p>
                </div>
            </div>
        </div>

        </div>
        
    )

}

export default Care