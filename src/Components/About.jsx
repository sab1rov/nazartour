import Img from "/images/about-img.png";

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrap">
                    <div className="about__img">
                        <img src={Img} alt="main image" />
                        <div className="about-info about-info__first">
                            <p className="about-info__title">300+</p>
                            <p className="about-info__subtitle">Destinations</p>
                        </div>
                        <div className="about-info about-info__second">
                            <p className="about-info__title">150+</p>
                            <p className="about-info__subtitle">Hotels</p>
                        </div>
                        <div className="about-info about-info__third">
                            <p className="about-info__title">5000+</p>
                            <p className="about-info__subtitle">Tourists</p>
                        </div>
                    </div>
                    <div className="about__content">
                        <h3 className="about__title">
                            Travel Any Corner of The World With Us
                        </h3>
                        <p className="about__subtitle">
                            Would you explore nature paradise in the world,
                            let’s find the best destination in world with us,
                            Would you explore nature paradise in the world,
                            let’s find the best destination in world with us.
                            Would you explore nature paradise in the world,
                            let’s find the best destination in world with us.
                            <br />
                            <br />
                            Would you explore nature paradise in the world,
                            let’s find the best destination in world with us.
                        </p>
                        <button className="about__button">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
