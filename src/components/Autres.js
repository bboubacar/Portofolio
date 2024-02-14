import BodyPanel from "./BodyPanel";
import autres from "../json/autres.json";

function Autres({id}) {
    return(
       <BodyPanel mainTitle="Autres" items={autres} id={id}/>
    )
}

export default Autres;