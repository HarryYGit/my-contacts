# Contacts Application

This is a responsive "Contacts" application built using React. The app fetches a list of contacts from the source API link of (https://jsonplaceholder.typicode.com/) and allows users to browse and search through the contacts. The application is styled with a dark theme and displays each contact's information as a contacts card.

## Features

- Fetches contacts data from `https://jsonplaceholder.typicode.com/users`
- this app only displayed the user information of  name, phone, email, address, and company name
- Allows users to search contacts by name, email, phone, or company name
- Displays contact information in a visually appealing card format
- Responsive design for various screen sizes

## Technologies Used

- React
- CSS for styling

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