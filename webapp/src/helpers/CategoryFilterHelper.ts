/**
 * @param id: Identificador del filtro. Utilizado a la hora de mapear los filtros en la vista.
 * @param name: Nombre de la categoría, que se muestra en el componente.
 * @param description: Descripción alternativa, a modo informativo, del filtro aplicado.
 * @param iconUrl: Ruta del icono asociado al filtro.
 */

import { SingleCategory } from "../shared/shareddtypes";


const availableCategories: SingleCategory[] = [
  {
    id: "cat-1",
    name: "Restaurantes",
    description: "Mostrar los restaurantes",
    icon: "restaurant"
  },
  {
    id: "cat-2",
    name: "Bares",
    description: "Mostrar los bares",
    icon: "local_bar"
  },
  {
    id: "cat-3",
    name: "Tiendas",
    description: "Mostrar las tiendas",
    icon: "shopping_bag"
  },
  {
    id: "cat-4",
    name: "Supermercados",
    description: "Mostrar los supermercados",
    icon: "shopping_basket"
  },
  {
    id: "cat-5",
    name: "Parques",
    description: "Mostrar los parques",
    icon: "park"
  },
  {
    id: "cat-6",
    name: "Gasolineras",
    description: "Mostrar los gasolineras",
    icon: "local_gas_station"
  },
];

export { availableCategories };
