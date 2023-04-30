import { Friend } from "../../shared/shareddtypes";


const friends: Friend[] = [];
const getFriends = () => {
    
    for (let i = 0; i < 2; i++) {
        const friend: Friend = {
            name: "name-" + i,
            webId: "webid-" + i,
            imgUrl: "imgurl-" + i
        };
        friends.push(friend);
        
    }
    
    return friends;
}

export default getFriends;
