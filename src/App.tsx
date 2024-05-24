import Brands from "./components/Brands";
import DealsWrap from "./components/DealsWrap";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div className="app-container">
      <NavigationBar />
      <Header />
      <div id="body-wrapper">
        <DealsWrap />
        <Brands/>
      </div>
    </div>
  );
};

export default App;
