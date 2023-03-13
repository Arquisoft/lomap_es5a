import "../../../../public/css/components/asides/accountAside/topAccountAside/TopAsideButton.css"
import IconButton from "src/components/buttons/IconButton";

type Props = {
    icon: React.ReactNode;
    text: string;
  };


function TopAsideButton({icon,text}:Props){
    return(
        <div className="aside-button-main">
            <div className="aside-button-logo">
                {icon}
            </div>
            <button className="aside-button-text">
                {text}
            </button>
        </div>
    )
}

export default TopAsideButton