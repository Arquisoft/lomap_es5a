import "../../public/css/components/profiles/ProfileInfoWithFollowButton.scss";
import { ProfileInfoWithFollowButtonProps } from "../../shared/shareddtypes";
import NoImageSkeleton from "../skeletons/NoImageSkeleton";

 function ProfileInfoWithFollowButton({name, imageUrl, webId}: ProfileInfoWithFollowButtonProps) {
  
  const handleFollow = () => {
    console.log('Followed', webId);
  }
  
  return (
    <div className='profile-image-with-follow-container'>
        <div className='profile-image-with-follow-container__avatar'>
          {
            imageUrl ? <img src={imageUrl} alt={name} /> : <NoImageSkeleton isRound={true} />
          }
        </div>
        <div className='profile-image-with-follow-container__details'>
            <p>{name || "Anónimo"}</p>
            <button onClick={handleFollow}>Seguir</button>
        </div>
    </div>
  )
}

export default ProfileInfoWithFollowButton;
