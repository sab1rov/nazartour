import { commentsData } from "../data";
import StarIcon from "../assets/icons/Star.png";


function Comments() {
    return (
        <section className="comments">
            <div className="container">
                <div className="comments-cards">
                    {commentsData.map((item) => (
                        <div className="comments-cards__item" key={item.id}>
                            <p className="comments-cards__title">
                                {item.title}
                            </p>
                            <p className="comments-cards__name">-{item.name}</p>
                            <p className="comments-cards__happy">
                                Happy Trello
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
