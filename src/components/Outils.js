import BodyPanel from "./BodyPanel";
import outils from "../json/outils.json";

function Outils({id}) {
    return(
       <BodyPanel mainTitle="Outils" items={outils} id={id}/>
    )
}

export default Outils;