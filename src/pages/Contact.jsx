// Contact.js
import { useState } from "react";
import { API } from "../utils/api";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/contact", form);
      setStatus({ ok: true, msg: `Thanks! Ticket: ${data.ticketId}` });
      setForm({ name:"", email:"", subject:"", message:"" });
    } catch (e) {
      setStatus({ ok: false, msg: e?.response?.data?.message || "Error" });
    }
  };

  return (
    <div className="container py-4" style={{maxWidth: '540px'}}>
      <h1 className="display-5 fw-bold mb-3 text-center text-dark">Contact Sales</h1>
      
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body p-4">
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold text-dark">Name</label>
              <input 
                required 
                id="name"
                placeholder="Your full name"
                value={form.name} 
                onChange={(e)=>setForm({...form, name: e.target.value})}
                className="form-control border-secondary" 
                style={{backgroundColor: '#ffffff', color: '#212529'}}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold text-dark">Email</label>
              <input 
                required 
                type="email"
                id="email"
                placeholder="Your email address"
                value={form.email} 
                onChange={(e)=>setForm({...form, email: e.target.value})}
                className="form-control border-secondary" 
                style={{backgroundColor: '#ffffff', color: '#212529'}}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="subject" className="form-label fw-semibold text-dark">Subject</label>
              <input 
                required 
                id="subject"
                placeholder="What is this regarding?"
                value={form.subject} 
                onChange={(e)=>setForm({...form, subject: e.target.value})}
                className="form-control border-secondary" 
                style={{backgroundColor: '#ffffff', color: '#212529'}}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold text-dark">Message</label>
              <textarea 
                required 
                id="message"
                placeholder="How can we help you?" 
                rows={5}
                value={form.message} 
                onChange={(e)=>setForm({...form, message: e.target.value})}
                className="form-control border-secondary" 
                style={{backgroundColor: '#ffffff', color: '#212529'}}
              />
            </div>
            
            <div className="d-grid">
              <button type="submit" className="btn btn-primary fw-bold py-2">Send Message</button>
            </div>
            
            {status && (
              <div className={`mt-3 alert ${status.ok ? "alert-success" : "alert-danger"} fw-semibold`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Converted to regular style tag */}
      <style>
        {`
          .contact-form-control {
            color: #212529 !important;
          }
          
          .contact-form-control:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
            background-color: #ffffff !important;
            color: #212529 !important;
          }
          
          .contact-form-control::placeholder {
            color: #6c757d;
            opacity: 0.8;
          }
          
          .contact-btn-primary {
            background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
            border: none;
            transition: all 0.3s ease;
          }
          
          .contact-btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
          }
          
          .contact-card {
            background: #ffffff;
          }
        `}
      </style>
    </div>
  );
}