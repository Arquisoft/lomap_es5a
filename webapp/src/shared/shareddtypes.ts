/* Clase CSS para componentes JSX */
type ComponentClassName = {
  _className: string;
};

type User = {
  name: string;
  email: string;
};

// TODO: Completar con datos del punto de la API.
type Point = {
  name: string;
  address: string;
  coords: {
    lat: number;
    lng: number;
  };
};

type AuthUser = {
  webId: string;
  email: string;
  name?: string;
  password: string;
};

type AuthContextValue = {
  user: AuthUser;
  login: (user: AuthUser) => void;
  register: (user: AuthUser) => void;
  logout: () => void;
};


type BaseSelectOption = {
  value: string; 
  content?: string;
}

/**
 * Opciones para los selectores de la aplicación.
 * @param name Nombre del selector (input).
 * @param id Identificador del selector.
 * @param handleChange Función para manejar el cambio de valor.
 */
interface BaseSelect {
  name: string;
  id: string;
  options: BaseSelectOption[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type {
  User,
  ComponentClassName,
  AuthContextValue,
  AuthUser,
  Point,
  BaseSelect,
  BaseSelectOption
};
