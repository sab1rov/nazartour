import { offersData } from "../data";

function Offers() {
    return (
        <section className="offers">
            <div className="container">
                <h3 className="offers__title">Bizning Turlar</h3>
                <div className="offers-cards">
                    {offersData.map((item) => (
                        <div className="offers-cards__item" key={item.id}>
                            <div className="offers-cards__top">
                                <div className="offers-cards__image">
                                    <img src={item.img} alt="card img" />
                                </div>
                                <p className="offers-cards__date">
                                    {item.date}
                                </p>
                            </div>
                            <div className="offers-cards__bottom">
                                <div className="offers-cards__tour">
                                    <p className="offers-cards__type">
                                        {item.tour_type}
                                    </p>
                                    <p className="offers-cards__time">
                                        {item.tour_time}
                                    </p>
                                </div>
                                <p className="offers-cards__city">
                                    {item.city}
                                </p>
                                <div className="offers-cards__info">
                                    <p className="offers-cards__price">
                                        <span>{item.price}$</span>/Kishi boshiga
                                    </p>
                                    <button className="offers-cards__button">
                                        A'loqa
                                    </button>
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
