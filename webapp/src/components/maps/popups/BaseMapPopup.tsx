import React, { useState } from "react";
import BaseBadge from "../../badges/BaseBadge";
import ProfileInfoWithFollowButton from "../../profiles/ProfileInfoWithFollowButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";

import "../../../public/css/components/maps/popups/BasePopup.scss";
import BaseButton from "../../buttons/BaseButton";
import { BaseMapPopupProps } from "../../../shared/shareddtypes";

function BaseMapPopup({
  name,
  location,
  image,
  owner,
  category,
}: BaseMapPopupProps) {
  const [showCategoryBadge, setShowCategoryBadge] = useState(false);

  const badgeStyles = {
    backgroundColor: "white",
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  const handleShowBadge = (show: boolean) => {
    setShowCategoryBadge(show);
  };

  return (
    <div className="base-popup-modal">
      <div
        className="base-popup-modal__head"
        onMouseEnter={() => handleShowBadge(true)}
        onMouseLeave={() => handleShowBadge(false)}
      >
        {category && showCategoryBadge && (
          <BaseBadge text={category} styles={badgeStyles} />
        )}
        <img src={image} alt={""} />
      </div>
      <div className="base-popup-modal__body">
        <ProfileInfoWithFollowButton
          name={owner?.name || "Anónimo"}
          imageUrl={owner.imageUrl}
          webId={owner.webId}
        />
        <div className="popup-modal-social-icons">
          {/* <ShareIcon
            sx={{
              color: "#2B3467",
            }}
          /> */}
          <FavoriteBorderIcon
            sx={{
              color: "#ef233c",
            }}
          />
        </div>
      </div>
      <div className="base-popup-modal__footer">
        <div className="popup-model-footer__contact-info">
          <p>{name}</p>
          <p>{location.address}</p>
        </div>
        <BaseButton type="button-blue" text="Ver punto" onClick={() => ""} />
      </div>
    </div>
  );
}

export default BaseMapPopup;
