import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { SMediaContainer } from "./SMedia";
import { Nav } from "./Nav";
import CIcon from "@coreui/icons-react";
import { cifGb, cifFr } from "@coreui/icons";

export const Header = () => {
    const [t, i18n] = useTranslation("global");
    const [curLng, setCurLng] = useState("fr");
    const [menuOpen, setMenuOpen] = useState(false);

    const menu = t("menu", { returnObjects: true }) as {
        title: string;
        liste: Array<string>;
    };

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const handleChangeLng = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurLng(lang);
    };

    return (
        <header>
            <div className="container">
                <SMediaContainer />
                <div className="nav-burger-menu" onClick={toggleMenu}>
                    {menuOpen ? <FiMenu /> : <GrClose />}
                </div>
                <Nav menuOpen={menuOpen} />
                <div className="langues">
                    {curLng === "en" ? (
                        <CIcon
                            icon={cifFr}
                            onClick={() => handleChangeLng("fr")}
                        />
                    ) : (
                        <CIcon
                            icon={cifGb}
                            onClick={() => handleChangeLng("en")}
                        />
                    )}
                </div>
            </div>
        </header>
    );
};
