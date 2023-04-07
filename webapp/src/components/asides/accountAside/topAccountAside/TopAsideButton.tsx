import Icon from "@mui/material/Icon";
import "../../../../public/css/components/asides/accountAside/topAccountAside/TopAsideButton.css";

type Props = {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

function TopAsideButton({ icon, text, isActive, onClick }: Props) {
  return (
    <div className={`aside-button-container ${isActive ? 'aside-button-container--active' : ''}`} onClick={onClick}>
      <Icon sx={{ fontSize: 24 }}>{icon}</Icon>
      <p>{text}</p>
    </div>
  );
}

export default TopAsideButton;
