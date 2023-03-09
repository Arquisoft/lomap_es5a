import Footer from "src/components/footer/Footer";
import Nav from "../components/Nav";
import "../public/css/layouts/authenticatedLayout/AutenticatedLayout.scss";

type Styles = {
  padding?: string;
};

type Props = {
  children?: React.ReactNode;
  styles?: Styles;
};

// TODO: Mover estilo en línea a fichero CSS externo
function AuthenticatedLayout({ children, styles }: Props) {
  return (
    <div style={styles} className="authenticated-layout-container">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default AuthenticatedLayout;
