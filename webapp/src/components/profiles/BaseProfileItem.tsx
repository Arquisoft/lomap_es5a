import "../../public/css/components/profiles/BaseProfileItem.scss";

type Props = {
  profileImage: string;
  name: string;
  email: string;
};

function BaseProfileItem({ profileImage, name, email }: Props) {
  return (
    <div className="base-profile-item-container">
      <img src={profileImage} alt="" />
      <div className="base-profile-item__details">
        <p className="base-profile-item-details__name">{name}</p>
        <p className="base-profile-item-details__email">{email}</p>
      </div>
    </div>
  );
}

export default BaseProfileItem;
