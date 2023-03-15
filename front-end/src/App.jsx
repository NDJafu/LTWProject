import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";  

function App() {
  return (
      <Router>
       <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>} />
            <Route path="search" element={<SearchResult/>}/>
            <Route path="detail" element={<ProductDetail/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Route> 
        <Route path="admin" element={<Admin/>}/>
       </Routes>
     </Router>
     
  );
}

export default App;
