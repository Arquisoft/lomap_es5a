import React from "react";
import BaseButton from "./BaseButton";
import { uploadImage } from "../../services/imageService";
import { usePointDetailsStore } from "../../store/point.store";

function UploadImageButton() {
  const { setPointImageFile } = usePointDetailsStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPointImageFile(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange}/>
      <BaseButton
        type="button-primary"
        text="Subir imagen"
        onClick={() => console.log()}
      />
    </div>
  );
}

export default UploadImageButton;
