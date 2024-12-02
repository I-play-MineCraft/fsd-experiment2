import React, { useState } from 'react';
function LoginForm() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
 // Handle input changes
 const handleUsernameChange = (e) => setUsername(e.target.value);
 const handlePasswordChange = (e) => setPassword(e.target.value);
// Handle form submission
 const handleSubmit = (e) => {
 e.preventDefault(); // Prevent page reload
 if (!username || !password) {
 setMessage('Error: Both fields are required.');
 } else {
 setMessage(`Success! Welcome, ${username}.`);
 }
 };
 return (
 <div className="login-container">
 <form onSubmit={handleSubmit}>
 <div>
 <label>Username:</label>
 <input
 type="text"
 value={username}
 onChange={handleUsernameChange}
 placeholder="Enter your username"
 required
 />
 </div>
 <div>
 <label>Password:</label>
 <input
 type="password"
 value={password}
 onChange={handlePasswordChange}
 placeholder="Enter your password"
 required
 />
 </div>
 <button type="submit">Login</button>
 </form>
 {message && <p className="message">{message}</p>}
 </div>
 );
}
export default LoginForm;