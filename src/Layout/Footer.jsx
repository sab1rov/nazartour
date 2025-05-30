import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap">
                    <h3 className="footer__left">
                        © NazarTour LLC - All right reserved.
                    </h3>
                    <nav className="footer__nav">
                        <a href="#" className="footer__nav-item">
                            Review
                        </a>
                        <a href="#" className="footer__nav-item">
                            Tips
                        </a>
                        <a href="#" className="footer__nav-item">
                            Alerts
                        </a>
                        <a href="#" className="footer__nav-item">
                            Blog
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
