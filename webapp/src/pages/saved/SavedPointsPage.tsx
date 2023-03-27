import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker";
import AccountLayout from "../../layouts/AccountLayout";
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
