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

export type { User, ComponentClassName, AuthContextValue, AuthUser, Point };

