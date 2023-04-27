/**
 * Convierte una fecha en formato relativo (Hace 5 minutos, Hace 2 horas, etc)
 * @param date Fecha de tipo Date
 * @returns Fecha en formato relativos
 */

const formatDateAsRelative = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInMinutes < 1) {
    return "justo ahora";
  } else if (diffInMinutes < 60) {
    return `Hace ${diffInMinutes} minuto${diffInMinutes > 1 ? "s" : ""}`;
  } else if (diffInHours < 24) {
    return `Hace ${diffInHours} hora${diffInHours > 1 ? "s" : ""}`;
  } else if (diffInDays < 30) {
    return `Hace ${diffInDays} día${diffInDays > 1 ? "s" : ""}`;
  } else if (diffInMonths < 12) {
    return `Hace ${diffInMonths} mes${diffInMonths > 1 ? "es" : ""}`;
  } else {
    return `Hace ${diffInYears} año${diffInYears > 1 ? "s" : ""}`;
  }
};

const formatDateWithGenericFormat = (date: Date, format: string) => {
  return format
    .replace(/yyyy/g, date.getFullYear().toString())
    .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, "0"))
    .replace(/dd/g, date.getDate().toString().padStart(2, "0"))
    .replace(/HH/g, date.getHours().toString().padStart(2, "0"))
    .replace(/mm/g, date.getMinutes().toString().padStart(2, "0"))
    .replace(/ss/g, date.getSeconds().toString().padStart(2, "0"));
};

export { formatDateWithGenericFormat, formatDateAsRelative };
