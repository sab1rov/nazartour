import useLanguage from "../hooks/useLanguage";
import Img from "/images/about-img.png";

function About() {
    const t = useLanguage();

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__wrap">
                    <div className="about__img">
                        <img src={Img} alt="main image" />
                        <div className="about-info about-info__first">
                            <p className="about-info__title">300+</p>
                            <p className="about-info__subtitle">
                                {t("adresses")}
                            </p>
                        </div>
                        <div className="about-info about-info__second">
                            <p className="about-info__title">150+</p>
                            <p className="about-info__subtitle">
                                {t("guests")}
                            </p>
                        </div>
                        <div className="about-info about-info__third">
                            <p className="about-info__title">5000+</p>
                            <p className="about-info__subtitle">
                                {t("tourists")}
                            </p>
                        </div>
                    </div>
                    <div className="about__content">
                        <h3 className="about__title">{t("about_title")}</h3>
                        <p className="about__subtitle">
                            {t("about_subtitle")} {t("about_subtitle")}{" "}
                            {t("about_subtitle")} {t("about_subtitle")}
                            <br />
                            <br />
                            {t("about_subtitle")}
                        </p>
                        <a href="#contact" className="about__button">
                            {t("contact")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
