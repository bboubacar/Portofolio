import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { DiCodeBadge } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiGitBranch } from "react-icons/di";

type TechProps = {
    icon: string;
    title: string;
    list: string;
};

const iconMap: Record<string, IconType> = {
    DiGitBranch: DiGitBranch,
    DiCodeBadge: DiCodeBadge,
    DiDatabase: DiDatabase,
};

export const Competences = () => {
    const [t] = useTranslation("global");

    const skills = t("skills", { returnObjects: true }) as {
        title: string;
        desc: string;
        techs: Array<TechProps>;
    };
    const menu = t("menu", { returnObjects: true }) as {
        liste: Array<string>;
    };

    return (
        <section className="competences" id={menu?.liste[1]?.toLowerCase()}>
            <div className="container">
                <article className="desc">
                    <h2>{skills?.title}</h2>
                    <p>{skills?.desc}</p>
                </article>
                <article className="liste">
                    {skills?.techs?.map((tech, idx) => {
                        const Icon = iconMap[tech.icon];
                        return (
                            <Item
                                key={idx}
                                Icon={Icon}
                                title={tech?.title}
                                list={tech.list}
                            />
                        );
                    })}
                </article>
            </div>
        </section>
    );
};

type ItemProps = {
    Icon: IconType;
    title: string;
    list: string;
};

function Item({ Icon, title, list }: ItemProps) {
    return (
        <div className="item">
            <div className="icon">{<Icon />}</div>
            <h3>{title}</h3>
            <p>{list}</p>
        </div>
    );
}
