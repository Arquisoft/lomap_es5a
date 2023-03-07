import { InfoBox } from "./info/InfoBox"
import "../../public/css/components/about/PageInfo.css"

function PageInfo(){
    return(
        <div className="info-principal">
            <div className="info-comp1">
                <InfoBox />
            </div>
            <div className="info-comp2">
                <InfoBox />
            </div>
            <div className="info-comp3">
                <InfoBox />
            </div>
        </div>
    )
}

export default PageInfo