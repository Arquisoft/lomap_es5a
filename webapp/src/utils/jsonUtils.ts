import type { Point, User, UserGroup } from "../shared/shareddtypes";

const convertToJSON = (obj: Point | User | UserGroup): string => {
  return JSON.parse(JSON.stringify(obj));
};

const convertArrToJSON = (
    arr: Point[] | User[] | UserGroup[],
    rootName: string): string => {
    return JSON.parse(
        !rootName
        ? JSON.stringify(arr)
        : JSON.stringify({
        rootName: arr,
    }));
    };

export {
    convertToJSON, convertArrToJSON
}
