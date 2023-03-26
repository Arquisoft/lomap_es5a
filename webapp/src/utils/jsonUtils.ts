import type { Point, User, UserGroup } from "../shared/shareddtypes";

const convertToJSON = (obj: Point | User | UserGroup): string => {
    return JSON.parse(JSON.stringify(obj));
}

export {
    convertToJSON,
}