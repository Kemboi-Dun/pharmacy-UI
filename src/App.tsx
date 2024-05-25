import Flavour from "./components/Flavour";
import BabyFood from "./components/BabyFood";
import Brands from "./components/Brands";
import DealsWrap from "./components/DealsWrap";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import TrendingProducts from "./components/TrendingProducts";

const App = () => {
  return (
    <div className="app-container">
      <NavigationBar />
      <Header />
      <div id="body-wrapper">
        <DealsWrap />
        <Brands/>
        <TrendingProducts/>
        <BabyFood/>
        <Flavour/>
      </div>
    </div>
  );
};

export default App;
