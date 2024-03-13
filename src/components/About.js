import "../styles/about.scss";

function About({id, constactId}) {
    return (
        <article className="bcr-about" id={id}>
            <div className="bcr-about-introduce">
                <figure className="bcr-about-image">
                    <img src="images/balde.png" alt="Les contenus HTML5" />
                </figure>
                <div className="bcr-about-details">
                    <h1>Boubacar Baldé</h1>
                    <p>
                        Web développeur en formation actuellement à la CCI
                        Charente Formation. Très motivé, je suis à la recherche 
                        d'un stage aux périodes: <strong>15 Avril 2024 au Lundi 06 Mai 2024, 
                        17 Juin 2024 au 12 Juillet 2024, 26 Aout 2024 au 13 Septembre 2024
                        </strong>
                    </p>
                    <div className="adresse">
                        <p>24 rue Pierre Semard, 16000 Angoulême </p>
                        <p>(+33) 744 17 51 19</p>
                        <p><a href={`#${constactId}`}>bboubacarfr@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About;