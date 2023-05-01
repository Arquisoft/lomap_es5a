import type {
  BaseLocation,
  Friend,
  Point,
  PointSummary,
  Review,
} from "../../shared/shareddtypes";
import { Category } from "../../shared/shareddtypes";

const parseJsonToPoint = (inData: any): Point[] => {
  const newPoints: Point[] = [];
  const { points } = inData;

  points.forEach((item: any) => {
    newPoints.push(parseJsonToPointItem(item));
  });

  return newPoints;
};

/**
 * Transforma un objeto de tipo Point en un objeto de tipo Point.
 * Información de un punto de interés:
 * <code>
 * <ul>
 *    <li>name: string</li>
 *    <li>description?: string</li>
 *    <li>location: BaseLocation</li>
 *    <li>owner: string</li>
 *    <li>reviews?: Review[]</li>
 *    <li>image?: Image</li>
 *    <li>isOwner: boolean</li>
 *    <li>friends: Friend[]</li>
 *    <li>category: Category | Category.NONE</li>
 *    <li>createdAt: Date</li>
 *    <li>updatedAt: Date</li>
 * </ul>
 * </code>
 * @param inData
 * @returns
 */
const parseJsonToPointItem = (inData: any): Point => {
  const {
    _id,
    name,
    description,
    category,
    image,
    isOwner,
    reviews,
    owner,
    location,
    createdAt,
    updatedAt,
    friends,
  } = inData;

  const newPoint: Point = {
    _id,
    name,
    description,
    image,
    category: parseCategory(category),
    location: parseLocation(location),
    reviews: parseReviews(reviews),
    owner,
    isOwner,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
    friends: parseFriends(friends)
  };

  return newPoint;
};

const parseJsonToPointSummary = (inData: any): PointSummary => {
  const {
    _id,
    name,
    description,
    location,
    owner,
    image,
    category,
    isPublic,
    createdAt,
  } = inData;

  const pointSummary: PointSummary = {
    _id,
    name,
    description,
    location: parseLocation(location),
    owner,
    image,
    isPublic,
    category: checkCategory(category) ? (category as Category) : Category.NONE,
    createdAt: new Date(createdAt),
  };

  return pointSummary;
};

const checkCategory = (newCategory: string) =>
  Object.values(Category)
    .map((cat) => cat.toLocaleLowerCase())
    .includes(newCategory as Category);

const parseCategory = (newCategory: string): Category => {
  return checkCategory(newCategory) ? (newCategory as Category) : Category.NONE;
};

const parseFriends = (newFriends : any): Friend[] => {
  if(!newFriends){
    return [] as Friend[];
  }
  console.log("Friends" + newFriends);
  return newFriends.map((friend: Friend) => {

    const {webId, name, imgUrl} = friend;
    if(!webId){
      throw new Error("Must have webId");
    }
    if(!name){
      throw new Error("Must have name");
    }

    return{
      webId,
      name,
      imgUrl
    }
  })
} 

/**
 * Transforma la localización de un punto de interés en un objeto de tipo BaseLocation.
 * @param location
 * @returns
 */
const parseLocation = (location: any): BaseLocation => {
  const { coords, address, postalCode, city, country } = location;
  const { lat, lng } = coords;

  if (!coords) {
    throw new Error("Location must have coords");
  }

  return {
    coords: {
      lat: Number(lat),
      lng: Number(lng),
    },
    address,
    postalCode,
    city,
    country,
  };
};

const parseJsonToReview = (newReviews: any): Review[] => {
  const retNewReviews: Review[] = [];
  const { reviews } = newReviews;

  reviews.forEach((review: any) => {
    retNewReviews.push(parseUniqueJsonToReview(review));
  });

  return retNewReviews;
};

const parseUniqueJsonToReview = (reviews: any) : Review => {
  return reviews.map((review: Review) => {
    const { _id, reviewer, rating, title, comment, createdAt,pointId } = review;
    if (!reviewer) {
      
      throw new Error("Review must have a reviewer");
    }
    
    const { webId, imageUrl, name } = reviewer;
    return {
      _id,
      title,
      comment,
      rating,
      reviewer: {
        webId,
        name,
        imageUrl,
      },
      createdAt: new Date(createdAt),
      pointId
    }
  
  });
  
}

/**
 * Transforma las valoraciones de un punto de interés en un array de objetos de tipo Review.
 * @param reviews
 */
const parseReviews = (reviews: any) :Review[] => {
  if(!reviews){   
    return [] as Review [];
  }
  console.log(reviews);
  return reviews.map((review: Review) => {
    console.log("A veces llega??")
    const { _id, reviewer, rating, title, comment, createdAt,pointId } = review;
    
    if (!reviewer) {
      
      throw new Error("Review must have a reviewer");
    }
    
    const { webId, imageUrl, name } = reviewer;
    
    return {
      _id,
      title,
      comment,
      rating,
      reviewer: {
        webId,
        name,
        imageUrl,
      },
      createdAt: new Date(createdAt),
      pointId
    };  
  });
};

/**
 * Transforma un objeto de tipo Point en un objeto JSON.
 * @param point
 * @returns
 */
const parsePointToJson = (point: Point) => {
  const { name, description, category, isOwner, location, owner } = point;
  return {
    name,
    description,
    category,
    isOwner,
    location,
    owner,
  };
};

export { parseJsonToPoint, parsePointToJson, parseJsonToPointSummary, parseReviews, parseJsonToReview };

