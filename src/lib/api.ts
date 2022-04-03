const FAKESTOREAPI_DOMAIN = "https://fakestoreapi.com/products";

export async function getProducts(category = '') {
  console.log(`${FAKESTOREAPI_DOMAIN}/`);
  const response = await fetch(`${FAKESTOREAPI_DOMAIN}/${category}`)
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }
  
  return data;
}

export async function getSingleProduct(id: number | string) {
  console.log(`${FAKESTOREAPI_DOMAIN}/${id}`);
  const response = await fetch(`${FAKESTOREAPI_DOMAIN}/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }

  return data;
}