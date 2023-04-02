import "../../../../public/css/components/asides/accountAside/topAccountAside/TopAsideButton.css"
import IconButton from "../../../buttons/IconButton";

type Props = {
    icon: React.ReactNode;
    text: string;
    onClick?: (e: any) => void;
  };


function TopAsideButton({icon,text, onClick}:Props){
    return(
        <div className="aside-button-main">
            <div className="aside-button-logo">
                {icon}
            </div>
            <button className="aside-button-text" onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default TopAsideButton