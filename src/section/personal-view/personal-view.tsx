import { useTranslate } from "../../locales";

const PersonalView = () => {
    const { t } = useTranslate("home")
    return (
        <section
            id="overview"
            className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-500/10 via-transparent to-transparent blur-3xl" />

            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
                {t("personalOverview")}
            </h2>

            <div className="
                flex flex-col lg:flex-row items-start gap-12
                bg-linear-to-b from-gray-900 to-gray-950
                sm:p-10 p-2 rounded-2xl
                border border-gray-800/60
                shadow-xl shadow-blue-500/10
            ">

                <div className="lg:w-1/4 flex flex-col items-center sm:w-auto w-full">
                    <div className="
                        relative p-1 rounded-full
                        bg-linear-to-br from-blue-500 to-cyan-400
                        shadow-lg shadow-blue-500/40
                    ">
                        <div className="
                            w-28 h-28 rounded-full
                            bg-gray-900
                            flex items-center justify-center
                            text-5xl font-extrabold text-white
                        ">
                            C
                        </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                        Hoàng Văn Chính
                    </h3>
                </div>

                <div className="lg:w-3/4 space-y-6">

                    <div className="
                        p-5 rounded-xl
                        bg-gray-900/80
                        border border-gray-800
                        hover:border-blue-500/40
                        transition
                    ">
                        <h4 className="sm:justify-start justify-center text-lg font-semibold text-white mb-2 flex items-center gap-2">
                            🎓 {t("education")}
                        </h4>
                        <p className="text-gray-400 sm:text-start text-center">
                            {t("university")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="
                            p-5 rounded-xl
                            bg-gray-900/80
                            border border-gray-800
                            hover:border-blue-500/40
                            transition
                        ">
                            <h4 className="sm:justify-start justify-center text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                🏆 {t("achievements")}
                            </h4>
                            <ul className="list-disc list-inside text-gray-400 space-y-1 ">
                                <li>{t("studentResearch")}</li>
                                <li>{t("innovationStartup")}</li>
                            </ul>
                        </div>

                        <div className="
                            p-5 rounded-xl
                            bg-gray-900/80
                            border border-gray-800
                            hover:border-blue-500/40
                            transition
                        ">
                            <h4 className="sm:justify-start justify-center text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                📜 {t("certification")}
                            </h4>
                            <p className="text-gray-400 sm:text-start text-center">VSTEP – Level B2</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="
                        p-5 rounded-xl
                        bg-gray-900/80
                        border border-gray-800
                        flex flex-wrap gap-6 justify-between
                    ">
                        <a
                            href="mailto:chinhhoangtc03@gmail.com"
                            className="text-blue-400 hover:text-cyan-300 transition flex items-center gap-2"
                        >
                            📧 chinhhoangtc03@gmail.com
                        </a>

                        <a
                            href="https://github.com/chinhhoangtc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-cyan-300 transition flex items-center gap-2"
                        >
                            🐙 GitHub
                        </a>

                        <span className="text-gray-400 flex items-center gap-2">
                            📍 Cầu Giấy, Hà Nội
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PersonalView;
