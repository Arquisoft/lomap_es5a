import "../../../../public/css/components/asides/accountAside/topAccountAside/TopAsideButton.css"


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
            <div className="aside-button-text">
                {text}
            </div>
        </div>
    )
}

export default TopAsideButton