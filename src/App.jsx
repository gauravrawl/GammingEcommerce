import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop from "./pages/Shop/Shop";
import Notification from "./pages/Notification";
import Cart from './pages/Cart/Cart';
import { ShopContextProvider } from "./Context/ShopContext";
import Nopage from "./pages/Nopage";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} /> 
            <Route path="/Notification" element={<Notification />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="*" element={<Nopage/>} /> 
          </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;