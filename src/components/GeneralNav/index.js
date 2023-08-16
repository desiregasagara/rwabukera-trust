import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby'

//  (Static image)      <div className={styles.wnav}>  <a href = "" href = "https://wa.me/250783788760" className={styles.flexLogo}><div className={styles.border2}><StaticImage src='../../images/wapp.png' alt=' Victoria Travel Whatsapp link' className={styles.clogo2}/></div></a></div> 
// (Static image example )    <StaticImage src='../../images/logo.jpg' alt=' Victoria Travel Services Logo' className={styles.logo}/>



const GeneralNav = () => {
    return(
        <div>
        <div className={styles.navbar}> 

            <div className={styles.nav}>


                <label className={styles.label} for="toggle" >&#9776;</label>
                <input type="checkbox" id="toggle" className={styles.toggle}/>

                <div className={styles.navInner}>
                <Link to='/' className={styles.linkLogo}><StaticImage src='../../images/innerlogo.png' alt=' Victoria Travel Services Logo' className={styles.logo}/></Link>


                <nav className={styles.changeme} >
                

                    <ul className={styles.navlinks}>
                        <li className={styles.navlist1}><Link to= "/" className={styles.navlink1}>Home</Link></li>
                         <li className={styles.navlist}><Link to= "/about" className={styles.navlink}>About</Link></li>
                         <li className={styles.navlist}><Link to = "/apply" className={styles.navlink}>Applications</Link></li>

                    </ul>
                </nav>
                <Link to = "/contact"  className={styles.bLink} ><button className={styles.btn}>CONTACT</button></Link>
                </div>
                
            </div>
        
        </div>
        </div>
    )
}

export default GeneralNav;