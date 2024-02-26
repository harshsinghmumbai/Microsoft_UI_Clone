import Card_Container from "./Components/Card_Container";
import Header from "./Components/Header";
import Promo from "./Components/Promo";
import Slider from "./Components/Slider";
import Card_items1 from "./API/Card_items1";
import { useState } from "react";
import Shop from "./Components/Shop";
import Card_Items from "./Components/Card_Items";
import Promo_loop from "./API/Promo_loop";

const App = () => {
  const [data, setdata] = useState(Card_items1);
  const [value, setvalue] = useState(Promo_loop);
  return (
    <>
      <div className="max-w-[1480px] m-auto ">
        <Header />
      </div>
      <div className="px-1 max-w-[1600px] m-auto">
        <Slider />
      </div>
      <div className="max-w-[1100px] m-auto">
        <Promo values={value} />
      </div>
      <div className="p-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 lg:flex max-w-[1600px] m-auto">
        <Card_Container datas={data} />
      </div>
      <div className="p-3 max-w-[1600px] m-auto">
        <Shop />
      </div>
      <div className="">
        <Card_Items />
      </div>
    </>
  );
};

export default App;
