import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  FRIENDS_PATH,
  HOME_PATH,
  LOGIN_PATH,
  SAVED_POINTS_PATH,
  SIGNUP_PATH,
  SETTINGS_PATH,
  FAQ_PATH,
  CREATE_POINT_PATH,
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

const MENU_ITEMS_ALIAS = {
  HOME: "home",
  SAVED: "saved",
  FRIENDS: "friends",
  ADD_POINT: "add-point",
  ABOUT: "about",
  SIGN_IN: "signIn",
  SIGN_UP: "signUp",
  ACCOUNT: "account",
  SHOW_PROFILE: "show_profile",
  SETTINGS: "settings",
  FAQ: "faq",
  LOGOUT: "logout",
};

const menuItems: MenuItem[] = [
  {
    alias: MENU_ITEMS_ALIAS.HOME,
    name: "Inicio",
    url: HOME_PATH,
    muiName: "home_rounded",
    show: true,
  },
  {
    alias: MENU_ITEMS_ALIAS.SAVED,
    name: "Guardados",
    url: SAVED_POINTS_PATH,
    muiName: "favorite_rounded",
    show: true,
  },
  {
    alias: MENU_ITEMS_ALIAS.FRIENDS,
    name: "Amigos",
    url: FRIENDS_PATH,
    muiName: "people_alt_rounded",
    show: true,
  },
  {
    alias: MENU_ITEMS_ALIAS.ADD_POINT,
    name: "Añadir punto",
    url: CREATE_POINT_PATH,
    muiName: "add_circle_rounded",
    show: true,
  },
  {
    alias: MENU_ITEMS_ALIAS.ABOUT,
    name: "Acerca de",
    url: ABOUT_PATH,
    show: true,
  },
  {
    alias: MENU_ITEMS_ALIAS.SIGN_IN,
    name: "Iniciar sesión",
    url: LOGIN_PATH,
    show: false,
  },
  {
    alias: MENU_ITEMS_ALIAS.SIGN_UP,
    name: "Crear una cuenta",
    url: SIGNUP_PATH,
    show: false,
  },
  // Menu Items de account (Nav)
  {
    alias: MENU_ITEMS_ALIAS.SHOW_PROFILE,
    name: "Ver perfil",
    parent: "account",
    url: ACCOUNT_PATH,
    muiName: "person_rounded",
    order: 0,
  },
  {
    alias: MENU_ITEMS_ALIAS.SETTINGS,
    name: "Ajustes",
    parent: "account",
    url: SETTINGS_PATH,
    muiName: "settings_rounded",
    order: 1,
  },
  {
    alias: MENU_ITEMS_ALIAS.FAQ,
    name: "Preguntas frecuentes",
    parent: "account",
    url: FAQ_PATH,
    muiName: "help_outline_rounded",
    order: 2,
  },
  {
    alias: MENU_ITEMS_ALIAS.LOGOUT,
    name: "Cerrar sesión",
    parent: "account",
    muiName: "logout_rounded",
    url: "/logout",
    order: 3,
  },
];

// Alias de los menu Items de account (Sidebar)
const ACCOUNT_SIDEBAR_ITEMS: string[] = [
  MENU_ITEMS_ALIAS.HOME,
  MENU_ITEMS_ALIAS.ADD_POINT,
  MENU_ITEMS_ALIAS.ACCOUNT,
  MENU_ITEMS_ALIAS.SAVED,
  MENU_ITEMS_ALIAS.SETTINGS,
];

// Menu Items que se muestran en el sidebar de account
const ACCOUNT_MENU_ITEMS = menuItems.filter(
  (item) =>
    ACCOUNT_SIDEBAR_ITEMS.includes(item.alias) ||
    (item.parent && ACCOUNT_SIDEBAR_ITEMS.includes(item.parent))
);

export { menuItems, ACCOUNT_MENU_ITEMS };
