import Flavour from "./components/Flavour";
import BabyFood from "./components/BabyFood";
import Brands from "./components/Brands";
import DealsWrap from "./components/DealsWrap";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import TrendingProducts from "./components/TrendingProducts";
import Testimonials from "./components/Testimonials";

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
        <Testimonials/>
      </div>
    </div>
  );
};

export default App;
