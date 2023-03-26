import MiniMap from "../../maps/MiniMap";
import "../../../public/css/components/banners/pointDetail/SinglePointDetailBanner.scss";

 function SinglePointDetailBanner() {
  return (
    <div className="single-point-detail-banner">
        <MiniMap
            position={[50.85119149087381, 4.3544687591272835]}
            styles={{
              width: "100%",
              height: "350px",
              borderRadius: "20px",
            }}
          />
        <img src="https://images.unsplash.com/photo-1640276380950-9fad7f2aba89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3ZpZWRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
    </div>
  )
}

export default SinglePointDetailBanner;
