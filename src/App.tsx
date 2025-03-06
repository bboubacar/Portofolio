import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Competences } from "./components/Competences";

function App() {
    return (
        <div>
            <Header />
            <About />
            <Competences />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
