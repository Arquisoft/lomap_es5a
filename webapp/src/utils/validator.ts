const errorMessages = {
  required: "This field is required",
  empty: "This field cannot be empty",
};

/**
 * Comprueba que un campo no está vacío.
 * @param value
 */
const checkIsNotEmpty = (value: string) => {
  if (!value || value.length === 0) {
    throw new Error(errorMessages.empty);
  }
};

export {
    checkIsNotEmpty
}
