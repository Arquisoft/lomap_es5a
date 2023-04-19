import React from "react";
import { usePointDetailsStore } from "../../store/point.store";

import {
  CheckCircleRoundedIcon,
  FileUploadRoundedIcon,
} from "../../helpers/IconContants";

import "../../public/css/components/buttons/BaseButton.scss";
import "../../public/css/components/buttons/uploadImageButton/UploadImageButton.scss";

function UploadImageButton() {
  const { setPointImageFile, imageToUpload } = usePointDetailsStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files?.length > 0) {
      // const file = e.target.files?.[0];
      // setPointImageFile(file);
    }
  };

  return (
    <div data-testid="uploadimage" className="base-input-file-container">
      <input
        data-testid = "input"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleFileChange}
        id="file-input"
      />
      <label
        htmlFor="file-input"
        className="upload-image-button button-black-outlined"
      >
        <FileUploadRoundedIcon fill="#ffffff" />
        Subir imagen
      </label>
      {imageToUpload && (
        <span data-testid="span">
          {imageToUpload.name.length > 10
            ? imageToUpload.name.substring(0, 10).concat("... ")
            : imageToUpload.name}
        </span>
      )}
      {imageToUpload && (
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
