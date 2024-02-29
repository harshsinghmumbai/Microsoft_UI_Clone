import Card_Container from "./Components/Card_Container";
import Header from "./Components/Header";
import Promo from "./Components/Promo";
import Slider from "./Components/Slider";
import Card_items1 from "./API/Card_items1";
import { useState } from "react";
import Shop from "./Components/Shop";
import Card_Items from "./Components/Card_Items";
import Promo_loop from "./API/Promo_loop";
import Social_media from "./Components/Social_media";
import Footer from "./Components/Footer";
import Footer_container_items from "./API/Footer_container_item";

const App = () => {
  const [data, setdata] = useState(Card_items1);
  const [value, setvalue] = useState(Promo_loop);
  const [list, setlist] = useState(Footer_container_items);
  return (
    <>
      <div className="max-w-[1480px] m-auto ">
        <Header />
      </div>
      <div className="px-1 max-W ">
        <Slider />
      </div>
      <div className="max-w-[1100px] m-auto">
        <Promo values={value} />
      </div>
      <div className="p-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 lg:flex max-W ">
        <Card_Container datas={data} />
      </div>
      <div className="p-3 max-W ">
        <Shop />
      </div>
      <div className="max-W">
        <Card_Items />
        <Social_media />
      </div>
      <div className="max-W">
        <Footer lists={list} />
      </div>
    </>
  );
};

export default App;
