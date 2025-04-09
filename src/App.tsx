import LogoNav from "./components/LogoNav/LogoNav.tsx";
import SaleAlert from "./components/SaleAlert/SaleAlert.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";
import Slogan from "./components/Slogan/Slogan.tsx";
import ShopCollection from "./components/ShopCollection/ShopCollection.tsx";

function App() {
  return (
    <>
      <SaleAlert />
      <LogoNav />
      <Carousel />
      <Slogan />
      <ShopCollection />
    </>
  );
}

export default App;
