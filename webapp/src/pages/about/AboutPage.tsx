import AuthenticatedLayout from "src/layouts/AutenticatedLayout";
import ComercialInfo from "src/components/about/ComercialInfo";
import  PageInfo  from "src/components/about/PageInfo";

import "../../public/css/pages/about/AboutPage.css"; // TODO: Cambiar a scss

function AboutPage() {
  return (
    <div>    
      <AuthenticatedLayout
        styles={{
          padding: "0 50px",
        }}
      >
        <div className="about-title">
          Acerca de
        </div>

        <div className="about-slogan">
          Descubre nuevos lugares, comparte y más
        </div>
        <div className="about-comercialPosition">
          <ComercialInfo />
        </div>
        <div className="about-pageInfoPosition">
          <PageInfo />
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default AboutPage;
