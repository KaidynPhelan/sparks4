import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook

import logo from './logo.svg';
import './App.css';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0(); // Destructure the required functions and values from useAuth0

  useEffect(() => {
    console.log('Rendering App component');
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while Auth0 is being initialized
  }

  if (isAuthenticated) {
    // If the user is authenticated, render the authenticated content
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome, {user.name}!
          </p>
          <button onClick={() => logout()}>Logout</button> {/* Add a logout button */}
        </header>
      </div>
    );
  } else {
    // If the user is not authenticated, render the login button
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Please log in to continue.
          </p>
          <button onClick={() => loginWithRedirect()}>Login</button> {/* Add a login button */}
        </header>
      </div>
    );
  }
}

export default App;
