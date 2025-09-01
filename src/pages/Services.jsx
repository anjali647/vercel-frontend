// Services.js
import { useEffect, useState } from "react";
import { API } from "../utils/api";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(()=>{ API.get("/services").then(({data})=>setServices(data)); },[]);
  
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">Services</h1>
      <div className="row g-4">
        {services.map((s)=> (
          <div key={s._id} className="col-md-4">
            <ServiceCard s={s} />
          </div>
        ))}
      </div>
    </div>
  );
}