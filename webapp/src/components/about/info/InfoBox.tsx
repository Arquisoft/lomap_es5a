import React from "react";
import "../../../public/css/components/about/info/InfoBox.css";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function InfoBox({ icon, title, description }: Props) {
  return (
    <div className="infobox-main">
      <div className="infobox-image" >{icon}</div>
      <div className="infobox-title">{title}</div>
      <div className="infobox-description">{description}</div>
    </div>
  );
}

export { InfoBox };

