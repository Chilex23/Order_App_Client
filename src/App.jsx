import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import AppLayout from "./components/appLayout/applayout";
import HomePage from "./pages/homepage";
import AdminDashboard from "./pages/adminDashboad";
import FoodCategory from "./pages/foodCategory";
import Food from "./pages/food";
import Cart from "./pages/cart";
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
            <Route path="/category/:foodCategory" element={<FoodCategory />} />
            <Route path="/food/:foodId" element={<Food />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
