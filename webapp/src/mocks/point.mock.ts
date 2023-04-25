import { Category, Point } from "../shared/shareddtypes";

const getPoint = (): Point => ({
  _id: "c",
  name: "name",
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
  image: {
    url: "c",
    alt: "c",
  },
  friends: [],
  isOwner: false,
  category: "none" as Category,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export default getPoint;
