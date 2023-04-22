import "../../../../../public/css/components/points/details/review/single/UserComp.css"

type Props = {
    urlImage?:string,
    name?:string
}

function UserComp(user:Props){
    return(
        <div className="user-comp-container" role="container">
            <img src={user.urlImage} width={32} height={32}/> {user.name}
        </div>
    )
}

export default UserComp