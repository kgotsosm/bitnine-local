import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import SignIn from "./pages/SignIn.jsx";
import MainContent from "./pages/MainContent.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = 'http://localhost:8001'
axios.defaults.withCredentials = true

export default function App() {

  return (
      <>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/register" element={<Landing />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </Router>
      </>
  );
}
