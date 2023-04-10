import AuthenticatedLayout from '../../layouts/AutenticatedLayout';

import "../../public/css/pages/points/AllPointsPage.scss";

 function AllPointsPage() {
  return (
    <AuthenticatedLayout>
        <div>Todos los puntos</div>
    </AuthenticatedLayout>
  )
}

export default AllPointsPage;
