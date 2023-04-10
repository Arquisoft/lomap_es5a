import "../../../../../public/css/components/points/details/review/single/CategoryComp.css"
import { Category } from "../../../../../shared/shareddtypes"


type Props = {
    category:Category
}

function CategoryComp(category : Props){
    return(
        <div className="categoryComp-contiainer">
            <p>{category.category}</p>
        </div>
    )
}

export default CategoryComp