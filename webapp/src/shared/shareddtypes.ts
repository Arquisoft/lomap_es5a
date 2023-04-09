enum Category {
  RESTAURANT = "restaurant",
  BAR = "bar",
  CAFE = "cafe",
  HOTEL = "hotel",
  GROCERY = "grocery",
  SUPERMARKET = "supermarket",
  CINEMA = "cinema",
  SHOP = "shop",
  MUSEUM = "museum",
  PARK = "park",
  GAS_STATION = "gas_station",
  PUBLIC_TRANSPORT = "public_transport",
  MONUMENT = "monument",
  OTHER = "other",
  NONE = "none",
}

enum Coordinate {
  LAT = "lat",
  LNG = "lng",
}

type SingleCategory = {
  id: string;
  code: string;
  name: string;
  description?: string;
  icon?: any;
  isActivated?: boolean;
};

interface CategoryFilterList {
  SingleCategory: SingleCategory[];
}

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
 * Amigo del usuario en sesión. Almacena su webId, su nombre y la url de su imagen (si es que tiene)
 * @param webId Identificador único del usuario.
 * @param name nombre del usuario.
 * @param imageUrl Imagen de perfil usuario.
 */
type Friend = {
  webId : string;
  name : string;
  imgUrl? : string;
};

/**
 * Almacenen de datos de usuario en sesion.
 */
type UserInSessionProfile = {
  webId?: string;
  name: string;
  imageUrl?: string;
  email?: string;
  friends?: string[];
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
  name?: string;
  imageUrl?: string;
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
  owner: PointOwner;
  reviews?: Review[];
  image?: Image;
  isPublic: boolean;
  category: Category;
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
};

/**
 * Propiedades para el componente de popup de un punto de interés.
 * @param name Nombre del punto de interés.
 * @param category Categoría del punto de interés. Ver {@link Category}.
 * @param image Imagen del punto de interés.
 * @param location Localización del punto de interés. Ver {@link BaseLocation}.
 * @param owner Usuario que ha creado el punto de interés. Ver {@link PointOwner}.
 */
type BaseMapPopupProps = {
  name: string;
  category: Category;
  image?: string;
  location: BaseLocation;
  owner: PointOwner;
  point?: Point;
};

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
  showContent?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  styles?: React.CSSProperties | string;
}

// For text inputs
interface BaseInputProps {
  label: string;
  value?: string | number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  showClearButton?: boolean;
  styles?: React.CSSProperties | string;
}

interface BaseTextAreaProps {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}

/**
 * Propiedades para el componente de información de perfil con botón de seguir.
 * @param name Nombre del usuario.
 * @param imageUrl Imagen de perfil del usuario.
 * @param webId WebId del usuario.
 */
type ProfileInfoWithFollowButtonProps = {
  name: string;
  imageUrl?: string;
  webId: string;
};

/**
 * Propiedades para el componente de listado de puntos de interés (Home).
 */
type PointListingAsideProps = {
  points: Point[];
};

interface SingleFilterProps {
  code: string; // Código de la categoria
  iconFilename: any;
  iconAlt?: string;
  text: string;
  isActive?: boolean;
  filterObject?: SingleCategory;
};

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  msgSenderId: string;
  appId: string;
};

export type {
  AuthContextValue,
  AuthUser,
  BaseTextAreaProps,
  BaseInputProps,
  BaseSelect,
  BaseSelectOption,
  BaseLocation,
  BaseMapPopupProps,
  CategoryFilterList,
  ComponentClassName,
  Friend,
  FirebaseConfig,
  Image,
  Point,
  PointOwner,
  PointSummary,
  ProfileInfoWithFollowButtonProps,
  PointListingAsideProps,
  Review,
  Reviewer,
  SingleCategory,
  SingleFilterProps,
  User,
  UserGroup,
  UserInSessionProfile,
};
export { Category, Coordinate };


