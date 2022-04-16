import { Navbar } from "./components/navbar/Navbar";
import { ShoppingCard } from "./components/shoppingCart/ShoppingCart";
import { DataProvider } from "./context/DataContext";
const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <ShoppingCard />
      </DataProvider>
    </div>
  );
};

export default App;
