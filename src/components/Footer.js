import React from "react";

class Footer extends React.Component {
    render() {
        return (
        <footer>
        <div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                
                <div class="footer__link--items">
                    <h2>Beställ</h2>
                    <a href="/meny.html">Meny</a>
                    <a href="/special.html">Specialerbjudande</a>
                </div>
                
            </div>
            <div class="footer__link--wrapper">
                
                <div class="footer__link--items">
                    <h2>Om oss</h2>
                    <a href="/information.html">Information</a>
                    <a href="https://www.facebook.com/profile.php?id=100063765601460">Facebook</a>
                    <a href="/kontakt.html">Kontakta oss</a>
                </div>
                
            </div>
        </div>
        <div class="social__media">
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="/" id="footer__logo"><i class="fas faa-gem"></i>THAI THAI</a>
                </div>
                <p class="website__rights">© THAI THAI 2023. All rights reserved</p>
                <div class="social__icons">
                    <a href="/" class="social__icon--link" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </div>
        </div>  
    </div>
    </footer>
    )
    }
}

export default Footer;