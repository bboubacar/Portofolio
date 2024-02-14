import BodyPanel from "./BodyPanel";
import technologies from "../json/technologie.json";

function Technologies({id}) {
    return(
       <BodyPanel mainTitle="Technologies" items={technologies} id={id} />
    )
}

export default Technologies;