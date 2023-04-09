import BaseProfileItem from "../profiles/BaseProfileItem";
import "../../public/css/components/banners/AccountBanner.scss";
import { useUserStore } from "../../store/user.store";
import { useSession } from "@inrupt/solid-ui-react";

/**
 * @param imgBackground: Si no se especifica, se muestra un fondo por defecto.
 */
type Props = {
  _className: string;
  imgBackground?: string;
};

function UserAccountBanner({ _className, imgBackground }: Props) {
  const {session} = useSession();
  const {imageUrl, name, webId} = useUserStore();
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
      <div className="user-account-profile-item__wrapper">
        <BaseProfileItem
          profileImage={imageUrl}
          name={name}
          email={webId || session.info.webId as string}
        />
      </div>
    </div>
  );
}

export default UserAccountBanner;
