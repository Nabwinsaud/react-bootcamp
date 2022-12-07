const Products = () => {
  // async prog
  // sync - seqential
  // Promise - promise
  // succes
  // rejceted
  const url = "https://fakestoreapi.com/products/";
  // fetch
  // axios
  const fetchData = async () => {
    const response = await fetch(url);
    console.log(
      response
        .json()
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    );
  };
  fetchData();

  return <div>Products</div>;
};

export default Products;
