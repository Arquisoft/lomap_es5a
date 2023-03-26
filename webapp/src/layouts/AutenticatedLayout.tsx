import Footer from "../components/footer/Footer";
import Nav from "../components/Nav";
import "../public/css/layouts/authenticatedLayout/AutenticatedLayout.scss";

type Styles = {
  padding?: string;
};

/**
 * @param children: Componente que envuelve.
 * @param hasNav: True si el layout contiene una barra de navegacion y false en caso contrario.
 * @param style: Estilos CSS en línea. 
 */
type Props = {
  _className?: string;
  children?: React.ReactNode;
  hasNav?: boolean;
  styles?: Styles;
};

function AuthenticatedLayout({ _className, children, hasNav = true, styles }: Props) {
  return (
    <div style={styles} className={`authenticated-layout-container ${_className}`}>
      { hasNav && <Nav />}
      {children}
      <Footer />
    </div>
  );
}

export default AuthenticatedLayout;
