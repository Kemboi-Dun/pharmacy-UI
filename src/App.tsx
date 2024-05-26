import Flavour from "./components/Flavour";
import BabyFood from "./components/BabyFood";
import Brands from "./components/Brands";
import DealsWrap from "./components/DealsWrap";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import TrendingProducts from "./components/TrendingProducts";
import Testimonials from "./components/Testimonials";
import AdvertCards from "./components/AdvertCards";
import Download from "./components/Download";
import QandA from "./components/QandA";
import Footer from "./components/Footer";

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
        <AdvertCards/>
        <QandA/>
        <Download/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
