import styles from './Footer.module.css'

const Footer = () => {

    return (
        <div className={styles['footerM']}>
            <div className="container">
                <div className="w3social-icons footer-w3icons">

                </div>
                <p className={styles['footerC']}>
                    © Pet Love. All Rights Reserved | Designed by Tisho
                </p>
            </div>
        </div>

    )
}


export default Footer;