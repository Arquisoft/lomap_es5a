import "../../public/css/components/profiles/BaseProfileItem.scss";
import NoImageSkeleton from "../skeletons/NoImageSkeleton";

type Props = {
  profileImage: string;
  name: string;
  email: string;
};

function BaseProfileItem({ profileImage, name, email }: Props) {
  return (
    <div className="base-profile-item-container">
      {
        profileImage ? 
        <img src={profileImage} alt="" />
        : <NoImageSkeleton isRound={true}/>

      }
      <div className="base-profile-item__details">
        <p className="base-profile-item-details__name">{name}</p>
        <p className="base-profile-item-details__email">{email}</p>
      </div>
    </div>
  );
}

export default BaseProfileItem;
