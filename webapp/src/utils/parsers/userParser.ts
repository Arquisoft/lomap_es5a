import type { User } from "../../shared/shareddtypes";

const parseJsonToUser = (inData: any): User[] => {
  let resUsers: User[] = [];
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
const parseJsonToUserItem = (inData: any): User => {
  const { name, email, _id, webId } = inData;
  let newFriend: User = {
    name,
    email,
    _id,
    webId,
  };
  return newFriend;
};

export { parseJsonToUser, parseJsonToUserItem };
