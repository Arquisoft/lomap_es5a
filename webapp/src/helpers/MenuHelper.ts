import {
    ABOUT_PATH, ACCOUNT_PATH,
    FRIENDS_PATH,
    HOME_PATH,
    LOGIN_PATH,
    SAVED_POINTS_PATH,
    SIGNUP_PATH
} from "src/routes";

/**
 * @param alias: Identificador único, por motivos de acceso al menu.
 * @param name: Nombre a mostrar en la interfaz.
 * @param url: El atributo url hace referencia a la URL destino, definido en /routes/index.ts
 * @param show: Indicar a false si se desea ocultar del menú.
 */
type MenuItem = {
  alias: string;
  name: string;
  url: string;
  show?: boolean;
};

let menuItems: MenuItem[] = [
  {
    alias: "home",
    name: "Inicio",
    url: HOME_PATH,
    show: true,
  },
  {
    alias: "saved",
    name: "Guardados",
    url: SAVED_POINTS_PATH,
    show: true,
  },
  {
    alias: "friends",
    name: "Amigos",
    url: FRIENDS_PATH,
    show: true,
  },
  {
    alias: "about",
    name: "Acerca de",
    url: ABOUT_PATH,
    show: true,
  },
  {
    alias: "signIn",
    name: "Iniciar sesión",
    url: LOGIN_PATH,
    show: false,
  },
  {
    alias: "signUp",
    name: "Crear una cuenta",
    url: SIGNUP_PATH,
    show: false,
  },
  {
    alias: "account",
    name: "Mi Cuenta",
    url: ACCOUNT_PATH,
    show: false,
  },
];

export { menuItems };

