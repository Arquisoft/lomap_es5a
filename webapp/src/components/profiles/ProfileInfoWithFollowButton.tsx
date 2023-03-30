
import "../../public/css/components/profiles/ProfileInfoWithFollowButton.scss";
import { ProfileInfoWithFollowButtonProps } from "../../shared/shareddtypes";

 function ProfileInfoWithFollowButton({name, imageUrl, webId}: ProfileInfoWithFollowButtonProps) {
  
  const handleFollow = () => {
    console.log('Followed', webId);
  }
  
  return (
    <div className='profile-image-with-follow-container'>
        <div className='profile-image-with-follow-container__avatar'>
            <img src={imageUrl} alt={name} />
        </div>
        <div className='profile-image-with-follow-container__details'>
            <p>{name}</p>
            <button onClick={handleFollow}>Seguir</button>
        </div>
    </div>
  )
}

export default ProfileInfoWithFollowButton;
