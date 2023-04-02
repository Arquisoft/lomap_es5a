import React from 'react'
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';

import "../../public/css/components/skeletons/no_image/NoImageSkeleton.scss"

function NoImageSkeleton() {
  return (
    <div className="no-image-skeleton-container">
          <ImageRoundedIcon style={{
            fontSize: "2rem",
            color: "#B9B9B9",
          }}/>
        </div>
  )
}

export default NoImageSkeleton;