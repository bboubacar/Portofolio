import "../styles/body-panel.scss"

function BodyPanel({mainTitle, items, id}) {

    return(
        <article className="bcr-panel" id={id}>
            <div className="bcr-panel-details">
                <h1>{mainTitle}</h1>
                <div className="bcr-panel-liste">
                    {
                        items.map((item, idx) => {
                            return <Card title={item.title} imgSrc={item.imgSrc} 
                                details={item.details} lien={item.lien} key={idx} />
                        })
                    }
                </div>
            </div>
        </article>
    )
}

function Card({title, imgSrc, details, lien}) {
    return (
        <a href={lien} target="_blank" rel="noreferrer">
            <div className="bcr-panel-card">
                <figure>
                    <img src={imgSrc} alt={title} />
                    <figcaption>{title}</figcaption>
                </figure>
                <div className="bcr-panel-card-details">
                    <span className="color-percent" style={{width: details + '%'}}></span>
                    <span className="number-percent">{details}%</span>
                    
                </div>
            </div>
        </a>
    )
}

export default BodyPanel;