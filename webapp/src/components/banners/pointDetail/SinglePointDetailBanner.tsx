
import "../../../public/css/components/banners/pointDetail/SinglePointDetailBanner.scss";
import MiniMap from "../../maps/MiniMap";

type Props = {
  pointImage?: string;
  coords: {
    lat: number,
    lng: number
  }
}

 function SinglePointDetailBanner({pointImage, coords}: Props) {
  return (
    <div className="single-point-detail-banner">
        <MiniMap
            position={[coords.lat, coords.lng]}
            styles={{
              width: "100%",
              height: "350px",
              borderRadius: "20px",
            }}
          />
        <img src={pointImage || ""} alt=""/>
    </div>
  )
}

export default SinglePointDetailBanner;
