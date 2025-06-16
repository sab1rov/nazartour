import { recommendedData } from "../data";
import LocationImg from "../assets/icons/location.jpg";
import StarIcon from "../assets/icons/Star.png";
import useLanguage from "../hooks/useLanguage";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Recommended() {
    const t = useLanguage();
    const { language } = useContext(LanguageContext);

    return (
        <section className="recommended" id="recommend">
            <div className="container">
                <h3 className="recommended__title">
                    {t("recomended_adresses")}
                </h3>
                <div className="recommended-cards">
                    {recommendedData.map((item) => (
                        <div className="recommended-cards__item" key={item.id}>
                            <div className="recommended-cards__img">
                                <img
                                    src={item.img}
                                    alt={item.destination_name}
                                />
                            </div>
                            <p className="recommended-cards__rate">
                                <img src={StarIcon} alt="star icon" />{" "}
                                {item.rate}
                            </p>
                            <div className="recommended-cards__content">
                                <p className="recommended-cards__title">
                                    {language == "uz"
                                        ? item.destination_name
                                        : item.destination_name_ru}
                                </p>
                                <p className="recommended-cards__location">
                                    <img src={LocationImg} alt="location" />
                                    {language == "uz"
                                        ? item.location
                                        : item.location_ru}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Recommended;
