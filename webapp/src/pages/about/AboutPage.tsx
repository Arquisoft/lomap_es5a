
import AuthenticatedLayout from "src/layouts/AutenticatedLayout";

function AboutPage() {
  return (
    <div>    
      <AuthenticatedLayout>
        <div className="about-title">
          Acerca de
        </div>

        <div className="about-slogan">
          Descubre nuevos lugares, comparte y más
        </div>

        <div className="about-image">

        </div>

        <div className="about-info">

        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default AboutPage;
