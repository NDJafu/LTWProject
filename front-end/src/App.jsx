import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";
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
        </Route>
       </Routes>
     </Router>
     
  );
}

export default App;
