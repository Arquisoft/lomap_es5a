import React from "react";
import "../../public/css/components/buttons/BaseButton.scss";

type Props = {
  type: string;
  text: string;
  title?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  isFinished ?: boolean;
  styles?: React.CSSProperties;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function BaseButton({
  type = "button-blue",
  text,
  isLoading,
  loadingText,
  isFinished,
  title,
  styles,
  disabled,
  onClick,
}: Props) {
  return (
    <button className={`${isLoading ? 'button-disabled' : type}`} onClick={onClick} disabled={isLoading || disabled} style={styles} title={title}>
      {isLoading ? <p>{loadingText || "Cargando..."}</p> : (isFinished ? <p>Finalizado</p> : text)}
    </button>
  );
}

export default BaseButton;
