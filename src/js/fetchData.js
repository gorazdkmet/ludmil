
/**
 * getData - description
 *
 * @return {type}  description
 */
export const fetchData = async (url) => {
  const data = await fetch(url)
  return data.json();
};
