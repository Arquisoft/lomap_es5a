import "../../public/css/components/messages/BaseMessage.scss";

type Props = {
  text: string;
  type: string;
};

function BaseMessage({ text, type }: Props) {
  const types = {
    error: "base-message__error",
    success: "base-message__success",
  };

  return (
    <div
      className={`base-message-container ${
        Object.entries(types).filter((t) => t[0] === type)[0][1]
      }`}
    >
      <span>{text}</span>
    </div>
  );
}

export default BaseMessage;
