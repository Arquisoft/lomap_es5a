import AuthenticatedLayout from "src/layouts/AutenticatedLayout";

import "../../public/css/pages/points/SinglePointPage.scss";

function SinglePointDetailsPage() {
  return (
    <AuthenticatedLayout>
      <div className="single-point-details-container">
        <p>Página detalle de punto</p>
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
