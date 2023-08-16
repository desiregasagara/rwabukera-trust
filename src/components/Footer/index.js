import * as React from 'react';
import * as styles from './styles.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-modal-routing'; 

const Footer =  () => {
    
    const year= new Date().getFullYear();

    return(
        <div>
            <div className={styles.contactContainer}>

                <div className={styles.contactBox2}>
                <h3 style={{color:'rgba(58, 23, 0, 0.75);', fontSize:'1.2rem'}}>Want to find out more?</h3>

                    <StaticImage src="../../images/mail.png"></StaticImage>
                    <div className={styles.projectText}>
                        <p style={{fontFamily:'Manrope',fontSize:'20px',margin:'0%',textAlign:'center'}}>Mail</p>
                        <p style={{fontFamily:'Manrope',fontSize:'16px',color:'#3A1700',margin:'0%'}}>rwabukeratrust@gmail.com</p>
                    </div>

                </div>


            </div>

            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div>
                        <nav className={styles.changeme} >

                            <ul className={styles.navlinks}>
                                <li className={styles.navlists}><Link to= "/" className={styles.navlinkh}>Home</Link></li>

                                <li className={styles.navlist}><Link to= "/about" className={styles.navlink}>About</Link></li>
                                <li className={styles.navlist}><Link to = "/apply" className={styles.navlink}>Applications</Link></li>
                            </ul>
                        </nav>

                    </div>

                </div>
                <hr className={styles.line}></hr>
                <div className={styles.container}>
                    <p className={styles.copyright}>Copyright &#169;{year} Rwabukera Trust. All rights reserved</p>
                    {/*
                    <div className={styles.words}>
                        <a href='/' className={styles.wordsinner}>Terms of Use</a>
                        <a href='/' className={styles.wordsinner}>Privacy Policy</a>
                    </div>

                    */}
                </div>
            </div>
        </div>

    )
} 

export default Footer;