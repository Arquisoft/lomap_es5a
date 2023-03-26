import type { BaseLocation, Point, Review } from "../../shared/shareddtypes";
import { Category } from "../../shared/shareddtypes";

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
const parseJsonToPoint = async (inData: any): Promise<Point> => {
  const {
    name,
    description,
    category,
    isPublic,
    reviews,
    owner,
    location,
    createdAt,
    updatedAt,
  } = inData;

  let newPoint: Point = {
    name,
    description,
    category: checkCategory(category) ? (category as Category) : Category.NONE,
    isPublic,
    location: parseLocation(location),
    owner,
    reviews: parseReviews(reviews),
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };

  return newPoint;
};

const checkCategory = (category: string) => category in Category;

/**
 * Transforma la localización de un punto de interés en un objeto de tipo BaseLocation.
 * @param location
 * @returns
 */
const parseLocation = (location: any): BaseLocation => {
  const { coords, address, postalCode, city, country } = location;
  const { lat, lng } = coords;
  return {
    coords: {
      lat,
      lng,
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

export { parseJsonToPoint };
