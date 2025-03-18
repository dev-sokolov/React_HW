import { createContext, useState } from "react";

export const languageContext = createContext("English");

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("English")

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === "English" ? "Ukrainian" : "English") 
    }

    return <languageContext.Provider value={{language, toggleLanguage}}>
                {children}
            </languageContext.Provider>
}

export default LanguageProvider;

