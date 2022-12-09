// async prog
// sync - seqential
// Promise - promise
// succes
// rejceted
// fetch
// axios
import { useState, useEffect } from "react";
const Products = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const url = "https://fakestoreapi.com/products/";
  const getData = async () => {
    const response = await fetch(url);
    const result = response.json();
    result.then((res) => setData(res));
    // result.then((res) => console.log(res)).catch((err) => console.log(err));
  };
  // getData(); // infinte loop
  // useEffect - side effect
  // life cycle hooks
  // compountDidMount()
  useEffect(() => {
    getData();
  }, []); // dependencies
  return (
    <div className="card">
      {data.map((item) => (
        <div key={item.id} className="products">
          <div className="product">
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
