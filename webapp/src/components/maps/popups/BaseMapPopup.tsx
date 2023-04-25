import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../public/css/components/maps/popups/BasePopup.scss";
import { BaseMapPopupProps } from "../../../shared/shareddtypes";
import BaseBadge from "../../badges/BaseBadge";
import BaseButton from "../../buttons/BaseButton";
import ProfileInfoWithFollowButton from "../../profiles/ProfileInfoWithFollowButton";
import { usePointDetailsStore } from "../../../store/point.store";
import { canonizeUrl } from "../../../utils/stringUtils";
import { availableCategories } from "../../../helpers/CategoryFilterHelper";
import {
  isPointSaved,
  savePoint,
  unsavePoint,
} from "../../../api/save.point.api";
import { useSession } from "@inrupt/solid-ui-react";
import {
  FavoriteIcon,
  FavoriteBorderIcon,
} from "../../../helpers/IconContants";

function BaseMapPopup({
  name,
  location,
  image,
  owner,
  category,
  point,
}: BaseMapPopupProps) {
  const [showCategoryBadge, setShowCategoryBadge] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { setPointToShow } = usePointDetailsStore();
  const { session } = useSession();

  const navigate = useNavigate();

  const badgeStyles = {
    backgroundColor: "white",
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  const handleShowBadge = (show: boolean) => {
    setShowCategoryBadge(show);
  };

  /**
   * Guardar el punto actual en los puntos guardados.
   */
  const handleSavePoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (point) {
      await savePoint(point, session);
    }
  };

  /**
   * Eliminar de puntos guardados el punto actual.
   */
  const handleUnSavePoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (point) {
      await unsavePoint(point?._id, session?.info.webId as string);
    }
  };

  /**
   * Comprobar si el punto ha sido guardado por el usuario en sesion.
   * @returns
   */
  const checkIfPointIsSaved = async () => {
    if (!point) {
      setIsSaved(false);
      return;
    }

    await isPointSaved(point?._id, session.info.webId as string).then(
      (result: boolean) => {
        setIsSaved(result);
      }
    );
  };

  const handleButtonClick = () => {
    if (point) {
      setPointToShow(point);
    }
    if (point?.name) {
      navigate(canonizeUrl("/points", point.name));
    }
  };

  /**
   * Comprueba si el usuario en sesion es el propietario del punto.
   * En caso de serlo, no se le permite guardar el punto.
   * @returns
   */

  useEffect(() => {
    checkIfPointIsSaved();
  }, [isSaved]);

  return (
    <div className="base-popup-modal">
      <div
        className="base-popup-modal__head"
        onMouseEnter={() => handleShowBadge(true)}
        onMouseLeave={() => handleShowBadge(false)}
      >
        {category && showCategoryBadge && (
          <BaseBadge
            text={
              availableCategories.find((cat) => cat.code === category)?.name ||
              "Otros"
            }
            styles={badgeStyles as React.CSSProperties}
          />
        )}
        <img src={image} alt={""} />
      </div>
      <div className="base-popup-modal__body">
        <ProfileInfoWithFollowButton
          name={owner?.name || ""}
          imageUrl={owner.imageUrl}
          webId={owner.webId}
        />

        {/* {!isUserInSessionTheOwner && ( */}
        <div className="popup-modal-social-icons">
          {isSaved ? (
            <FavoriteIcon
              data-testid="unsave-point-button"
              sx={{
                color: "#ef233c",
              }}
              onClick={(e: any) => handleUnSavePoint(e)}
            />
          ) : (
            <FavoriteBorderIcon
              data-testid="save-point-button"
              sx={{
                color: "#ef233c",
              }}
              onClick={(e: any) => handleSavePoint(e)}
            />
          )}
        </div>
        {/* )} */}
      </div>
      <div className="base-popup-modal__footer">
        <div className="popup-model-footer__contact-info">
          <p>
            {name?.length > 25 ? name.substring(0, 25).concat("...") : name}
          </p>
          <p>
            {location?.address?.length > 30
              ? location?.address.substring(0, 30).concat("...")
              : location?.address}
          </p>
        </div>
        <BaseButton
          type="button-blue"
          text="Ver punto"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default BaseMapPopup;
