import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby-plugin-modal-routing";


const SuccessContent = () =>{
    return(


        <div id="successcontent" className={styles.successcontentDiv}>
            <h2 className={styles.ubuntu}>Thank you for your support! You've positivily impacted someone today!</h2>
        </div>
        

    )
}

export default SuccessContent