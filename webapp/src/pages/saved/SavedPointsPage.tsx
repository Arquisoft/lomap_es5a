import AuthenticatedLayout from "src/layouts/AutenticatedLayout";

import "../../public/css/pages/saved/SavedPointsPage.scss";

function SavedPointsPage() {
  return (
    <AuthenticatedLayout>
      <div className="saved-points-container">SavedPointsPage</div>
    </AuthenticatedLayout>
  );
}

export default SavedPointsPage;
