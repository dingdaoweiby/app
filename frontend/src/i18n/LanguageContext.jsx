import { createContext, useContext, useEffect, useState } from "react";
import { dict } from "./dictionary";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: dict.en });

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        try {
            const saved = localStorage.getItem("supernova-lang");
            if (saved === "en" || saved === "zh") return saved;
        } catch (_) { /* ignore */ }
        return "en";
    });

    useEffect(() => {
        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    }, [lang]);

    const setLang = (l) => {
        setLangState(l);
        try { localStorage.setItem("supernova-lang", l); } catch (_) { /* ignore */ }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: dict[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useT() {
    return useContext(LanguageContext).t;
}

export function useLang() {
    return useContext(LanguageContext);
}
