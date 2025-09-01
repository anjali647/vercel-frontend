// Products.js
import { useEffect, useState } from "react";
import { API } from "../utils/api";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => { API.get("/products").then(({data})=>setProducts(data)); }, []);
  
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">AI Burro Products</h1>
      <div className="row g-4">
        {products.map((p)=> (
          <div key={p._id} className="col-md-4">
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}