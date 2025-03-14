// src/context/UserProvider.js
import { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
