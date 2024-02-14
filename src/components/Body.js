import menuData from '../json/menu';
import About from "./About";
import Technologies from "./Technologies";
import Outils from "./Outils";
import Autres from "./Autres";
import Contact from "./Contact";
import "../styles/body.scss";

function Body({isChecked}) {

    return (
        <main className={isChecked ? "mainDecaler" : ""}>
            <section>
                <About id={menuData.aPropos.id} constactId={menuData.messageMoi.id} />
                <Technologies id={menuData.technologies.id} />
                <Outils id={menuData.outils.id} />
                <Autres id={menuData.autres.id} />
                <Contact id={menuData.messageMoi.id} /> 
            </section>
        </main>
    )
}

export default Body;
