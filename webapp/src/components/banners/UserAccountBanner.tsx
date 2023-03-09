import BaseProfileItem from "../profiles/BaseProfileItem";
import "../../public/css/components/banners/AccountBanner.scss";

/**
 * @param imgBackground: Si no se especifica, se muestra un fondo por defecto.
 */
type Props = {
  _className: string;
  imgBackground?: string;
};

//TODO: {_className}: ComponentClassName,

function UserAccountBanner({ _className, imgBackground }: Props) {
  return (
    <div className={`user-account-banner-container ${_className}`}>
      <div
        className="user-account-banner__background"
      >
        {
          imgBackground &&
          <img src={imgBackground} alt="" />
        }
      </div>
      <div className="user-account-banner__overlay"></div>
      {/* Imagen de fondo como prop */}
      {/* Componente para mostrar avatar y nombre del usuario */}
      <div className="user-account-profile-item__wrapper">
        <BaseProfileItem
          profileImage="https://randomuser.me/api/portraits/women/10.jpg"
          name="Sofía Rodríguez"
          email="sofiarodriguez@uniovi.es"
        />
      </div>
    </div>
  );
}

export default UserAccountBanner;
