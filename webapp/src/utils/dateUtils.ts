

const formatDateWithGenericFormat = (date: Date, format: string) => {
  return format
    .replace(/yyyy/g, date.getFullYear().toString())
    .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, "0"))
    .replace(/dd/g, date.getDate().toString().padStart(2, "0"))
    .replace(/HH/g, date.getHours().toString().padStart(2, "0"))
    .replace(/mm/g, date.getMinutes().toString().padStart(2, "0"))
    .replace(/ss/g, date.getSeconds().toString().padStart(2, "0"));
};

export { formatDateWithGenericFormat };
