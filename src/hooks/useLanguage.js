import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { languages } from "../utils/translate";

const useLanguage = () => {
    const { language } = useContext(LanguageContext);
    return (text) => (!!languages[text] ? languages[text][language] : text);
};

export default useLanguage;
