import { useTranslate } from "../../locales"

const IntroductionView = () => {
    const { t } = useTranslate("home")
    return (
        <div> <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8 text-start space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">

                <h1 className="sm:text-start text-center text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                    <span className="text-white">
                        {t("helloIm")}
                    </span> {" "}

                </h1>

                <div className="sm:text-start text-center text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">

                    {t("fullName")}
                </div>
            </div>
            <p className="text-md text-gray-300 max-w-4xl leading-relaxed sm:text-start text-center">
                {t("profileDescription")}
            </p>
        </section></div>
    )
}

export default IntroductionView