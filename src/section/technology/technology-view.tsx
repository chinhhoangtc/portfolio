import { useTranslate } from "../../locales"

const TechnologyView = () => {

    const { t } = useTranslate("home")
    return (
        <section
            id="tech-stack"
            className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-500/10 via-transparent to-transparent blur-3xl" />

            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
                {t("technologyStack")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Card */}
                {[
                    {
                        title: "Frontend",
                        color: "blue",
                        items: [
                            "HTML5, CSS3 (SCSS), JavaScript",
                            "TypeScript, ReactJS",
                            "Redux, TanStack Query",
                            "TailwindCSS, MUI, Ant Design",
                            "Responsive Design, Accessibility",
                        ],
                    },
                    {
                        title: "Knowledge & DB",
                        color: "green",
                        items: [
                            "NodeJS (Express)",
                            "SQL, PostgreSQL, MongoDB",
                        ],
                    },
                    {
                        title: "Blockchain & API",
                        color: "yellow",
                        items: [
                            "Web3, WalletConnect",
                            "Binance API, Bitget API",
                        ],
                    },
                    {
                        title: "Dev Tools & Optimization",
                        color: "red",
                        items: [
                            "Git, Linux",
                            "Performance Optimization (Memo, Lazy Loading)",
                        ],
                    },
                ].map((card, idx) => (
                    <div
                        key={idx}
                        className="
        group relative overflow-hidden rounded-2xl
        bg-linear-to-b from-gray-900 to-gray-950
        p-6 transition-all duration-500
        hover:-translate-y-2
    "
                    >
                        {/* Outer blue glow */}
                        <div
                            className="
            pointer-events-none absolute inset-0 rounded-2xl
            opacity-0 group-hover:opacity-100
            transition duration-500
            bg-linear-to-br
            from-blue-500/50 via-cyan-400/20 to-transparent
            blur-xl
        "
                        />

                        {/* Inner glass border */}
                        <div
                            className="
            pointer-events-none absolute inset-px rounded-2xl
            bg-linear-to-b from-gray-900/90 to-gray-950/90
            backdrop-blur
        "
                        />

                        <h3
                            className=" sm:text-start text-center
            relative z-10 text-2xl font-semibold mb-4
            text-blue-400
            transition-all duration-300
            group-hover:text-cyan-300
            group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.8)]
        "
                        >
                            {card.title}
                        </h3>

                        <ul className="relative z-10 space-y-2 text-gray-400">
                            {card.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="
                    text-sm border-b border-gray-800/50 pb-1 last:border-none
                    group-hover:text-gray-200 transition
                "
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>



                ))}

            </div>
        </section>
    )
}

export default TechnologyView
