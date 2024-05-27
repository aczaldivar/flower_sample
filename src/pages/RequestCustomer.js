import React, {useState} from 'react';
import '../Components/pages.css';
import Navbar from '../Components/Navbar.js';



const RequestCustomer = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission (you would replace this with actual form submission logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };
  

  return (
 <><Navbar/>
  <a class="navbar-brand" href="/"> <h1 id="SFtitle"> Sample Flowers</h1></a>
    <div className="container mt-5">
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for your request!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
    </>
  );
};

export default RequestCustomer;
