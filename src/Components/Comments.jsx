import { commentsData } from "../data";
import StarIcon from "../assets/icons/Star.png";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Comments() {
    const { language } = useContext(LanguageContext);
    return (
        <section className="comments">
            <div className="container">
                <div className="comments-cards">
                    {commentsData.map((item) => (
                        <div className="comments-cards__item" key={item.id}>
                            <p className="comments-cards__title">
                                {language == "uz" ? item.title : item.title_ru}
                            </p>
                            <p className="comments-cards__name">
                                -{language == "uz" ? item.name : item.name_ru}
                            </p>
                            <div className="comments-cards__img">
                                <img src={item.img} alt={item.name} />
                                <p className="recommended-cards__rate">
                                    <img src={StarIcon} alt="star icon" />
                                    {item.rate}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Comments;
