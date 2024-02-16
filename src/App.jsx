import Header from "./Components/Header";
import Promo from "./Components/Promo";
import Slider from "./Components/Slider";

const App = () => {
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
    </>
  );
};

export default App;
