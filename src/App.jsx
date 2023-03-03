import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";
import { AppLayout } from "./components/appLayout";
import HomePage from "./pages/homepage";
import AdminDashboard from "./pages/adminDashboad";
import FoodCategory from "./pages/foodCategory";
import Food from "./pages/food";
import Cart from "./pages/cart";
import SignInSignUp from "./pages/signinSignup";
import OrderSuccess from "./pages/orderSuccess";
import { selectUser } from "./redux/features/user";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

Modal.setAppElement("#root");

function InappPrivateRoute() {
  const user = useSelector(selectUser);
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} state={"Please login to view your dashboard"} />
  );
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<InappPrivateRoute />}>
              <Route path="/dashboard" element={<AdminDashboard />} />
            </Route>
            <Route path="/category/:foodCategory" element={<FoodCategory />} />
            <Route path="/food/:foodId" element={<Food />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<SignInSignUp />} />
            <Route path="/orderSuccess" element={<OrderSuccess />} />
          </Routes>
        </AppLayout>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
