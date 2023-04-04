import { Coordinate } from "../shared/shareddtypes";
import {LAT_REGEX, LNG_REGEX, NUMBER_REGEX, SAFE_TEXT_REGEX} from "./regex";
import * as DOMPurify from 'dompurify';

const errorMessages = {
  required: "This field is required",
  empty: "This field cannot be empty",
  invalidGeoCoordinate: "This field must be a valid geo coordinate",
};

const sanitizeInput = (value: string) => {
  return DOMPurify.sanitize(value);
};

/**
 * Comprueba que un campo no está vacío.
 * @param value
 */
const checkIsNotEmpty = (value: string) => {
  const sValue = sanitizeInput(value);
  if (!sValue || sValue.length === 0) {
    throw new Error(errorMessages.empty);
  }
};

const checkIsValidGeoCoordinate = (value: string, coord: Coordinate) => {
  const sValue = sanitizeInput(value);
  checkIsNotEmpty(sValue);
  const regex = value === Coordinate.LAT ? LAT_REGEX : LNG_REGEX;
  if (!regex.test(sValue)) {
    throw new Error(errorMessages.invalidGeoCoordinate);
  }
};

export {
    checkIsNotEmpty,
    checkIsValidGeoCoordinate,
}
