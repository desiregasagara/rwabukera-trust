import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"



const NavBar = () => {

    let greetingMessage = ""
    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    } else {
        greetingMessage = "You are not logged in"
    }

    return(
        <div>
        <div className={styles.navbar}> 

        <Link to='/'>
            <StaticImage src='../../images/Logo24.png' className={styles.logo} />
        </Link>
            <div className={styles.nav}>
                <div className={styles.hiddenDiv}> Hide me</div>


                <label className={styles.label} for="toggle" >&#9776;</label>
                <input type="checkbox" id="toggle" className={styles.toggle}/>

                <div className={styles.navInner}>

                <nav className={styles.changeme} >
                

                    <ul className={styles.navlinks}>
                         <li className={styles.navlist}><Link to= "/about" className={styles.navlink}>About</Link></li>
                         <li className={styles.navlist}><Link to = "/apply" className={styles.navlink}>Applications</Link></li>
                         {/*
                         {` `}
                         <li className={styles.navlist}><Link to= "/app/profile"className={styles.navlink}>Member's portal</Link> </li>
                         {` `}
                        {isLoggedIn() ? (
                        <a
                            href="/"
                            onClick={event => {
                            event.preventDefault()
                            logout(() => navigate(`/app/login`))
                            }}
                        >
                            Logout
                        </a>
                        ) : null}
                         <span>{greetingMessage}</span>
                        */}

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