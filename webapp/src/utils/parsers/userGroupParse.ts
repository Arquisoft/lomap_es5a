import type { PointSummary, User, UserGroup } from "../../shared/shareddtypes";
import { parseJsonToPointSummary } from "./pointParser";
import { parseJsonToUserItem } from "./userParser";

/**
 * Transforma un objeto de tipo JSON (Array de grupos) en una listad de tipo UserGroup.
 * @param inData Fichero JSON que contiene los grupos.
 * @returns
 */
const parseJsonToUserGroup = (inData: any): UserGroup[] => {
  let newUserGroups: UserGroup[] = [];
  const { groups } = inData;

  groups.forEach((item: any) => {
    newUserGroups.push(parseJsonItemToUserGroup(item));
  });
  return newUserGroups;
};

/**
 * Transforma un objeto grupo del JSON en un objeto de tipo UserGroup.
 * @param inData
 * @returns
 */
const parseJsonItemToUserGroup = (inData: any): UserGroup => {
  if (!inData) {
    return {} as UserGroup;
  }

  const { _id, name, description, members, points, creator, createdAt } =
    inData;
  let newUserGroup: UserGroup = {
    _id,
    name,
    description,
    members: parseMembers(members),
    points: parsePoints(points),
    creator,
    createdAt: new Date(createdAt),
  };
  return newUserGroup;
};

const parseMembers = (members: any): User[] => {
  let newMembers: User[] = [];
  members.forEach((member: any) => {
    newMembers.push(parseJsonToUserItem(member));
  });
  return newMembers;
};

const parsePoints = (points: any): PointSummary[] => {
  let newPoints: PointSummary[] = [];
  points.forEach((point: any) => {
    newPoints.push(parseJsonToPointSummary(point));
  });
  return newPoints;
};

export { parseJsonToUserGroup };
