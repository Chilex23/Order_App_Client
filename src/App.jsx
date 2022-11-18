import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import AppLayout from "./components/appLayout/applayout";
import HomePage from "./pages/homepage";
import AdminDashboard from "./pages/adminDashboad";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
