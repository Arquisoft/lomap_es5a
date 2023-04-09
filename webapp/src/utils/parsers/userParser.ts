import type { JSONValue, User } from "../../shared/shareddtypes";

const parseJsonToUser = (inData: any): User[] => {
  const resUsers: User[] = [];
  const { users } = inData;

  users.forEach((item: any) => {
    resUsers.push(parseJsonToUserItem(item));
  });

  return resUsers;
}

/**
 * Transforma un objeto de tipo JSON en un objeto de tipo User.
 * @param inData
 * @returns
 */
const parseJsonToUserItem = (inData: User): User => {
  const { name, email, _id, webId }= inData;
  const newFriend: User = {
    name,
    email,
    _id,
    webId,
  };
  return newFriend;
};

export { parseJsonToUser, parseJsonToUserItem };
