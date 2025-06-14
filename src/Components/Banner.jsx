import React from "react";

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <header className="banner__header header">
                    <a href="/" className="header__link">
                        Nazartour.uz
                    </a>
                    <nav className="header__nav">
                        <a href="#" className="header__nav-item">
                            Asosiy
                        </a>
                        <a href="#" className="header__nav-item">
                            Safarlar
                        </a>
                        <a href="#" className="header__nav-item">
                            Biz haqimizda
                        </a>
                        <a href="#" className="header__nav-item">
                            Takliflar
                        </a>
                        <a
                            href="#"
                            className="header__nav-item header__nav-item--white"
                        >
                            Til
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
                        Sarguzasht aynan shu yerda boshlanadi
                    </h1>
                    <p className="banner__subtitle">
                    Dunyoning tabiiy jannatlarini kashf qilishni xohlaysizmi? Eng zo‘r yo‘nalishlarni birga topamiz.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
