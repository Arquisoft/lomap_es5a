import React from "react";
import { usePointDetailsStore } from "../../store/point.store";

import {
  CheckCircleRoundedIcon,
  FileUploadRoundedIcon,
} from "../../helpers/IconContants";

import "../../public/css/components/buttons/BaseButton.scss";
import "../../public/css/components/buttons/uploadImageButton/UploadImageButton.scss";

function UploadImageButton() {
  const { setPointImageFile, image } = usePointDetailsStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setPointImageFile(file);
    }
  };

  return (
    <div className="base-input-file-container">
      <input
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleFileChange}
        id="file-input"
      />
      <label
        htmlFor="file-input"
        className="upload-image-button button-primary-outlined"
      >
        <FileUploadRoundedIcon fill="#ffffff" />
        Subir imagen
      </label>
      {image && (
        <span>
          {image.name.length > 10
            ? image.name.substring(0, 10).concat("... ")
            : image.name}
        </span>
      )}
      {image && (
        <CheckCircleRoundedIcon
          style={{
            color: "#41c300",
            fontSize: "1.2rem",
          }}
        />
      )}
    </div>
  );
}

export default UploadImageButton;
