import React, { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import useLanguage from "../hooks/useLanguage";

function Banner() {
    const { setLanguage } = useContext(LanguageContext);
    let [langValue, setLangValue] = useState("uz");
    const customSelect = useRef();
    const itemsRef = useRef();

    const t = useLanguage();

    const openModal = () => {
        itemsRef.current.classList.toggle("open");
    };

    const closeModal = () => {
        itemsRef.current.classList.remove("open");
    };

    const setLang = (e) => {
        const value = e.target.innerHTML;
        localStorage.setItem("lang", value);
        setLangValue(value);
        setLanguage(value);
        closeModal();
    };

    useOnClickOutside(customSelect, closeModal);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (!!lang) {
            setLangValue(lang);
        }
    }, []);

    return (
        <section className="banner" id="banner">
            <div className="container">
                <header className="banner__header header">
                    <a href="/" className="header__link">
                        Nazartour.uz
                    </a>
                    <nav className="header__nav">
                        <a href="#banner" className="header__nav-item">
                            {t("main")}
                        </a>
                        <a href="#offers" className="header__nav-item">
                            {t("tours")}
                        </a>
                        <a href="#about" className="header__nav-item">
                            {t("about_us")}
                        </a>
                        <a href="#recommend" className="header__nav-item">
                            {t("offers")}
                        </a>
                        <div className="custom-select" ref={customSelect}>
                            <button
                                className="custom-select__main"
                                onClick={() => openModal()}
                            >
                                {langValue}
                            </button>
                            <ul
                                className="custom-select__items-wrap"
                                ref={itemsRef}
                            >
                                <li
                                    className="custom-select__item"
                                    onClick={(e) => setLang(e)}
                                >
                                    uz
                                </li>
                                <li
                                    className="custom-select__item"
                                    onClick={(e) => setLang(e)}
                                >
                                    ru
                                </li>
                            </ul>
                        </div>
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
                    <h1 className="banner__title">{t("banner_title")}</h1>
                    <p className="banner__subtitle">{t("banner_subtitle")}</p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
