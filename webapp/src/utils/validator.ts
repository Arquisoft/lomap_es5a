import * as DOMPurify from "dompurify";
import { Coordinate } from "../shared/shareddtypes";
import { LAT_REGEX, LNG_REGEX } from "./regex";

const NO_OPTION_SELECTED = "no-opt"; // Valor por defecto si no se ha seleccionado una opcion diferente a "Selecciona una opcion" en un combobox

const errorMessages = {
  required: (field: string) => `El campo ${field} es obligatorio`,
  empty: (field: string) => `El campo ${field} es obligatorio`,
  invalidGeoCoordinate: "La coordenadas geográficas no son válidas",
};

const sanitizeInput = (value: string) => {
  return DOMPurify.sanitize(value);
};

/**
 * Comprueba que un campo no está vacío.
 * @param value
 */
const checkIsNotEmpty = (value: string, fieldName: string) => {
  const sValue = sanitizeInput(value);
  if (!sValue || sValue.length === 0) {
    throw new Error(errorMessages.empty(fieldName));
  }
};

/**
 * Comprueba que se ha seleccionado una opcion del combobox diferente a "Selecciona una opcion"
 * @param value Valor de la opcion seleccionada.
 * @param fieldName Nombre del campo que se está validando.
 */
const checkAnyOptionIsSelected = (value: string, fieldName: string) => {
  if (value === NO_OPTION_SELECTED) {
    throw new Error(errorMessages.empty(fieldName));
  }
};

const checkIsValidGeoCoordinate = (value: number, coord: Coordinate) => {
  const sValue = sanitizeInput(value.toString());
  //checkIsNotEmpty(sValue, coord);
  const regex = coord === Coordinate.LAT ? LAT_REGEX : LNG_REGEX;
  console.log(value, coord, regex);
  if (!regex.test(sValue)) {
    throw new Error(errorMessages.invalidGeoCoordinate);
  }
};

export { checkIsNotEmpty, checkIsValidGeoCoordinate, checkAnyOptionIsSelected, NO_OPTION_SELECTED };

