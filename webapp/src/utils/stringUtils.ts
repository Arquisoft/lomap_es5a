/**
 * Canoniza una url, reemplazando los espacios por guiones y convirtiendo a minúsculas
 * @param parent Si la url es hija de otra, se le pasa la url padre en el formato
 * <code>/parent</code>
 * sin la barra final.
 * @param url
 * @returns
 */
const canonizeUrl = (parent: string, url: string): string => {
  return parent
    ? encodeURI(`${parent}/${url.replace(/\s/g, "-").toLowerCase()}`)
    : encodeURI(url.replace(/\s/g, "-").toLowerCase());
};

export { canonizeUrl };
