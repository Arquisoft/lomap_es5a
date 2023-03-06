import AuthenticatedLayout from "src/layouts/AutenticatedLayout";
import { ComercialInfo } from "src/components/about/ComercialInfo";
import { PageInfo } from "src/components/about/PageInfo";
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

        <ComercialInfo />

        <PageInfo />
        
      </AuthenticatedLayout>
    </div>
  );
}

export default AboutPage;
