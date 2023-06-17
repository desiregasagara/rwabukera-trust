import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const ApplyContent = () =>{
    return(


        <div id="aboutcontent" className={styles.aboutcontentDiv}>
            <h2 className={styles.ubuntu}>Apply for scholarships</h2>
            <p>The Rwabukera Trust supports a wide range of causes that improve the lives of individuals and communities around the world. Before submitting a request using the form below, please check your needs or cause aligns with at least one of our purpose statements.</p>
            <p>The Rwabukera Trust board and it's trustees will provide scholarships within the UK and internationally.</p>

            <p>The trustees of the Rwabukera Trust are committed to ensuring all funds have a meaningful impact and represent a genuine charitable purpose. Applications are currently open and can be made through the link below:
            </p>
            <a className={styles.applicationForm} href="https://docs.google.com/forms/d/e/1FAIpQLSf3hS70eEjlfp2VHjlVWX03c8Bw6DE2xCIcRyX1_kPZNEOjiQ/formResponse"> Application form</a>

        </div>
        

    )
}

export default ApplyContent