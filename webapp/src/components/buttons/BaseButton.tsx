import "../../public/css/components/buttons/BaseButton.scss";

type Props = {
  type: string;
  mode: string;
}

function BaseButton({ ...props }) {
  return (
    <button className={`${props.type} ${props.mode}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default BaseButton;
