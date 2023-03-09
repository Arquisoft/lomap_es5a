import AuthenticatedLayout from "src/layouts/AutenticatedLayout";
import AccountAside from "src/components/asides/AccountAside";
import "../../public/css/pages/saved/SavedPointsPage.scss";

function SavedPointsPage() {
  return (
    <AuthenticatedLayout>
      <div className="saved-points-container">
        <div className="saved-points-accountaside">
          <AccountAside />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default SavedPointsPage;
