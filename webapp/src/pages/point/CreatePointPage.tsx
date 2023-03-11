import AuthenticatedLayout from "src/layouts/AutenticatedLayout"
import "../../public/css/pages/points/CreatePointPage.css"

function CreatePointPage(){
    return(
        <AuthenticatedLayout>
            <div>
                Crear Puntos
            </div>
        </AuthenticatedLayout>
    )
}

export  default CreatePointPage