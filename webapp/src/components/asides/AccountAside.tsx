import TopAccountAside from "./accountAside/TopAccountAside"
import BottomAccountAside from "./accountAside/BottomAccountAside"
import "../../public/css/components/asides/AccountAside.css"

function AccountAside(){
    return(
        <div className="account-aside-main">
            <div className="account-aside-top">
                <TopAccountAside />
            </div>
            <div className="account-aside-bottom">
                <BottomAccountAside />
            </div>

        </div>
    )
        
}

export default AccountAside