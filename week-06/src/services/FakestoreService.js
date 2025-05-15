export const FakestoreService = {
  getProducts,
  getProductById,
};

async function getProducts() {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return products;
}

async function getProductById(id) {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  return product;
}
