import { Coordinate } from "../shared/shareddtypes";
import { LAT_REGEX, LNG_REGEX, NUMBER_REGEX, SAFE_TEXT_REGEX } from "./regex";
import * as DOMPurify from "dompurify";

const NO_OPTION_SELECTED: string = "no-opt"; // Valor por defecto si no se ha seleccionado una opcion diferente a "Selecciona una opcion" en un combobox

const errorMessages = {
  required: (field: string) => `El campo ${field} es obligatorio`,
  empty: (field: string) => `El campo ${field} es obligatorio`,
  invalidGeoCoordinate: "This field must be a valid geo coordinate",
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

const checkIsValidGeoCoordinate = (value: string, coord: Coordinate) => {
  const sValue = sanitizeInput(value);
  checkIsNotEmpty(sValue, coord);
  const regex = coord === Coordinate.LAT ? LAT_REGEX : LNG_REGEX;
  if (!regex.test(sValue)) {
    throw new Error(errorMessages.invalidGeoCoordinate);
  }
};

export { checkIsNotEmpty, checkIsValidGeoCoordinate, checkAnyOptionIsSelected };
