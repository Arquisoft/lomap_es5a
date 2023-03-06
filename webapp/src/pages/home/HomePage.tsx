import { useEffect } from "react";
import { getUserDatasetByWebId } from "src/helpers/AuthHelper";
import { Link } from "react-router-dom";
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
import{getProfile} from "src/helpers/SolidHelper"
function HomePage() {
  
  const loadProfile = async () => {
    const data = await getUserDatasetByWebId("https://id.inrupt.com/uo270160");
    console.log(data); 
  };


  useEffect(() => {
    loadProfile;
  }, []);

  return (
    <div>
      <p>Home</p>
      <Link to="/login">Iniciar sesión</Link>
      {/* <p>Email: {name}</p>
      <p>WebID: {webId}</p>
      <p>Nombre: {FOAF.name.iri.value}</p> */}
    </div>
  );
}

export default HomePage;
