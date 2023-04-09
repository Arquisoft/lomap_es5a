/**
 * @param id: Identificador del filtro. Utilizado a la hora de mapear los filtros en la vista.
 * @param name: Nombre de la categoría, que se muestra en el componente.
 * @param description: Descripción alternativa, a modo informativo, del filtro aplicado.
 * @param iconUrl: Ruta del icono asociado al filtro.
 */

import { Category, SingleCategory } from "../shared/shareddtypes";

const MAX_CATEGORIES_VISIBLE: number = 6; // Número máximo de categorías visibles.

const availableCategories: SingleCategory[] = [
  {
    id: "cat-1",
    code: Category.RESTAURANT,
    name: "Restaurantes",
    description: "Mostrar los restaurantes",
    icon: "restaurant"
  },
  {
    id: "cat-2",
    code: Category.BAR,
    name: "Bares",
    description: "Mostrar los bares",
    icon: "local_bar"
  },
  {
    id: "cat-3",
    code: Category.SHOP,
    name: "Tiendas",
    description: "Mostrar las tiendas",
    icon: "shopping_bag"
  },
  {
    id: "cat-4",
    code: Category.SUPERMARKET,
    name: "Supermercados",
    description: "Mostrar los supermercados",
    icon: "shopping_basket"
  },
  {
    id: "cat-5",
    code: Category.PARK,
    name: "Parques",
    description: "Mostrar los parques",
    icon: "park"
  },
  {
    id: "cat-6",
    code: Category.GAS_STATION,
    name: "Gasolineras",
    description: "Mostrar los gasolineras",
    icon: "local_gas_station"
  },
  {
    id: "cat-7",
    code: Category.CINEMA,
    name: "Cines",
    description: "Mostrar los cines",
    icon: "local_movies"
  },
  {
    id: "cat-8",
    code: Category.MUSEUM,
    name: "Museos",
    description: "Mostrar los museos",
    icon: "museum"
  },
  {
    id: "cat-9",
    code: Category.HOTEL,
    name: "Hoteles",
    description: "Mostrar los hoteles",
    icon: "hotel"
  },
  {
    id: "cat-10",
    code: Category.CAFE,
    name: "Cafeterías",
    description: "Mostrar las cafeterías",
    icon: "local_cafe"
  },
  {
    id: "cat-11",
    code: Category.GROCERY,
    name: "Alimentación",
    description: "Mostrar los establecimientos de alimentación",
    icon: "local_grocery_store"
  },
  {
    id: "cat-13",
    code: Category.PUBLIC_TRANSPORT,
    name: "Transporte público",
    description: "Mostrar los establecimientos de transporte público",
    icon: "directions_bus"
  },
  {
    id: "cat-14",
    code: Category.MONUMENT,
    name: "Monumentos",
    description: "Mostrar los monumentos",
    icon: "account_balance"
  },
  {
    id: "cat-12",
    code: Category.OTHER,
    name: "Otros",
    description: "Mostrar los establecimientos de otros tipos",
    icon: "more_horiz"
  }
];

export { availableCategories, MAX_CATEGORIES_VISIBLE };
