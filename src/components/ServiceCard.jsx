// ServiceCard.js
export default function ServiceCard({ s }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body p-4">
        <div className="fs-1 mb-2">🛠️</div>
        <h5 className="card-title fw-bold">{s.name}</h5>
        <p className="card-text small text-muted">{s.summary}</p>
        <ul className="list-unstyled small mt-2">
          {s.points?.slice(0,3).map((pt,i)=>(
            <li key={i} className="mb-1">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
