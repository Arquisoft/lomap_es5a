import { Point, Review, User } from "../shared/shareddtypes";
import {
  saveFileInContainer,
  getFile,
  overwriteFile,
  fromRdfJsDataset,
} from "@inrupt/solid-client";

import { FOAF} from "@inrupt/vocab-common-rdf";

import { fetch } from "@inrupt/solid-client-authn-browser";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import { convertArrToJSON } from "../utils/jsonUtils";
import * as jsonld from 'jsonld';

const getAllFriends = async () => {
  let profileDocumentURI = encodeURI(
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
