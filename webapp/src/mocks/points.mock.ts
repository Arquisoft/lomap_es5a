import { Category, Point } from "../shared/shareddtypes";

const points: Point[] = [];
const getPoints = (): Point[] => {
  for (let i = 0; i < 5; i++) {
    points.push({
      _id: `${i}__`,
      name: `name${i}__}`,
      description: "c",
      location: {
        address: "c",
        postalCode: 0,
        city: "c",
        country: "c",
        coords: {
          lat: 42,
          lng: -4,
        },
      },
      owner: {
        webId: "c",
        name: "c",
        imageUrl: "c",
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
