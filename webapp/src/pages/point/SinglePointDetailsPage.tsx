
import { useSession } from "@inrupt/solid-ui-react";
import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AddNewPointLink from "../../components/points/details/AddNewPointLink";
import PointReviewSection from "../../components/points/details/PointReviewSection";
import ReviewListing from "../../components/points/details/ReviewListing";
import SingleDetail from "../../components/points/details/SingleDetails";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";
import { useNavigate } from "react-router-dom";
import { deletePoint } from "../../api/point.api";
import { HOME_PATH } from "../../routes";
import IconButton from "../../components/buttons/IconButton";
import { deleteSharedPointForFriend } from "../../api/share.point.api";

function SinglePointDetailsPage() {
  const { getPointDetails, pointToShow } = usePointDetailsStore();
  const { session } = useSession();
  const navigate = useNavigate();

  const handleDeletePoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //Comprobamos si somos el Owner
    if(pointToShow.isOwner == true){
      const webId = pointToShow.owner.webId;
      const idPoint = pointToShow._id;
      //Eliminamos el punto nuestro
      await deletePoint(idPoint,webId);
      //Eliminamos el punto con los amigos
      pointToShow.friends.forEach( e => deleteSharedPointForFriend(session,e.webId,idPoint)); 
      //Vamos a la vista Home
      navigate(HOME_PATH);
    }
    return;
  };
  console.log(pointToShow);
  return (

    

    <AuthenticatedLayout>
      <div className="single-point-details-container" id="point-details-page">
        <SinglePointDetailBanner
          pointImage={getPointDetails()?.image?.url}
          coords={getPointDetails().location.coords}
        />
        <section className="single-point-details__details">
          <SingleDetail pointToShow={getPointDetails()} />
        </section>

        <section className="single-point-details__delete">
          <IconButton type="button-red-form" text="Eliminar" muaIconName="delete" handleClick={handleDeletePoint} />
        </section>

        {pointToShow?.reviews && pointToShow?.reviews?.length > 0 && (
          <section className="single-point-details__reviews">
            <PointReviewSection pointToShow={getPointDetails()} />
          </section>
        )}

        {session.info.webId !== getPointDetails()?.owner?.webId && (
          <section className="single-point-details__addReview">
            <AddNewPointLink pointToShow={getPointDetails()} />
          </section>
        )}
        <section className="single-point-details__reviewListing">
          <ReviewListing />
        </section>
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
