
/* Clase CSS para componentes JSX */
type ComponentClassName = {
  _className: string
}

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
  }
  category: string;
}

export type { User, ComponentClassName };
