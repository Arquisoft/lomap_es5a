import { User } from "../shared/shareddtypes";
import { IPoint } from "../../../restapi/models/point.model";
import { IOpinion } from "../../../restapi/models/opinion.model";

export async function addUser(user: User): Promise<boolean> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  let response = await fetch(apiEndPoint + "/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: user.name, email: user.email }),
  });
  if (response.status === 200) return true;
  else return false;
}

export async function getUsers(): Promise<User[]> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  let response = await fetch(apiEndPoint + "/users/list");
  //The objects returned by the api are directly convertible to User objects
  return response.json();
}

export async function findAllPointsByUser(webId: string) {
  //const apiEndPoint = process.env.REACT_APP_API_URI;
  const apiEndPoint = "http://localhost:5001/point";

  let response = await fetch(apiEndPoint + "/findall/" + webId, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function findPointById(idPoint: string) {
  const apiEndPoint = process.env.REACT_APP_API_URI;

  let response = await fetch(apiEndPoint + "/find/" + idPoint, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}

export async function editPointById(idPoint: string, body: any) {
  const apiEndPoint = process.env.REACT_APP_API_URI;

  let response = await fetch(apiEndPoint + "/find/" + idPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  return response.json();
}

export async function addPoint(point: IPoint) {
  const apiEndPoint = process.env.REACT_APP_API_URI;

  let response = await fetch(apiEndPoint + "/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token") as string,
    },
    body: JSON.stringify(point),
  });
  return response.status === 201;
}

export async function deletePoint(idPoint: string): Promise<boolean> {
  const apiEndPoint = process.env.REACT_APP_API_URI;
  let response = await fetch(apiEndPoint + "/delete/" + idPoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token") as string,
    },
  });
  return response.status === 200;
}

export async function likesPoint(idPoint: string, webId: string) {
  const apiEndPoint = process.env.REACT_APP_API_URI;
  let response = await fetch(apiEndPoint + "/review/" + idPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(webId),
  });
  return response.status === 200;
}
