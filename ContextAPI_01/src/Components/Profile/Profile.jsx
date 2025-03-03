// src/components/Profile.js
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';



function Profile() {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {username || "No username set yet."}</p>
    </div>
  );
}

export default Profile;
