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
              <p className="about-info__subtitle">Manzillar</p>
            </div>
            <div className="about-info about-info__second">
              <p className="about-info__title">150+</p>
              <p className="about-info__subtitle">Mehmonxonalar</p>
            </div>
            <div className="about-info about-info__third">
              <p className="about-info__title">5000+</p>
              <p className="about-info__subtitle">Sayohatchilar</p>
            </div>
          </div>
          <div className="about__content">
            <h3 className="about__title">
              Biz bilan dunyoning istalgan burchagiga sayohat qiling
            </h3>
            <p className="about__subtitle">
              Dunyodagi tabiat jannati bilan tanishasizmi, keling biz bilan
              dunyodagi eng yaxshi manzilni topaylik, Dunyodagi tabiat jannati
              bilan tanishasizmi, biz bilan dunyodagi eng yaxshi manzilni
              topaylik. Dunyodagi tabiat jannati bilan tanishasizmi, keling, biz
              bilan dunyodagi eng yaxshi manzilni topaylik.
              <br />
              <br />
              Dunyodagi tabiat jannati bilan tanishasizmi, keling, biz bilan
              dunyodagi eng yaxshi manzilni topaylik.
            </p>
            <button className="about__button">A'loqa</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
