import { Rating } from "@mui/material";
import { StarRoundedIcon } from "../../helpers/IconContants";

type BaseStarRatingProps = {
  rating: any;
  handleChangeRating?: (e: any, value: number | null) => void;
};

function BaseStarRating({ rating, handleChangeRating }: BaseStarRatingProps) {

  return (
    <Rating
      name="hover-feedback"
      value={rating}
      precision={0.5}
      size="large"
      onChange={(e, value) => handleChangeRating&& handleChangeRating(e, value)}
      emptyIcon={
        <StarRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" />
      }
      icon={<StarRoundedIcon fontSize="inherit" />}
    />
  );
}

export default BaseStarRating;
