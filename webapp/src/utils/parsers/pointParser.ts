import type {
  BaseLocation,
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
 *    <li>isPublic: boolean</li>
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
    isPublic,
    reviews,
    owner,
    location,
    createdAt,
    updatedAt,
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
    isPublic,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
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

/**
 * Transforma las valoraciones de un punto de interés en un array de objetos de tipo Review.
 * @param reviews
 */
const parseReviews = (reviews: any) => {
  return reviews.map((review: Review) => {
    const { _id, reviewer, rating, comment, createdAt } = review;

    if (!reviewer) {
      throw new Error("Review must have a reviewer");
    }

    const { webId, imageUrl } = reviewer;

    return {
      _id,
      reviewer: {
        webId,
        imageUrl,
      },
      rating,
      comment,
      createdAt: new Date(createdAt),
    };
  });
};

/**
 * Transforma un objeto de tipo Point en un objeto JSON.
 * @param point
 * @returns
 */
const parsePointToJson = (point: Point) => {
  const { name, description, category, isPublic, location, owner } = point;
  return {
    name,
    description,
    category,
    isPublic,
    location,
    owner,
  };
};

export { parseJsonToPoint, parsePointToJson, parseJsonToPointSummary };

