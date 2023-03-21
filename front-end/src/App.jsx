import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AdminLayout from "./components/Admin/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
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
