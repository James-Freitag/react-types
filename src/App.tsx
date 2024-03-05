// components
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="userdetails" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
