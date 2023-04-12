/**
 * Duvuelve el número entero más cercano al número dado con la precisión dada.
 * @param number 
 * @param precision 
 * @returns 
 */
const ceilNumber = (number: number, precision: number) => {
    const factor = Math.pow(10, precision);
    return Math.ceil(number * factor) / factor;
};

export {
    ceilNumber
}