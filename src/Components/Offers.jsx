import { useContext } from "react";
import { offersData } from "../data";
import useLanguage from "../hooks/useLanguage";
import { LanguageContext } from "../contexts/LanguageContext";

function Offers() {
    const t = useLanguage();
    const { language } = useContext(LanguageContext);

    return (
        <section className="offers" id="offers">
            <div className="container">
                <h3 className="offers__title">{t("our_tours")}</h3>
                <div className="offers-cards">
                    {offersData.map((item) => (
                        <div className="offers-cards__item" key={item.id}>
                            <div className="offers-cards__top">
                                <div className="offers-cards__image">
                                    <img src={item.img} alt="card img" />
                                </div>
                                <p className="offers-cards__date">
                                    {language == "uz"
                                        ? item.date
                                        : item.date_ru}
                                </p>
                            </div>
                            <div className="offers-cards__bottom">
                                <div className="offers-cards__tour">
                                    <p className="offers-cards__type">
                                        {language == "uz"
                                            ? item.tour_type
                                            : item.tour_type_ru}
                                    </p>
                                    <p className="offers-cards__time">
                                        {language == "uz"
                                            ? item.tour_time
                                            : item.tour_time_ru}
                                    </p>
                                </div>
                                <p className="offers-cards__city">
                                    {language == "uz"
                                        ? item.city
                                        : item.city_ru}
                                </p>
                                <div className="offers-cards__info">
                                    <p className="offers-cards__price">
                                        <span>{item.price}$</span>/
                                        {t("per_man")}
                                    </p>
                                    <a href="#contact" className="offers-cards__button">
                                        {t("contact")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Offers;
