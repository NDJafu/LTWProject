import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AdminLayout from "./components/Admin/AdminLayout";
import ProfileDetail from "./pages/ProfileDetail";
import Account from "./pages/Account";
import PersonalInfo from "./components/Profile/PersonalInfo";
import AddressBook from "./components/Profile/AddressBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-account" element={<ProfileDetail />}>
            <Route index />
            <Route path="" element={<Account />}>
              <Route path="profile" element={<PersonalInfo />} />
              <Route path="address-book" element={<AddressBook />} />
            </Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="posts" />
          <Route path="products" />
          <Route path="orders" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
