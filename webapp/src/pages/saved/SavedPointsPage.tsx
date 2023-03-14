import MapWithDragableMarker from "src/components/maps/MapWithDragableMarker";
import AccountLayout from "src/layouts/AccountLayout";
import "../../public/css/pages/saved/SavedPointsPage.scss";

function SavedPointsPage() {
  return (
    <AccountLayout hasBanner={false}>
      <section className="saved-points-container">
        <h2>Puntos guardados</h2>
        <div>
        </div>
      </section>
    </AccountLayout>
  );
}

export default SavedPointsPage;
