import { useTranslation } from "react-i18next";

type NavProps = {
    menuOpen?: boolean;
};

export const Nav = ({ menuOpen = false }: NavProps) => {
    const [t] = useTranslation("global");

    const menu = t("menu", { returnObjects: true }) as {
        title: string;
        liste: Array<string>;
    };

    return (
        <nav className={menuOpen ? "opened" : ""}>
            {menu?.liste?.map((list, idx) => (
                <a key={idx} href={`#${list?.toLowerCase()}`}>
                    {list?.toUpperCase()}
                </a>
            ))}
        </nav>
    );
};
