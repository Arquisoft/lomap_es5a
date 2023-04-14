import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import ComercialInfo from "../../components/about/ComercialInfo";
import  PageInfo  from "../../components/about/PageInfo";

import "../../public/css/pages/about/AboutPage.css";

function AboutPage(): JSX.Element {
  return (   
      <AuthenticatedLayout
        styles={{
          padding: "0 50px",
        }}
      >
        <h1 className="about-title">
          Acerca de
        </h1>

        <h2 className="about-slogan">
          Descubre nuevos lugares, comparte y más
        </h2>
        <div className="about-comercialPosition">
          <ComercialInfo />
        </div>
        <div className="about-pageInfoPosition">
          <PageInfo />
        </div>
      </AuthenticatedLayout>
  );
}

export default AboutPage;
