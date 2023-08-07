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
                    <StaticImage src="../../images/mail.png"></StaticImage>
                    <div className={styles.projectText}>
                        <p style={{fontFamily:'Manrope',fontSize:'20px',margin:'0%'}}>Mail</p>
                        <p style={{fontFamily:'Manrope',fontSize:'16px',color:'#3A1700',margin:'0%'}}>charity@info.com</p>
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
                    <div className={styles.images}>
                        <a href='/'className={styles.imageIcon} ><StaticImage src="../../images/mail2.png" className={styles.socialImages}></StaticImage></a>


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