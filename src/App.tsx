import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { WorkShop } from "./components/shop/workshop/WorkShop";
import { ShoppingCard } from "./components/shoppingCart/ShoppingCart";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Checkout } from "./components/checkout/checkout/Checkout";
import { Confirmation } from "./components/checkout/confirmation/Confirmation";

const App = () => {

  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Navbar />
          <ShoppingCard />
          <Routes>
            <Route path="/" element={<WorkShop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/confirmation" element={<Confirmation />} />
          </Routes>
          <Footer />
        </DataProvider>
      </div>
    </Router>
  );
};

export default App;
