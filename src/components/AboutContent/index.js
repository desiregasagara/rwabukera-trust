import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby-plugin-modal-routing";


const AboutContent = () =>{
    return(


        <div id="aboutcontent" className={styles.aboutcontentDiv}>
            <h2 className={styles.ubuntu}>About Us</h2>
            <p>The Rwabukera Trust was esablished by the Rwabukera Family in 2009.The family are of Rwandan origin with global connections. The trustees hold, managem and invest the assets of memenbers, where funds are available, to assist members of the Rwabukera family and others financially.</p>
            <p>The Rwabukera Trust has been established to provide funding which further the aims of the Rwabukera Trust: </p>
            <ul className={styles.list}> 
                
                <li>To encourage "the love of educational pursuit" as inspired by Rwabukera Stefan a Rwandan resident, who, with very limited resources supported the education of seventeen children. </li>
                <li>To address poverty and financial hardship</li>
                <li>To honor and preserve current and future generations.</li>
            </ul>
            <p>If you are interested in applying for a scholarship then please visit our <Link to="/apply" className={styles.linkToApply}>How to Apply page</Link> to read more about the process and the selection criteria.</p>

        </div>
        

    )
}

export default AboutContent