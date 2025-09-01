// BlogCard.js
import { Link } from "react-router-dom";

export default function BlogCard({ b }) {
  return (
    <Link 
      to={"/blogs?open="+b.slug} 
      className="card h-100 shadow-sm text-decoration-none"
    >
      <img 
        src={b.coverImage} 
        alt={b.title} 
        className="card-img-top" 
        style={{height: '160px', objectFit: 'cover'}}
      />
      <div className="card-body p-4">
        <h5 className="card-title fw-bold text-dark">{b.title}</h5>
        <p className="card-text small text-muted">{b.excerpt}</p>
        <div className="small text-muted mt-auto">
          {new Date(b.createdAt).toDateString()} · {b.author}
        </div>
      </div>
    </Link>
  );
}