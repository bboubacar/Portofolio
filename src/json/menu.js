import { FaHouse, FaUser, FaBookOpen, FaEnvelope } from "react-icons/fa6";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const menuData = {
    aPropos: {
        title: "A Propos",
        id: "aPropos",
        active: true,
        icon: <FaHouse />
    },
    technologies: {
        title: "Technologies",
        id: "technologies",
        active: false,
        icon: <FaUser />
    },
    outils: {
        title: "Outils",
        id: "outils",
        active: false,
        icon: <FaBookOpen />
    },
    autres: {
        title: "Autres",
        id: "autres",
        active: false,
        icon: <HiOutlineViewGridAdd />
    },
    messageMoi: {
        title: "Message moi",
        id: "messageMoi",
        active: false,
        icon: <FaEnvelope />
    }
}

export default menuData;