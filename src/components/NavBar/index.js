import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby'

//  (Static image)      <div className={styles.wnav}>  <a href = "" href = "https://wa.me/250783788760" className={styles.flexLogo}><div className={styles.border2}><StaticImage src='../../images/wapp.png' alt=' Victoria Travel Whatsapp link' className={styles.clogo2}/></div></a></div> 
// (Static image example )    <StaticImage src='../../images/logo.jpg' alt=' Victoria Travel Services Logo' className={styles.logo}/>



const NavBar = () => {
    return(
        <div>
        <div className={styles.navbar}> 

        <Link to='/'><StaticImage src='../../images/Logo24.png' alt=' Victoria Travel Services Logo' className={styles.logo}/></Link>
            <div className={styles.nav}>
                <div className={styles.hiddenDiv}> Hide me</div>


                <label className={styles.label} for="toggle" >&#9776;</label>
                <input type="checkbox" id="toggle" className={styles.toggle}/>

                <div className={styles.navInner}>

                <nav className={styles.changeme} >
                

                    <ul className={styles.navlinks}>
                         <li className={styles.navlist}><Link to= "/about" className={styles.navlink}>About</Link></li>
                         <li className={styles.navlist}><Link to = "/apply" className={styles.navlink}>Applications</Link></li>
                         <li className={styles.navlist}><a href = "" className={styles.navlink}>Member's portal</a></li>

                    </ul>
                </nav>
                <Link to = "/contact"  className={styles.bLink} ><button className={styles.btn}>CONTACT</button></Link>
                </div>
                
            </div>
        
        </div>
        </div>
    )
}

export default NavBar;