import { useSession } from "@inrupt/solid-ui-react";
import { addReviewPoint } from "../../api/point.api";
import {
  CloseIcon,
  StarRoundedIcon,
  CheckRoundedIcon,
} from "../../helpers/IconContants";
import "../../public/css/components/popups/addNewReview/AddNewReviewToPointPopup.scss";
import { usePointReviewStore } from "../../store/review.store";
import BaseButton from "../buttons/BaseButton";
import BaseTextArea from "../inputs/BaseTextArea";
import BaseTextInput from "../inputs/BaseTextInput";
import { Point } from "../../shared/shareddtypes";
import Rating from "@mui/material/Rating";
import { SyntheticEvent } from "react";

function SuccessReviewPopupSection() {
  const { setShowAddReviewPopup } = usePointReviewStore();
  const handleHidePopup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowAddReviewPopup(false);
  };

  return (
    <div className="add-new-review-point-popup__success-review">
      <CheckRoundedIcon className="add-new-review-point-popup-success__icon" />
      <h2>Valoración publicada !</h2>
      <p>Gracias por tu aportación</p>
      <BaseButton
        type="button-black"
        text="Continuar"
        onClick={(e) => handleHidePopup(e)}
      />
    </div>
  );
}

type AddNewReviewToPointPopupProps = {
  pointInfo: Point;
};

function AddNewReviewToPointPopup({
  pointInfo,
}: AddNewReviewToPointPopupProps) {
  const {
    review,
    isSendingReview,
    isReviewPublished,
    setIsSendingReview,
    setIsReviewPublished,
    setReviewProperty,
    setShowAddReviewPopup,
  } = usePointReviewStore();
  const { session } = useSession();

  const handleClosePopup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowAddReviewPopup(false);
  };

  const handleChangeReview = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReviewProperty(e.target.name, e.target.value);
  };

  /**
   * Enviar la valoración para el punto de interés
   * @param e
   */
  const handleAddNewReviewToCurrentPoint = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    if (session.info.isLoggedIn && pointInfo) {
      setIsReviewPublished(false);
      setIsSendingReview(true);
      addReviewPoint(pointInfo._id, review, session.info.webId as string).then(
        (err: any) => {
          if (!err) {
            setIsSendingReview(false);
            setIsReviewPublished(true);
          }
        }
      );
    }
  };

  /**
   * Establecer el valor de la valoración.
   */
  const handleChangeRating = (
    e: SyntheticEvent<Element, Event>,
    value: any
  ) => {
    setReviewProperty("rating", value);
  };

  return (
    <div className="add-new-review-point-popup-container" role="alertdialog">
      <div className="add-new-review-point-popup__header">
        <CloseIcon
          className="point-category-filter-popup__close-icon"
          onClick={(e: any) => handleClosePopup(e)}
        />
      </div>
      <div className="add-new-review-point-popup__body">
        {isReviewPublished ? (
          <SuccessReviewPopupSection />
        ) : (
          <>
            <h2>Añadir una valoración</h2>
            <h3>Puntuación para el punto de interés</h3>

            <form action="#">
              <Rating
                name="hover-feedback"
                value={review.rating}
                precision={0.5}
                size="large"
                onChange={(e, value) => handleChangeRating(e, value)}
                emptyIcon={
                  <StarRoundedIcon
                    style={{ opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
                icon={<StarRoundedIcon fontSize="inherit" />}
              />
              <div className="add-new-review-form__form-group">
                <BaseTextInput
                  label="Título"
                  name="title"
                  type="text"
                  onChange={handleChangeReview}
                  placeholder="Resumen de la valoración"
                />
                <span>Máximo 100 caracteres</span>
              </div>
              <div className="add-new-review-form__form-group">
                <BaseTextArea
                  label="¿Qué te ha parecido?"
                  name="comment"
                  onChange={handleChangeReview}
                  placeholder="Explica al resto de usuarios tu experiencia y detalles del punto de interés"
                />
                <span>Máximo 500 caracteres</span>
              </div>
              <BaseButton
                type={isSendingReview ? "button-disabled" : "button-black"}
                disabled={isSendingReview}
                text={isSendingReview ? "Enviando..." : "Enviar valoración"}
                onClick={(e) => handleAddNewReviewToCurrentPoint(e)}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default AddNewReviewToPointPopup;
