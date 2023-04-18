
import "../../../public/css/components/banners/pointDetail/SinglePointDetailBanner.scss";

type Props = {
  pointImage?: string;
}

 function SinglePointDetailBanner({pointImage}: Props) {
  return (
    <div className="single-point-detail-banner" role="single-point-banner">
        {/* <MiniMap
            position={[50.85119149087381, 4.3544687591272835]}
            styles={{
              width: "100%",
              height: "350px",
              borderRadius: "20px",
            }}
          /> */}
        <img src={pointImage || ""} alt=""/>
    </div>
  )
}

export default SinglePointDetailBanner;
