// Rutas de la aplicacion
const BASE_PATH = "http://localhost:3000";

// Pagina de inicio
const HOME_PATH = "/";

// Autenticacion
const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/create-account";

// Cuenta personal del usuario en sesion
const ACCOUNT_PATH = "/account";

// Listado de amigos
const FRIENDS_PATH = "/friends";

// Listado de todos los puntos registrados en la aplicacion
const GENERAL_POINT_PATH = "/points";

// Página de detalle de un punto de interés especifico
const SINGLE_POINT_PATH = ":pointId";

// Puntos de interes guardados por el ususario en sesion
const SAVED_POINTS_PATH = "/saved";

//Crear un punto nuevo
const CREATE_POINT_PATH ="/account/create-point";

// Editar perfil y ajustes generales de la cuenta
const SETTINGS_PATH = "/account/settings";

// Página de acerca de
const ABOUT_PATH = "/about";

// Preguntas frecuentes
const FAQ_PATH = "/faq";

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
