import AccountLayout from "../../layouts/AccountLayout"
import "../../public/css/pages/points/CreatePointPage.css"
import CreatePointForm from "../../components/forms/CreatePointForm"
import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker"


function CreatePointPage(){ 
  return(
    <AccountLayout hasBanner={false}>
      <div className="main-create-point">
        <div className="create-point-form">
          <CreatePointForm />
        </div>
        <div className="create-point-map">
        <MapWithDragableMarker
            position={[42.883267366785304, -2.676109097850461]}
            styles={{
              width: "300px",
              height: "400px",
              borderRadius: "20px"
            }}
          />
        </div>
      </div>
    </AccountLayout>
  )
}

export  default CreatePointPage
