import {
  getFile
} from "@inrupt/solid-client";


import { fetch } from "@inrupt/solid-client-authn-browser";

const getAllFriends = async () => {
  const profileDocumentURI = encodeURI(
    `https://pruebasolid1.inrupt.net/profile/card#me`
  );

  try {
    const file = await getFile(profileDocumentURI, { fetch: fetch });
    console.log(await file.text());
  } catch (err) {
    console.error(err);
  }
};

export { getAllFriends };

