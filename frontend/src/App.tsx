import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();
      setToken(data.token);
    } catch {
      setError('Incorrect username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <>
    <div className="login-container">
      {token ? (
        <div className="welcome-message">
          <h2>Welcome, {username}!</h2>
          <p><strong>Token:</strong></p>
          <code>{token}</code>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="spinner-container">
                <span className="spinner" /> Logging in...
              </div>
            ) : (
              'Log In'
            )}
          </button>
        </form>
      )}
    </div>

    <footer className="footer">
      &copy; {new Date().getFullYear()} alexgrt. All rights reserved.
    </footer>
  </>
);
}

export default App;
