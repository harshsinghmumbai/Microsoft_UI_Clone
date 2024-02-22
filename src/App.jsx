import Card_Container from "./Components/Card_Container";
import Header from "./Components/Header";
import Promo from "./Components/Promo";
import Slider from "./Components/Slider";
import Card_items1 from "./API/Card_items1";
import { useState } from "react";
import Shop from "./Components/Shop";

const App = () => {
  const [data, setdata] = useState(Card_items1);
  // console.log(data)
  return (
    <>
      <div className="max-w-[1480px] m-auto ">
        <Header />
      </div>
      <div className="px-1 max-w-[1600px] m-auto">
        <Slider />
      </div>
      <div className="max-w-[1100px] m-auto">
        <Promo />
      </div>
      <div className="p-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 lg:flex max-w-[1600px] m-auto">
        <Card_Container datas={data} />
      </div>
      <div className="p-3 max-w-[1600px] m-auto">
        <Shop />
      </div>
    </>
  );
};

export default App;
