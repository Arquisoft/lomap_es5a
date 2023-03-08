
import "../../public/css/components/profiles/ProfileInfoWithFollowButton.scss";

 function ProfileInfoWithFollowButton() {
  return (
    <div className='profile-image-with-follow-container'>
        <div className='profile-image-with-follow-container__avatar'>
            <img src="https://minimaltoolkit.com/images/randomdata/female/29.jpg" alt="" />
        </div>
        <div className='profile-image-with-follow-container__details'>
            <p>Lucía Fernández</p>
            <button>Seguir</button>
        </div>
    </div>
  )
}

export default ProfileInfoWithFollowButton;
