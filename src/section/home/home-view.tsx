import ProjectView from "../project/project-view";
import TechnologyView from "../technology/technology-view";
import PersonalView from "../personal-view/personal-view";
import IntroductionView from "../introduction/introduction-view";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
const HomeView = () => {
    return (
        <div className="min-h-screen bg-gray-950 font-sans text-white">
            <Header />
            <main>
                <IntroductionView />

                <ProjectView />

                <TechnologyView />

                <PersonalView />
            </main>
            <Footer />
        </div>
    )
}
export default HomeView