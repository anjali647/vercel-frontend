
// ProductCard.js
export default function ProductCard({ p }) {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={p.image} 
        alt={p.name} 
        className="card-img-top rounded-top" 
        style={{height: '160px', objectFit: 'cover'}}
      />
      <div className="card-body p-4 d-flex flex-column">
        <h5 className="card-title fw-bold">{p.name}</h5>
        <p className="card-text small text-muted">{p.tagline}</p>
        <ul className="list-unstyled small mb-3 flex-grow-1">
          {p.features?.slice(0,4).map((f,i)=>(
            <li key={i} className="mb-1">
              <i className="bi bi-dot"></i>
              {f}
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-semibold h6 mb-0">₹{p.price}</span>
          <button className="btn btn-dark btn-sm">Try Now</button>
        </div>
      </div>
    </div>
  );
}