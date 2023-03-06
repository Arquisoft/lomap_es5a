import {
    getSolidDataset,
    getThing,
    getStringNoLocale,
    getUrlAll,
    Thing,
    getUrl,
    removeUrl,
    buildThing,
    createThing,
    saveSolidDatasetAt,
    setThing,
    removeThing,
  } from "@inrupt/solid-client";
  
  import { fetch } from "@inrupt/solid-client-authn-browser";

  import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

  async function getProfile(webId:string) {
    var profileUri = webId.split('#')[0];
    var dates = await getSolidDataset(profileUri);
    return getThing(dates,webId) as Thing;
  } 

  export {getProfile}