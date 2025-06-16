import React from "react";
import useLanguage from "../hooks/useLanguage";

function Register() {
    const t = useLanguage();

    return (
        <section className="register">
            <div className="container">
                <div className="register__wrap">
                    <div className="register__content">
                        <h3 className="register__title">
                            {t("registr_title_one")}
                            <br /> {t("registr_title_two")}
                        </h3>
                        <button className="register__button">
                            {t("contact_us")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
