import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationsPage from "./pages/ReservationsPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </Router>
    </UserContextProvider>
  );
}

export default App;
