import "../../../public/css/components/about/info/InfoBox.css"



function InfoBox({...props}){
    return(
        <div className="infobox-main">
            <div className="infobox-image">
                <img src={props.image} />
            </div>
            <div className="infobox-title">
                {props.title}
            </div>
            <div className="infobox-description">
                {props.description}
            </div>
        </div>
    )
}


export {InfoBox}