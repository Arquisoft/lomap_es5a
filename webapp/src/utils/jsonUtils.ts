import type { Point, User, UserGroup } from "../shared/shareddtypes";

const convertToJSON = (obj: Point | User | UserGroup): string => {
    return JSON.stringify(obj);
}

export {
    convertToJSON,
}