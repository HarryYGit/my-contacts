# Contacts Application

This is a responsive "Contacts" application built using React. The app fetches a list of contacts from the source API link of (https://jsonplaceholder.typicode.com/) and allows users to browse and search through the contacts. The application is styled with a dark theme and displays each contact's information as a contacts card.

## Features

- Fetches contacts data from `https://jsonplaceholder.typicode.com/users`
- this app only displayed the user information of  name, phone, email, address, and company name
- Allows users to search contacts by name, email, phone, or company name
- Toggle options to display additional information such as websites and catchphrases
- Dark mode and light mode toggle button
- Displays contact information in a visually appealing card format
- Responsive design for various screen sizes
- Styled with Bootstrap for a modern and responsive UI

- Sort contacts by name.
- Display additional contact details on card click.
- Show/hide website and catchphrase information.

## Modifications Made Today

1. **Sort Contacts by Name**: Contacts are now displayed in alphabetical order by name.
2. **Change Style of the Page and Contacts Card**:
    - Updated the overall styling of the page for a modern, flat design.
    - Contacts card now includes shadow effects and rounded corners for better aesthetics.
    - Improved button styles for light and dark modes.
3. **Change Display Info**:
    - Initially display only the name, phone, and company name of each contact.
    - Added an initials icon before each contact name.
    - Show additional contact information (email, address, etc.) when a contact card is clicked.


## Technologies Used

- React
- Bootstrap for styling

## Installation and Running the Application

### Prerequisites

- Node.js and npm installed on your machine

### Steps to Run the Application

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/HarryYGit/contacts-app.git
    cd contacts-app
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start the Application**:
    ```sh
    npm start
    ```

    This will start the development server and open the application in your default web browser at `http://localhost:3000`.

## Hosting the Application

The application is hosted on [haoranyan.xyz](http://haoranyan.xyz) for preview.

## Application Structure

- **`src/App.js`**: The main component that fetches and displays the contacts.
- **`src/App.css`**: The CSS file for styling the application.
- **`src/index.js`**: The entry point of the React application.
- **`public/index.html`**: The HTML template.

## Usage

### Search Contacts

- Use the search input to filter contacts by name, email, phone, or company name.

### Toggle Display Options

- Use the checkboxes to toggle the display of additional information like websites and catchphrases.

### Dark Mode / Light Mode

- Click the "Switch to Light Mode" button to switch to light mode and "Switch to Dark Mode" to switch back to dark mode.
