import "../../public/css/components/asides/AccountAside.css";
import TopAccountAside from "./accountAside/TopAccountAside";


import { ComponentClassName } from "../../shared/shareddtypes";
import BottomAccountAside from "./accountAside/BottomAccountAside";


function AccountAside({_className}: ComponentClassName){
    return(

        <div className={`account-aside-main ${_className}`}>

            <div className="account-aside-top" role="top">
                <TopAccountAside />
                <BottomAccountAside/>
            </div>
        </div>
    )
        
}


export default AccountAside
