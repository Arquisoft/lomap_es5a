import "../../public/css/components/buttons/BaseButton.scss";
import spinner from "../../public/images/spinner_1.gif";

type Props = {
  type: string;
  mode?: string;
  text: string;
  isLoading?: boolean;
  loadingText?: string;
  isFinished ?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function BaseButton({
  type = "button-blue",
  mode,
  text,
  isLoading,
  loadingText,
  isFinished,
  onClick,
}: Props) {
  return (
    <button className={`${isLoading ? 'button-disabled' : type}`} onClick={onClick} disabled={isLoading}>
      {isLoading ? <p>{loadingText || "Cargando..."}</p> : isFinished ? <p>Finalizado</p> : text}
    </button>
  );
}

export default BaseButton;
