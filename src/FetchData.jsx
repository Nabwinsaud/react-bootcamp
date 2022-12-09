// async prog
// sync - seqential
// Promise - promise
// succes
// rejceted
// fetch
// axios
import { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const url = "https://fakestoreapi.com/products/";
  const getData = async () => {
    const response = await axios.get(url);
    // const result = response.data;
    // setData(result);
    setData(response.data);
    // const result = response.json();
    // return response.data;
    // result.then((res) => setData(res));
  };
  // getData(); // infinte loop
  // useEffect - side effect
  useEffect(() => {
    getData();
  }, []);
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

export default FetchData;
