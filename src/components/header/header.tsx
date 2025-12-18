import { useEffect, useState } from 'react'
import { allLangs, useTranslate, type LanguageValue } from '../../locales';
import { fagsMock } from '../../_mock';
import "../../index.css"
const Header = () => {
    const { onChangeLang, currentLang } = useTranslate();


    const [selectedLang, setSelectedLang] = useState({
        value: currentLang.value,
        label: currentLang.label,
        icon: fagsMock[currentLang.value],
    });

    useEffect(() => {
        setSelectedLang({
            value: currentLang.value,
            label: currentLang.label,
            icon: fagsMock[currentLang.value],
        });
    }, [currentLang]);


    const handleLanguages = (lang: LanguageValue) => {
        const selected = allLangs.find((l) => l.value === lang);
        if (!selected) return;

        setSelectedLang({
            value: selected.value,
            label: selected.label,
            icon: fagsMock[selected.value],
        });

        onChangeLang(lang);
    };


    return (
        <div>   <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm shadow-lg border-b border-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-end">
                <div className="flex items-center gap-3">
                    {allLangs.map((lang) => {
                        const active = selectedLang.value === lang.value;

                        return (
                            <button
                                key={lang.value}
                                onClick={() => handleLanguages(lang.value as LanguageValue)}
                                className={`
        group relative flex items-center gap-2 px-4 py-1.5 rounded-full
        backdrop-blur
        cursor-pointer
        ${active
                                        ? `
                bg-linear-to-br from-blue-600 to-cyan-500
                text-white
                shadow-lg shadow-blue-500/40
                ring-1 ring-cyan-400/50
              `
                                        : `
                bg-gray-900/80
                text-gray-400
                border border-gray-800
                hover:text-cyan-300
                hover:border-cyan-400/40
                hover:shadow-lg hover:shadow-cyan-500/20
              `
                                    }
    `}
                            >
                                <span
                                    className={`glow-layer
            pointer-events-none absolute inset-0 rounded-full
            opacity-0 group-hover:opacity-100
            transition duration-300
            bg-linear-to-br from-cyan-400/20 to-blue-500/20
            blur-md
        `}
                                />

                                <img
                                    src={fagsMock[lang.value]}
                                    alt={lang.label}
                                    className="
            relative z-10 w-5 h-5 rounded-full object-cover
            ring-1 ring-white/20
        "
                                />

                                <span className="relative z-10 uppercase text-xs font-semibold tracking-wide">
                                    {lang.value}
                                </span>
                            </button>

                        );
                    })}
                </div>
            </div>
        </header></div>
    )
}

export default Header