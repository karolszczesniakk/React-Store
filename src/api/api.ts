const FAKESTOREAPI_DOMAIN = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(FAKESTOREAPI_DOMAIN);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }
  
  return data;
}

export async function getSingleProduct(id: number | string) {
  const response = await fetch(`${FAKESTOREAPI_DOMAIN}/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products");
  }

  return data;
}