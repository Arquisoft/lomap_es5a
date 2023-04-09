import React from "react";
import "../../../public/css/components/about/info/InfoBox.css";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function InfoBox({ icon, title, description }: Props) {
  return (
    <div className="infobox-main" role="contentinfo">
      <div className="infobox-image" role="img">{icon}</div>
      <div className="infobox-title">{title}</div>
      <div className="infobox-description">{description}</div>
    </div>
  );
}

export { InfoBox };

