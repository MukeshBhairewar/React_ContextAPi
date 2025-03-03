
import Login from "./Components/Login/Login"
import Profile from "./Components/Profile/Profile"
import UserProvider from "./Context/UserProvider"


function App() {
 

  return (
    <UserProvider>
    <div>
      <h1>Context API Demo</h1>
      <Login/>
      <Profile />
    </div>
  </UserProvider>
  )
}

export default App
