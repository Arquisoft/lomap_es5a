import "../../public/css/components/buttons/BaseButton.scss";

type Props = {
  type: string;
  mode?: string;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function BaseButton({ type = "button-blue", mode, text, onClick }: Props) {
  return (
    <button className={`${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default BaseButton;
