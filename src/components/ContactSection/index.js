import * as React from 'react';
import * as styles from './styles.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ContactSection =()=> {
    return(
        
        <div className={styles.contact}>
        <h2 className={styles.ubuntu}>Contact Us</h2>
        

        <div className={styles.heroContainer}>
            <p className={styles.header}>If you have a query about anything related to who we are and what we do, we're happy to help</p>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className={styles.form} netlify>

            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.cform}>
                <div className={styles.fcontainer}>
                    <label for="fname" className = {styles.labels} >
                        <p className={styles.text}>Your Name(required)</p>
                        <input type="text"name="name" id="name" className={styles.formControl} required /> 
                    </label>
                </div>
                <div className={styles.fcontainer} >
                    <label for="femail" className = {styles.labels} >
                    <p className={styles.text}>Your Email(required)</p>
                        <input type="email"name="email" id="email"  className={styles.formControl} required /> 
                    </label>
                </div>
                <div className={styles.fcontainer}>
                    <label for="flocation" className = {styles.labels} required>
                        <p className={styles.text}>Your message</p>
                        <textarea type="text"name="location" id="location" className={styles.formControlMessage} placeholder="" required ></textarea> 
                    </label>
                </div>
            <div className={styles.btnDiv}>
            <button type="submit" id="submit" className={styles.btn}>
                        Submit
            </button>
            </div>
            </div>

            </form>
        </div>
      </div>
    )
}

export default ContactSection