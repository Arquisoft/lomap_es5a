import { useSession } from "@inrupt/solid-ui-react";
import { SyntheticEvent } from "react";
import { addReviewPoint } from "../../api/point.api";
import { CheckRoundedIcon, CloseIcon } from "../../helpers/IconContants";
import "../../public/css/components/popups/addNewReview/AddNewReviewToPointPopup.scss";
import { Point } from "../../shared/shareddtypes";
import { usePointReviewStore } from "../../store/review.store";
import BaseButton from "../buttons/BaseButton";
import BaseTextArea from "../inputs/BaseTextArea";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseStarRating from "../stars/BaseStarRating";
import { generateUUID } from "../../utils/stringUtils";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../routes";

type SuccessReviewPopupSectionProps = {
  handleOnClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function SuccessReviewPopupSection({
  handleOnClick,
}: SuccessReviewPopupSectionProps) {
  return (
    <div className="add-new-review-point-popup__success-review" role="review">
      <CheckRoundedIcon className="add-new-review-point-popup-success__icon" />
      <h2>Valoración publicada !</h2>
      <p>Gracias por tu aportación</p>
      <BaseButton
        type="button-black"
        text="Continuar"
        onClick={(e) => handleOnClick(e)}
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
    resetReview,
  } = usePointReviewStore();

  const { session } = useSession();

  const handleClosePopup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsReviewPublished(false);
    setIsSendingReview(false);
    setShowAddReviewPopup(false);
  };

  const navigate = useNavigate();

  const handleClosePopupAfterSave = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsReviewPublished(false);
    setIsSendingReview(false);
    setShowAddReviewPopup(false);
    navigate(HOME_PATH)
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
      review._id = generateUUID();
      if(session.info.webId){
        review.reviewer.webId = session.info.webId;
      }
      setIsReviewPublished(false);
      setIsSendingReview(true);

      addReviewPoint(pointInfo._id, review, session.info.webId as string).then(
        (err: any) => {
          if (!err) {
            setIsSendingReview(false);
            setIsReviewPublished(true);
            resetReview();
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
      <div className="add-new-review-point-popup__body" role="body">
        {isReviewPublished ? (
          <SuccessReviewPopupSection
            handleOnClick={(e: any) => handleClosePopupAfterSave(e)}
          />
        ) : (
          <>
            <h2>Añadir una valoración</h2>
            <h3>Puntuación para el punto de interés</h3>

            <form action="#">
              <BaseStarRating
                data-testid="basestarrating"
                rating={review.rating}
                handleChangeRating={(e, value) => handleChangeRating(e, value)}
              />
              <div className="add-new-review-form__form-group">
                <BaseTextInput
                  data-testid="basestarinput"
                  label="Título"
                  name="title"
                  type="text"
                  onChange={handleChangeReview}
                  placeholder="Resumen de la valoración"
                />
                <span>Máximo 100 caracteres</span>
              </div>
              <div className="add-new-review-form__form-group" role="form-group">
                <BaseTextArea
                  label="¿Qué te ha parecido?"
                  name="comment"
                  onChange={handleChangeReview}
                  placeholder="Explica al resto de usuarios tu experiencia y detalles del punto de interés"
                />
                <span>Máximo 500 caracteres</span>
              </div>
              <BaseButton
                data-testid = "button-base"
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
