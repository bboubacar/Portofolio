import { useTranslation } from "react-i18next";

type ProjectProps = {
    imgSrc: string;
    title: string;
    items: Array<string>;
    link: string;
    btn: string;
};

export const Projects = () => {
    const [t] = useTranslation("global");

    const projets = t("projects", { returnObjects: true }) as {
        title: string;
        btn: string;
        liste: Array<ProjectProps>;
    };

    const menu = t("menu", { returnObjects: true }) as {
        liste: Array<string>;
    };

    return (
        <section className="projets" id={menu?.liste[2]?.toLowerCase()}>
            <div className="container">
                <h2>{projets?.title}</h2>
                <div className="proj-container">
                    {projets?.liste?.map((list) => {
                        return (
                            <Projet
                                key={list?.title}
                                imgSrc={list?.imgSrc}
                                title={list?.title}
                                link={list?.link}
                                items={list?.items}
                                btn={projets?.btn}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

function Projet({ imgSrc, title, items, link, btn }: ProjectProps) {
    return (
        <article className="projet">
            <div className="img">
                <img src={imgSrc} alt={imgSrc} />
                <div className="opac">
                    <a href={link} target="_blank">
                        {btn}
                    </a>
                </div>
            </div>
            <h3>{title}</h3>
            <div className="liste">
                {items.map((item) => (
                    <strong key={item}>{item}</strong>
                ))}
            </div>
        </article>
    );
}
