import React from "react";
import BaseBadge from "src/components/badges/BaseBadge";
import ProfileInfoWithFollowButton from "src/components/profiles/ProfileInfoWithFollowButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';

import "../../../public/css/components/maps/popups/BasePopup.scss";

function BaseMapPopup({ ...props }) {

  const badgeStyles = {
    backgroundColor: "white",
    position: "absolute",
    top: "10px",
    right: "10px",
  }

  return (
    <div className="base-popup-modal">
      <div className="base-popup-modal__head">
        <BaseBadge text={"RESTAURANTE"} styles={badgeStyles}/>
        <img src="https://images.unsplash.com/photo-1640276380950-9fad7f2aba89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
      </div>
      <div className="base-popup-modal__body">
          <ProfileInfoWithFollowButton />
          <div className="popup-modal-social-icons">
            <ShareIcon sx={{
              color: "#2B3467"
            }}/>
            <FavoriteBorderIcon sx={{
              color: "#ef233c"
            }}/>
          </div>
      </div>
    </div>
  );
}

export default BaseMapPopup;
