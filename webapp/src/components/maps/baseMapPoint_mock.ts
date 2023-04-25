import { Category, Point } from "../../shared/shareddtypes";

const points: Point[] = [];
const getPoints = (): Point[] => {
  for (let i = 0; i < 2; i++) {
    points.push({
      _id: `${i}__`,
      name: `name_base_map_${i}__}`,
      description: "d",
      location: {
        address: "d",
        postalCode: 0,
        city: "d",
        country: "d",
        coords: {
          lat: 41,
          lng: -4,
        },
      },
      owner: {
        webId: "d",
        name: "d",
        imageUrl: "d",
      },
      reviews: [],
      friends: [],
      isOwner: false,
      image: {
        url: "c",
        alt: "c",
      },
      category: "none" as Category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return points;
};

export default getPoints;
