import AuthenticatedLayout from "src/layouts/AutenticatedLayout"
import "../../public/css/pages/points/CreatePointPage.css"
import TopAccountAside from "src/components/asides/accountAside/TopAccountAside"

function CreatePointPage(){
   
return (
    <AuthenticatedLayout>
        <div className='main-create-points'>
            <div className='left-aside-create-points'>
              <TopAccountAside />
            </div>
            <div className='formulario-create-points'>
              Formulario
            </div>
            <div className='marcador-create-points'>
              mapa
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export  default CreatePointPage
