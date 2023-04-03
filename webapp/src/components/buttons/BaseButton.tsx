import "../../public/css/components/buttons/BaseButton.scss";
import spinner from "../../public/images/spinner_1.gif";

type Props = {
  type: string;
  text: string;
  title?: string;
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
  onClick,
}: Props) {
  return (
    <button className={`${isLoading ? 'button-disabled' : type}`} onClick={onClick} disabled={isLoading} style={styles} title={title}>
      {isLoading ? <p>{loadingText || "Cargando..."}</p> : isFinished ? <p>Finalizado</p> : text}
    </button>
  );
}

export default BaseButton;
