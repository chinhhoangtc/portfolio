import img1 from "../../assets/images/AICEX.png"
import img2 from "../../assets/images/APEXBIT.png"
import img3 from "../../assets/images/XAI.png"
import { useTranslate } from "../../locales"
const ProjectView = () => {
    const { t } = useTranslate("home")
    return (
        <div>
            <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <h2 className="text-4xl font-extrabold text-white text-center">{t("projectsOverview")}</h2>

                <div className="flex flex-col lg:flex-row items-center bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-4 transition duration-500 hover:shadow-2xl hover:border-blue-700/50">
                    <div className="w-full lg:w-2/5 p-4 relative group">
                        <div className="absolute inset-0 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40 rounded-lg left-0"></div>
                        <img
                            src={img1}
                            alt="Tradex - Centralized Exchange (CEX)"
                            className="w-full h-auto rounded-lg shadow-2xl transition duration-500 transform group-hover:scale-[1.01] relative z-10"
                        />
                        <span className="absolute top-8 left-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                            {t("frontendDeveloper")}
                        </span>
                        <div className="sm:flex hidden w-full items-center justify-between mt-4 gap-4">
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("duration")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    8 {t("months")}
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("role")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    Frontend
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("teamSize")}

                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    3
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Content */}
                    <div className="w-full lg:w-3/5 p-4 lg:p-8 space-y-4">
                        <h3 className="text-3xl font-bold text-blue-400 sm:text-start text-center">Tradex - Centralized Exchange (CEX)</h3>
                        <p className="text-gray-400 italic sm:text-start text-center">
                            {t("projectCexDesc")}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">ReactJS</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">TypeScript</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">NestJS</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">WebSocket</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">REST API</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">JWT / Auth</span>
                        </div>
                        <div className="sm:text-start text-center">{t("mainResponsibilities")}</div>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                            <li className="text-sm">{t("frontendPosition")}</li>
                            <li className="text-sm">{t("collaborationDesc")}</li>
                            <li className="text-sm">{t("developSpot")}</li>
                            <li className="text-sm">{t("developFutures")}</li>
                            <li className="text-sm">{t("developDepositWithdraw")}</li>
                            <li className="text-sm">{t("integrateWebsocket")}</li>
                            <li className="text-sm">
                                {t("buildAdminDashboard")}
                            </li>
                            <li className="text-sm">
                                {t("buildUiUx")}
                            </li>
                            <li className="text-sm">{t("buildLandingNode")}</li>
                            <li className="text-sm">{t("buildLandingReferral")}</li>
                            <li className="text-sm">{t("buildLandingBroker")}</li>
                        </ul>

                        <div className="pt-6 space-y-4">
                            <h4 className="text-lg font-semibold text-blue-300 sm:text-start text-center">
                                {t("featureImplementationDetails")}
                            </h4>

                            <ol className="list-disc pl-5 space-y-3 text-gray-300 text-sm">
                                <li>
                                    <span className="font-medium text-white">{t("spotTrading")}</span> –
                                    {t("spotTradingDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("futuresTrading")}</span> –
                                    {t("futuresTradingDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("depositWithdraw")}</span> –
                                    {t("depositWithdrawDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("adminDashboard")}</span> –
                                    {t("adminDashboardDesc")}
                                </li>
                            </ol>
                        </div>
                        <div className="sm:hidden flex flex-col w-full items-center justify-between mt-4 gap-4">
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("duration")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    8 {t("months")}
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("role")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    Frontend
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("teamSize")}

                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://tradex.elonhash.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        group relative inline-flex items-center justify-center
        px-8 py-3 rounded-xl font-semibold text-white
        bg-linear-to-r from-blue-500 to-cyan-500
        shadow-lg shadow-blue-500/30
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40
        focus:outline-none sm:w-auto w-full
    "
                            >
                                <span
                                    className="
            absolute inset-0 rounded-xl blur-md opacity-0
            bg-linear-to-r from-blue-400 to-cyan-400
            group-hover:opacity-60 transition duration-300
        "
                                />

                                <span className="relative z-10">{t("viewWebsite")}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 - Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-4 transition duration-500 hover:shadow-2xl hover:border-blue-700/50">
                    {/* Image */}
                    <div className="w-full lg:w-2/5 p-4 relative group">
                        <div className="absolute inset-0 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40 rounded-lg right-0"></div>
                        <img
                            src={img2}
                            alt="ApexBit - Bot Trading Futures & Spot"
                            className="w-full h-auto rounded-lg shadow-2xl transition duration-500 transform group-hover:scale-[1.01] relative z-10"
                        />
                        <span className="absolute top-8 left-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                            Frontend Developer
                        </span>
                        <div className="hidden sm:flex items-center justify-between mt-4 gap-4">
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("duration")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    8 {t("months")}
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("role")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    Frontend
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("teamSize")}

                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full lg:w-3/5 p-4 lg:p-8 space-y-4">
                        <h3 className="text-3xl font-bold text-blue-400 sm:text-start text-center">ApexBit - Bot Trading Futures & Spot</h3>
                        <p className="text-gray-400 italic sm:text-start text-center">
                            {t("autoTradingBotProject")}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">ReactJS</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">Nest.JS</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">WebSocket</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">Binance API</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">Bitget API</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">JWT Auth</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">REST API</span>
                        </div>
                        <div className="sm:text-start text-center">{t("mainResponsibilities")}</div>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1 pt-2">
                            <li className="text-sm">{t("frontendPosition")}</li>
                            <li className="text-sm">{t("collaborationDesc")}</li>
                            <li className="text-sm">{t("buildSignalSystem")}</li>
                            <li className="text-sm">{t("buildUiSystem")}</li>
                            <li className="text-sm">{t("buildAdminCms")}</li>
                        </ul>
                        <div className="pt-6 space-y-4">
                            <h4 className="text-lg font-semibold text-blue-300 sm:text-start text-center">
                                {t("featureImplementationDetails")}
                            </h4>

                            <div className="space-y-6 text-gray-300 text-sm">

                                {/* USER */}
                                <div>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        <li>{t("designRealtimeDashboard")}</li>
                                        <li>{t("integrateExchangeApi")}</li>
                                        <li>{t("implementTradingSignals")}</li>
                                        <li>{t("buildDepositWithdraw2fa")}</li>
                                        <li>{t("buildNotification")}</li>
                                    </ul>
                                </div>


                                {/* ADMIN */}
                                <div>
                                    <h4 className="font-semibold text-white mb-2">{t("adminDashboard")}</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        <li>
                                            <span className="font-medium text-white">{t("dashboardAnalytics")}</span> –
                                            {t("dashboardAnalyticsDesc")}
                                        </li>

                                        <li>
                                            <span className="font-medium text-white">{t("userTransaction")}</span> –
                                            {t("userTransactionDesc")}
                                        </li>

                                        <li>
                                            <span className="font-medium text-white">{t("packageVoucherCommission")}</span> –
                                            {t("packageVoucherCommissionDesc")}
                                        </li>

                                        <li>
                                            <span className="font-medium text-white">{t("groupTradingSignals")}</span> –
                                            {t("groupTradingSignalsDesc")}
                                        </li>

                                        <li>
                                            <span className="font-medium text-white">{t("walletSystem")}</span> –
                                            {t("walletSystemDesc")}
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">{t("adminPermission")}</span> –
                                            {t("adminPermissionDesc")}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col  sm:hidden items-center justify-between mt-4 gap-4">
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("duration")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    8 {t("months")}
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("role")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    Frontend
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("teamSize")}

                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    3
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://apexbit.cloud/home"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        group relative inline-flex items-center justify-center
        px-8 py-3 rounded-xl font-semibold text-white
        bg-linear-to-r from-blue-500 to-cyan-500
        shadow-lg shadow-blue-500/30
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40
        focus:outline-none sm:w-auto w-full
    "
                            >
                                <span
                                    className="
            absolute inset-0 rounded-xl blur-md opacity-0
            bg-linear-to-r from-blue-400 to-cyan-400
            group-hover:opacity-60 transition duration-300
        "
                                />

                                <span className="relative z-10">{t("viewWebsite")}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 3 - Image Left */}
                <div className="flex flex-col lg:flex-row items-center bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-4 transition duration-500 hover:shadow-2xl hover:border-blue-700/50">
                    {/* Image */}
                    <div className="w-full lg:w-2/5 p-4 relative group">
                        <div className="absolute inset-0 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40 rounded-lg left-0"></div>
                        <img
                            src={img3}
                            alt="X-AIFinance - Nền tảng đầu tư sinh lời (DeFi)"
                            className="w-full h-auto rounded-lg shadow-2xl transition duration-500 transform group-hover:scale-[1.01] relative z-10"
                        />
                        <span className="absolute top-8 left-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                            {t("close")}
                        </span>
                        <div className="sm:flex hidden items-center justify-between mt-4 gap-4">
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("duration")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    4 {t("months")}
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("role")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    Frontend
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("teamSize")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full lg:w-3/5 p-4 lg:p-8 space-y-4">
                        <h3 className="text-3xl font-bold text-blue-400 sm:text-start text-center">{t("xaiFinanceTitle")}</h3>
                        <p className="text-gray-400 italic sm:text-start text-center">
                            {t("xaiFinanceDesc")}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">ReactJS</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">NestJS</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">Web3</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">Wallet Connect</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">REST API</span>
                            <span className="px-3 py-1 text-xs bg-gray-700 text-blue-300 rounded-full font-medium">JWT Auth</span>
                        </div>
                        <div className="sm:text-start text-center">{t("mainResponsibilities")}</div>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                            <li className="text-sm">{t("frontendPosition")}</li>
                            <li className="text-sm">{t("collaborationDesc")}</li>
                            <li className="text-sm">{t("developInvestmentFund")}</li>
                            <li className="text-sm">{t("buildLandingUi")}</li>
                            <li className="text-sm">{t("buildAdminDashboard2")}</li>
                            <li className="text-sm">{t("connectWalletLogin")}</li>
                            <li className="text-sm">{t("changeWalletAddress")}</li>
                            <li className="text-sm">{t("dailyClaimReward")}</li>
                            <li className="text-sm">{t("tokenSwap")}</li>
                            <li className="text-sm">{t("seedSaleVesting")}</li>
                        </ul>
                        <div className="pt-6 space-y-4">
                            <h4 className="text-lg font-semibold text-blue-300 sm:text-start text-center">
                                {t("featureImplementationDetails")}
                            </h4>

                            <ol className="list-disc pl-5 space-y-3 text-gray-300 text-sm">
                                <li>
                                    <span className="font-medium text-white">{t("investmentFund")}</span> –
                                    {t("investmentFundDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("connectWalletAuth")}</span> –
                                    {t("connectWalletAuthDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("dailyClaimReward")}</span> –
                                    {t("dailyClaimRewardDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("tokenSwap")}</span> –
                                    {t("tokenSwapDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("seedSaleVesting")}</span> –
                                    {t("seedSaleVestingDesc")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("adminDashboard")}</span> –
                                    {t("adminDashboardDesc2")}
                                </li>

                                <li>
                                    <span className="font-medium text-white">{t("walletManagement")}</span> –
                                    {t("walletManagementDesc")}
                                </li>
                                <li>
                                    <span className="font-medium text-white">{t("changedWallet")}</span> –
                                    {t("changedWalletDesc")}
                                </li>
                            </ol>

                        </div>
                        <div className="flex sm:hidden flex-col items-center justify-between mt-4 gap-4">
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 sm:w-auto w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("duration")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    4 {t("months")}
                                </div>
                            </div>

                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 sm:w-auto w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("role")}
                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    Frontend
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-3 sm:w-auto w-full">
                                <div className="text-xs text-gray-400 uppercase tracking-wide">
                                    {t("teamSize")}

                                </div>
                                <div className="text-sm font-semibold text-white mt-1">
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col gap-4 pt-4">
                            <a
                                href="https://x-aifinance.finance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
        group relative inline-flex items-center justify-center
        px-8 py-3 rounded-xl font-semibold text-white
        bg-linear-to-r from-blue-500 to-cyan-500
        shadow-lg shadow-blue-500/30
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40
        focus:outline-none
    "
                            >
                                <span
                                    className="
            absolute inset-0 rounded-xl blur-md opacity-0
            bg-linear-to-r from-blue-400 to-cyan-400
            group-hover:opacity-60 transition duration-300
        "
                                />

                                <span className="relative z-10">{t("viewWebsite")}</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1_zq9x1bSN4QQyn2Xe3ps_u2AuFX4j6dc/view?usp=drive_link"
                                className="
        group relative inline-flex items-center justify-center
        px-7 py-3 rounded-xl font-semibold
        text-gray-300 border border-gray-700
        bg-gray-900/40 backdrop-blur
        transition-all duration-300
        hover:border-gray-500 hover:text-white
        hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/20
    "
                                target="_blank"
                            >
                                <span className="relative z-10">Video Review</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default ProjectView