import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { WorkShop } from "./components/shop/workshop/WorkShop";
import { ShoppingCard } from "./components/shoppingCart/ShoppingCart";
import { DataProvider } from "./context/DataContext";

const App = () => {

  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <ShoppingCard />
        <WorkShop />
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
