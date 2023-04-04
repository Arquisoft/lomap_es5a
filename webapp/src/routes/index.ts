// Rutas de la aplicacion
const BASE_PATH: string = "http://localhost:3000";

// Pagina de inicio
const HOME_PATH: string = "/";

// Autenticacion
const LOGIN_PATH: string = "/login";
const SIGNUP_PATH: string = "/create-account";

// Cuenta personal del usuario en sesion
const ACCOUNT_PATH: string = "/account";

// Listado de amigos
const FRIENDS_PATH: string = "/friends";

// Listado de todos los puntos registrados en la aplicacion
const GENERAL_POINT_PATH: string = "/points";

// Página de detalle de un punto de interés especifico
const SINGLE_POINT_PATH: string = ":pointId";

// Puntos de interes guardados por el ususario en sesion
const SAVED_POINTS_PATH: string = "/saved";

//Crear un punto nuevo
const CREATE_POINT_PATH: string ="/account/create-point";

// Editar perfil y ajustes generales de la cuenta
const SETTINGS_PATH: string = "/account/settings";

// Página de acerca de
const ABOUT_PATH: string = "/about";

// Preguntas frecuentes
const FAQ_PATH: string = "/faq";

export {
  BASE_PATH,
  HOME_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  ACCOUNT_PATH,
  FRIENDS_PATH,
  SAVED_POINTS_PATH,
  ABOUT_PATH,
  FAQ_PATH,
  SETTINGS_PATH,
  GENERAL_POINT_PATH,
  SINGLE_POINT_PATH,
  CREATE_POINT_PATH
};
