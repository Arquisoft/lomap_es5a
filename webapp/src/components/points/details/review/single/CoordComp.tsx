import "../../../../../public/css/components/points/details/review/single/CoordComp.css"

type Props = {
    coord : number
}

function CoordComp( coord : Props){
    return(
        <div className="coord-comp-containter" role="container">
            {coord.coord}
        </div>
    )
}

export default CoordComp