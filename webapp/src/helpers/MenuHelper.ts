import {
    ABOUT_PATH, ACCOUNT_PATH,
    FRIENDS_PATH,
    HOME_PATH,
    LOGIN_PATH,
    SAVED_POINTS_PATH,
    SIGNUP_PATH,
    SETTINGS_PATH,
    FAQ_PATH
} from "../routes";

/**
 * @param alias: Identificador único, por motivos de acceso al menu.
 * @param name: Nombre a mostrar en la interfaz.
 * @param url: El atributo url hace referencia a la URL destino, definido en /routes/index.ts
 * @param show: Indicar a false si se desea ocultar del menú.
 * @param parent: Nombre del componente padre (Menu nivel 1).
 * @param muiName: Nombre del icono dentro de MUI {@link https://mui.com/material-ui/material-icons/}
 * @param order: Cuanto más pequeño el valor, más arriba del menu estará el elemento.
 */
type MenuItem = {
  alias: string;
  name: string;
  url?: string;
  show?: boolean;
  parent?: string;
  muiName?: string;
  order?: number;
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
  // Menu Items de account (Nav)
  {
    alias: "show_profile",
    name: "Ver perfil",
    parent: "account",
    url: ACCOUNT_PATH,
    muiName: "person_rounded",
    order: 0
  },
  {
    alias: "settings",
    name: "Ajustes",
    parent: "account",
    url: SETTINGS_PATH,
    muiName: "settings_rounded",
    order: 1
  },
  {
    alias: "faq",
    name: "Preguntas frecuentes",
    parent: "account",
    url: FAQ_PATH,
    muiName: "help_outline_rounded",
    order: 2
  },
  {
    alias: "logout",
    name: "Cerrar sesión",
    parent: "account",
    muiName: "logout_rounded",
    order: 3
  },
];

export { menuItems };

