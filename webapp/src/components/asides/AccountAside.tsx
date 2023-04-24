import TopAccountAside from "./accountAside/TopAccountAside"
import BottomAccountAside from "./accountAside/BottomAccountAside"
import "../../public/css/components/asides/AccountAside.css"


import { ComponentClassName } from "../../shared/shareddtypes";


function AccountAside({_className}: ComponentClassName){
    return(

        <div className={`account-aside-main ${_className}`}>

            <div className="account-aside-top" role="top">
                <TopAccountAside />
            </div>
        </div>
    )
        
}


export default AccountAside
