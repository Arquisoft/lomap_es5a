/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param userId Id del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
const findAllPointsByUser = (userId: string) => {
  return {
    data: `Punto de ${userId}`,
  };
};

export { findAllPointsByUser };
