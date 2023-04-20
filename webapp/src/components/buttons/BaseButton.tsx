import React from "react";
import "../../public/css/components/buttons/BaseButton.scss";

type Props = {
  type: string;
  text: string;
  title?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  isFinished?: boolean;
  styles?: React.CSSProperties;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function BaseButton({
  type,
  text,
  isLoading,
  loadingText,
  isFinished,
  title,
  styles,
  disabled,
  onClick,
}: Props) {
  const buttonText = () => {
    if (isLoading) {
      return loadingText || "Cargando...";
    }
    if (isFinished) {
      return "Finalizado";
    }
    return text;
  };
  
  return (
    <button
      data-testid="button"
      className={`${isLoading ? "button-disabled" : type}`}
      onClick={onClick}
      disabled={isLoading || disabled}
      style={styles}
      title={title}
    >
      {buttonText()}
    </button>
  );
}

export default BaseButton;
