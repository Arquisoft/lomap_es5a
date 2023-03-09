
import "../../public/css/components/banners/AccountBanner.scss";
import BaseProfileItem from "../profiles/BaseProfileItem";

type Props = {
  _className: string,
  imgBackground: string
}

//TODO: {_className}: ComponentClassName,

function UserAccountBanner(
  {_className, imgBackground}: Props
) {
  return (
    <div className={`user-account-banner-container ${_className}`}>
      <div className="user-account-banner__background" ><img src={imgBackground} alt="" /></div>
      <div className="user-account-banner__overlay"></div>
      {/* Imagen de fondo como prop */}
      {/* Componente para mostrar avatar y nombre del usuario */}
      <BaseProfileItem />
      Banner de la cuent
    </div>
  );
}

export default UserAccountBanner;
