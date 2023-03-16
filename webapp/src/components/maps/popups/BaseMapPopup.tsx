import React, { useState } from "react";
import BaseBadge from "src/components/badges/BaseBadge";
import ProfileInfoWithFollowButton from "src/components/profiles/ProfileInfoWithFollowButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";

import "../../../public/css/components/maps/popups/BasePopup.scss";
import BaseButton from "src/components/buttons/BaseButton";

type Props = {
  name: string;
  address: string;
  category?: string
}

function BaseMapPopup({ name, address, category}: Props) {
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
        <img
          src="https://images.unsplash.com/photo-1640276380950-9fad7f2aba89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt=""
        />
      </div>
      <div className="base-popup-modal__body">
        <ProfileInfoWithFollowButton />
        <div className="popup-modal-social-icons">
          <ShareIcon
            sx={{
              color: "#2B3467",
            }}
          />
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
          <p>{address}</p>
        </div>
        <BaseButton type="button-blue" text="Ver punto"  onClick={() => ""}/>
      </div>
    </div>
  );
}

export default BaseMapPopup;
