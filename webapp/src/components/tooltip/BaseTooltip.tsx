import React from "react";
import "../../public/css/components/tooltips/BaseTooltip.scss";

enum TooltipPosition {
  Top,
  Bottom,
  Left,
  Right,
}

/**
 * @param children: Elemento a incluir el tooltip.
 * @param text: Contenido textual del tootip.
 * @param pos: Posición del tooltip con respecto al elemento donde se situará.
 */
type Props = {
  children: React.ReactNode;
  text: string;
  pos?: TooltipPosition;
};

function BaseTooltip({ children, text }: Props) {
  return (
    <div className="base-tooltip">
      <span className="base-tooltip__content">{text}</span>
      {children}
    </div>
  );
}

export default BaseTooltip;
