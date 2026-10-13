import React, { useEffect, useState } from "react";

const useProducts = (initailURL) => {
  const [lodding, setLodding] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(initailURL);
      const data = await res.json();
      setProducts(data);
      setLodding(false);
    } catch (err) {
      setError(err);
      setLodding(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [initailURL]);
  return {
    lodding,
    error,
    products,
  };
};

export default useProducts;
