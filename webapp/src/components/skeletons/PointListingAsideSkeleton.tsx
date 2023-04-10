import React from 'react';
import Skeleton from 'react-loading-skeleton';
import "../../public/css/components/skeletons/points/PointListingAsideSkeleton.scss";

function SinglePointSummarySkeleton(){
    return (
    <div className='single-point-summary'>
        <Skeleton width={48} height={48} style={{
            borderRadius: "10px"
        }}/>
        <div className='single-point-summary__details'>
            <Skeleton width={100} duration={2}/>
            <Skeleton width={60} duration={4}/>
        </div>
    </div>
    );
}

 function PointListingAsideSkeleton() {
  return (
    <div className='point-listing-skeleton'>
        <div className='point-listing-skeleton__head'>
            <Skeleton width={200} height={20} duration={2}/>
            <Skeleton width={60} height={20} duration={3}/>
        </div>
        <div className='point-listing-skeleton__body'>
            <SinglePointSummarySkeleton />
            <SinglePointSummarySkeleton />
            <SinglePointSummarySkeleton />
            <SinglePointSummarySkeleton />
        </div>
    </div>
  )
}

export default PointListingAsideSkeleton;
