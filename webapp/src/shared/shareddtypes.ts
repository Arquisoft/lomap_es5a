enum Category {
  RESTAURANT = "restaurant",
  BAR = "bar",
  CAFE = "cafe",
  HOTEL = "hotel",
  GROCERY = "grocery",
  CINEMA = "cinema",
  SHOP = "shop",
  MUSEUM = "museum",
  PARK = "park",
  GAS_STATION = "gas_station",
  OTHER = "other",
  NONE = "none",
}

type SingleCategory = {
  id: string;
  name: string;
  description?: string;
  icon?: any;
};

/* Clase CSS para componentes JSX */
type ComponentClassName = {
  _className: string;
};

/**
 * Usuario de la aplicación.
 *
 * @param _id WebId del usuario.
 * @param name Nombre del usuario.
 * @param webId Identificador único del usuario.
 * @param email Correo electrónico del usuario.
 * @param image Imagen del usuario.
 */
type User = {
  _id: string;
  name: string;
  webId: string;
  email?: string;
  image?: string;
};

/**
 * Usuario que ha realizado una valoración. Contiene los datos del usuario y la imagen de su perfil.
 * @param webId Identificador único del usuario.
 * @param imageUrl Imagen de perfil usuario.
 */
type Reviewer = {
  webId: string;
  imageUrl: string;
};

/**
 * Valoración de un punto de interés.
 *
 * @param _id Identificador de la valoración.
 * @param user Usuario que ha realizado la valoración.
 * @param point Punto de interés valorado.
 * @param rating Valoración del punto de interés.
 * @param comment Comentario de la valoración.
 * @param createdAt Fecha de creación de la valoración.
 */
type Review = {
  _id: string;
  reviewer: Reviewer;
  rating: number;
  comment: string;
  createdAt: Date;
};

/**
 * Localización de un punto de interés.
 *
 * @param coords Coordenadas geográficas.
 * @param address Dirección postal.
 * @param postalCode Código postal.
 * @param city Ciudad.
 * @param country País.
 */
type BaseLocation = {
  coords: {
    lat: number;
    lng: number;
  };
  address: string;
  postalCode: number;
  city?: string;
  country?: string;
};

type Image = {
  url: string;
  alt?: string;
};

type PointOwner = {
  webId: string;
  imageUrl: string;
};

/**
 * Punto de interés.
 * @param name Nombre del punto de interés.
 * @param description Descripción del punto de interés.
 * @param location Localización del punto de interés.
 * @param owner Usuario que ha creado el punto de interés- WebId.
 * @param reviews Valoraciones del punto de interés.
 * @param image Imagen del punto de interés.
 * @param isPublic Indica si el punto de interés es público.
 * @param category Categoría del punto de interés.
 * @param createdAt Fecha de creación del punto de interés.
 * @param updatedAt Fecha de actualización del punto de interés.
 */
type Point = {
  _id: string;
  name: string;
  description?: string;
  location: BaseLocation;
  owner: PointOwner | User;
  reviews?: Review[];
  image?: Image;
  isPublic: boolean;
  category: Category | Category.NONE;
  createdAt: Date;
  updatedAt: Date;
};

type PointSummary = {
  _id: string;
  name: string;
  description?: string;
  location: BaseLocation;
  owner: PointOwner | User;
  image?: Image;
  isPublic: boolean;
  category: Category | Category.NONE;
  createdAt: Date;
};

/**
 * Grupo de usuarios, que comparten puntos de interés.
 *
 * @param _id Identificador del grupo.
 * @param name Nombre del grupo.
 * @param description Descripción del grupo.
 * @param members Miembros del grupo.
 * @param creator Creador del grupo.
 * @param createdAt Fecha de creación del grupo.
 */
type UserGroup = {
  _id: string;
  name: string;
  description?: string;
  members: User[];
  points: PointSummary[];
  creator: User;
  createdAt: Date;
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
};

type CategoryOption = {
  value: Category;
  content?: string;
}

/**
 * Opciones para los selectores de la aplicación.
 * @param label Etiqueta del selector.
 * @param name Nombre del selector (input).
 * @param id Identificador del selector.
 * @param handleChange Función para manejar el cambio de valor.
 */
interface BaseSelect {
  label: string;
  name: string;
  id: string;
  options: BaseSelectOption[] | CategoryOption[];
  category?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// For text inputs
interface BaseInputProps {
  label: string;
  value?: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
};

interface BaseTextAreaProps {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
};

export type {
  SingleCategory,
  ComponentClassName,
  AuthContextValue,
  AuthUser,
  BaseTextAreaProps,
  BaseInputProps,
  BaseSelect,
  BaseSelectOption,
  User,
  UserGroup,
  Review,
  Point,
  PointSummary,
  BaseLocation,
  
};

export { Category };
