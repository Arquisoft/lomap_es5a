import { fetch } from "@inrupt/solid-client-authn-browser";
import { User } from "../shared/shareddtypes";

/*
 * Añadir un usuario al sistema.
 *
 * @param user Usuario a añadir.
 * @returns
 */
export async function addUser(user: User): Promise<boolean> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  const response = await fetch(apiEndPoint + "/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: user.name, email: user.email }),
  });

  if (response.status === 200) return true;
  else return false;
}

/**
 * Obtener todos los usuarios del sistema.
 *
 * @returns
 */
export async function getUsers(): Promise<User[]> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  const response = await fetch(apiEndPoint + "/users/list");
  //The objects returned by the api are directly convertible to User objects
  return response.json();
}