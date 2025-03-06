import { useTranslation } from "react-i18next";

export const About = () => {
    const [t, i18n] = useTranslation("global");

    const about = t("about", { returnObjects: true }) as {
        title: string;
        desc: string;
        cv: string;
        pdf: {
            fileUrl: string;
            fileName: string;
        };
    };
    const pdf = about?.pdf;
    const menu = t("menu", { returnObjects: true }) as {
        liste: Array<string>;
    };

    return (
        <section className="about" id={menu?.liste[0]?.toLowerCase()}>
            <div className="container">
                <article className="avatar">
                    <img src="/images/bcr.jpg" alt="Avatar" />
                </article>

                <article className="infos">
                    <h2>BOUBACAR BALDE</h2>
                    <h3>{about?.title}</h3>
                    <p>{about?.desc}</p>
                    <div>
                        <a href={pdf.fileUrl} download={pdf.fileName}>
                            {about?.cv}
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};
