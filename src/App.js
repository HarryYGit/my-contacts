import React, {useState, useEffect } from "react";
import './App.css';


// API link
const Source_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {

  const [contacts, setContacts] = useState([]); //contact state
  const [isLoading, setIsLoading] = useState([false]); //loading state
  const [search, setSearch] = useState(''); // search state
  
  const [error, setError] = useState(); //error state

  useEffect(() => {

    const fetchContacts = async () => {

      // when start fetch function, set loading state to true
      setIsLoading(true);

      try{
        //fetch data from source link
        const response = await fetch(`${Source_URL}`);
        const data = await response.json();
        setContacts(data);

      } catch (e) {
        setError(e);
        // catch any error may happen during fetching data

      } finally {
        // after fetch function, set loading back to false;
        setIsLoading(false);

      }; 
    };

    fetchContacts();

  },[]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // add search feature to allow user to search contacts
  // allow to search by name or phone or email or company name
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.email.toLowerCase().includes(search.toLowerCase()) ||
    contact.phone.includes(search) || contact.company.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return <div className="loading">Loading Contacts...</div>;
  };

  if (error) {
    return <div className="error">Error when fetching data! Please try again.</div>;
  };


  return (
    
    <div className="App">
      <h1>My Contacts</h1>

      <input
      type="text" placeholder="Search Contacts..." value={search} onChange={handleSearch} className="search_input"
      />

      <div className="contacts_list">
        { filteredContacts && filteredContacts.map(showContact => (
          <div key={contacts.id} className="contacts_card">

            <h2>{showContact.name}</h2>
            <p><strong>Phone: </strong> {showContact.phone}</p>
            <p><strong>Email: </strong> {showContact.email}</p>
            <p><strong>Address: </strong> {showContact.address.suite}, {showContact.address.street},{showContact.address.city}, {showContact.address.zipcode}</p>
            <p><strong>Company: </strong> {showContact.company.name}</p>
            

            <br/>

          </div>
        ))}

      </div>
      
    </div>
  );
}

export default App;
