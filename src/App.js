import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa'; 

// API link
const Source_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [showWebsite, setShowWebsite] = useState(false);
  const [showCatchPhrase, setShowCatchPhrase] = useState(false);
  const [error, setError] = useState();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedContactId, setExpandedContactId] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  };

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(Source_URL);
        const data = await response.json();
        setContacts(data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (e) {
        setError("Failed to fetch data. Please check your connection and try again.");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    document.body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
  }, [isDarkMode]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCardClick = (contactId) => {
    setExpandedContactId(expandedContactId === contactId ? null : contactId);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.email.toLowerCase().includes(search.toLowerCase()) ||
    contact.phone.includes(search) ||
    contact.company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App container py-5">
      <h2 className="mb-4 title">
        <FaUserCircle className="title-icon" />
        My Contacts
      </h2>
      <button onClick={toggleDarkMode} className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} mb-3`}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <input
        type="text"
        placeholder="Search Contacts..."
        value={search}
        onChange={handleSearch}
        className="form-control mb-3"
        aria-label="Search Contacts"
      />

      <div className="checkboxes mb-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="toggleWebsite"
            checked={showWebsite}
            onChange={() => setShowWebsite(!showWebsite)}
          />
          <label className="form-check-label" htmlFor="toggleWebsite">Show Website</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="toggleCatchPhrase"
            checked={showCatchPhrase}
            onChange={() => setShowCatchPhrase(!showCatchPhrase)}
          />
          <label className="form-check-label" htmlFor="toggleCatchPhrase">Show CatchPhrase</label>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center">Loading Contacts...</div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div className="contacts_list">
          {filteredContacts.map(contact => (
            <div key={contact.id} className="card mb-3 contact-card" onClick={() => handleCardClick(contact.id)}>
              <div className="card-body">
                <h5 className="card-title">
                  <span className="initials">{contact.name[0]}</span> {contact.name}
                </h5>
                <p className="card-text"><strong>Phone:</strong> {contact.phone}</p>
                <p className="card-text"><strong>Company:</strong> {contact.company.name}</p>
                {expandedContactId === contact.id && (
                  <>
                    <p className="card-text"><strong>Email:</strong> {contact.email}</p>
                    <p className="card-text"><strong>Address:</strong> {`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`}</p>
                    {showCatchPhrase && <p className="card-text"><strong>CatchPhrase:</strong> {contact.company.catchPhrase}<br/><strong>BS:</strong> {contact.company.bs}</p>}
                    {showWebsite && <p className="card-text"><strong>Website:</strong> <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
