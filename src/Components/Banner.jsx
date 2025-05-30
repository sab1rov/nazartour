import React from "react";

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <header className="banner__header header">
                    <a href="/" className="header__link">
                        NazarTour
                    </a>
                    <nav className="header__nav">
                        <a href="#" className="header__nav-item">
                            Review
                        </a>
                        <a href="#" className="header__nav-item">
                            Tips
                        </a>
                        <a href="#" className="header__nav-item">
                            Alerts
                        </a>
                        <a href="#" className="header__nav-item">
                            Blog
                        </a>
                        <a
                            href="#"
                            className="header__nav-item header__nav-item--white"
                        >
                            Blog
                        </a>
                    </nav>

                    <button className="header__menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="white"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 5H20V7H4z"></path>
                            <path d="M4 11H20V13H4z"></path>
                            <path d="M4 17H20V19H4z"></path>
                        </svg>
                    </button>
                </header>
                <div className="banner__content">
                    <h1 className="banner__title">
                        Discover Your Life, Travel Where You Want
                    </h1>
                    <p className="banner__subtitle">
                        Would you explore natur paradise in the world, let’s
                        find the best destination in world with us.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
