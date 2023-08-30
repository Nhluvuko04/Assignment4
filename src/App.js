import "./App.css";
import CreateMembers from "./Components/CreateMembers";
import Home from "./Components/Home";
import UpdateMember from "./Components/UpdateMember";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMembers />} />
        <Route path="/edit/:id" element={<UpdateMember />} />
      </Routes>
    </Router>
  );
}

export default App;
