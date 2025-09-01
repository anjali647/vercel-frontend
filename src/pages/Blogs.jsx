// Blogs.js
import { useEffect, useMemo, useState } from "react";
import { API } from "../utils/api";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [q, setQ] = useState("");
  const open = useMemo(() => new URLSearchParams(location.search).get("open"), []);
  const [current, setCurrent] = useState(null);

  useEffect(()=>{ API.get("/blogs",{ params:{ q } }).then(({data})=>setBlogs(data)); },[q]);
  useEffect(()=>{
    if(open) API.get("/blogs/"+open).then(({data})=>setCurrent(data));
  },[open]);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-4 fw-bold">Blog</h1>
        <input
          placeholder="Search posts"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          className="form-control"
          style={{maxWidth: '300px'}}
        />
      </div>

      {current ? (
        <article className="card shadow-sm mt-4">
          <div className="card-body p-4">
            <h2 className="card-title h3 fw-bold">{current.title}</h2>
            <div className="text-muted small mb-3">
              {new Date(current.createdAt).toDateString()} · {current.author}
            </div>
            <img 
              className="img-fluid rounded mb-4" 
              src={current.coverImage} 
              alt={current.title}
              style={{height: '250px', width: '100%', objectFit: 'cover'}}
            />
            <div className="card-text" dangerouslySetInnerHTML={{ __html: current.content }} />
          </div>
        </article>
      ) : (
        <div className="row g-4 mt-4">
          {blogs.map((b)=> (
            <div key={b._id} className="col-md-4">
              <BlogCard b={b} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}