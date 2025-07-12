import React, { useRef, useState } from "react";
import useLanguage from "../hooks/useLanguage";

function Contact() {
  const [inputValue, setInputValue] = useState({
    phone: "+998",
    name: "",
    desc: "",
  });
  const t = useLanguage();

  const phoneError = useRef();
  const nameError = useRef();
  const textError = useRef();

  const getInValue = (e) => {
    const value = e.target.value;

    const x = value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

    const result = `${x[1] !== "" ? "+" + x[1] : ""}${
      x[2] !== "" ? " (" + x[2] : ""
    }${x[3] !== "" ? ")_" + x[3] : ""}${x[4] !== "" ? "_" + x[4] : ""}${
      x[5] !== "" ? "_" + x[5] : ""
    }`;
    setInputValue({ ...inputValue, phone: result });
  };

  const getAreaValue = (e) => {
    setInputValue({ ...inputValue, desc: e.target.value });
  };

  const getNameValue = (e) => {
    setInputValue({ ...inputValue, name: e.target.value });
  };

  const postMessage = async () => {
    const message = `
            Name: ${inputValue.desc}, Phone number: ${inputValue.phone}, Description: ${inputValue.desc}
        `;
    await fetch(
      `https://api.telegram.org/bot7602484416:AAH7HiX5EliQ2d8u4-1fU0f2bLg36VoslEA/sendMessage?text=${message}&chat_id=@nazartour_group`
    );
  };

  const isValid =
    inputValue?.phone?.length >= 19 && inputValue?.desc?.length >= 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.phone.length < 19) {
      phoneError.current.classList.add("show");
    } else {
      phoneError.current.classList.remove("show");
    }

    if (inputValue.name.length <= 3) {
      nameError.current.classList.add("show");
    } else {
      nameError.current.classList.remove("show");
    }

    if (inputValue.desc.length <= 10) {
      textError.current.classList.add("show");
    } else {
      textError.current.classList.remove("show");
    }
    if (isValid) {
      postMessage();
      setInputValue({
        name: "",
        phone: "+998",
        desc: "",
      });
    }
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact__wrap">
            <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="question_input">
                <input
                  type="text"
                  value={inputValue.name}
                  placeholder={t("name_lastname")}
                  onChange={(e) => getNameValue(e)}
                />
                <span className="question__error" ref={nameError}>
                  {t("input_name")}
                </span>
              </div>
              <div className="question_input">
                <input
                  type="text"
                  value={inputValue.phone}
                  placeholder={t("phone")}
                  onChange={(e) => getInValue(e)}
                />
                <span className="question__error" ref={phoneError}>
                  {t("input_phone")}
                </span>
              </div>

              <div className="question_textarea">
                <textarea
                  cols="10"
                  rows="5"
                  value={inputValue.desc}
                  placeholder={t("write_desc")}
                  onChange={(e) => getAreaValue(e)}
                ></textarea>
                <span className="question__error" ref={textError}>
                  {t("input_desc")}
                </span>
              </div>
              <button
                className={`question_btn ${isValid && "valid"}`}
                type="submit"
              >
                {t("send")}
              </button>
            </form>
            <div className="contact__location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5973.69286489059!2d60.62162500000001!3d41.529267!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDMxJzQ1LjQiTiA2MMKwMzcnMTcuOSJF!5e0!3m2!1sru!2s!4v1752217345251!5m2!1sru!2s"
                width="100%"
                height="530"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
