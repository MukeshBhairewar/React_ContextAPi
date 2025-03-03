// src/components/Login.js
import { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';


function Login() {
  const { setUsername } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    setUsername(inputValue);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleLogin}>Set Username</button>
    </div>
  );
}

export default Login;
