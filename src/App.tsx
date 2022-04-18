import { Navbar } from "./components/navbar/Navbar";
import { WorkShopItem } from "./components/shop/workshopItem/WorkShopItem";
import { ShoppingCard } from "./components/shoppingCart/ShoppingCart";
import { DataProvider } from "./context/DataContext";
const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <ShoppingCard />
        <WorkShopItem />
      </DataProvider>
    </div>
  );
};

export default App;
