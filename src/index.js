import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login"; // pastikan ada komponen Login

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
