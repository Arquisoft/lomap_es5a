import MapWithDragableMarker from "src/components/maps/MapWithDragableMarker";
import AccountLayout from "src/layouts/AccountLayout";
import "../../public/css/pages/saved/SavedPointsPage.scss";

function SavedPointsPage() {
  return (
    <AccountLayout hasBanner={false}>
      <section className="saved-points-container">
        <h2>Puntos guardados</h2>
        <div>
          {/*  */}
          <p>mi seccion</p>
          <MapWithDragableMarker
            position={[42.883267366785304, -2.676109097850461]}
            styles={{
              width: "300px",
              height: "500px",
              borderRadius: "20px"
            }}
          />
        </div>
      </section>
    </AccountLayout>
  );
}

export default SavedPointsPage;
