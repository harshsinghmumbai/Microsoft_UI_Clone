const Promo = ( values ) => {
  console.table(values);
  return (
    <>
      <div className="w-[90%] m-auto rounded-lg sm:grid sm:grid-rows-2 sm:grid-cols-2 sm:gap-6 sm:p-3 space-y-8 sm:space-y-0 mt-10 md:grid-rows-2 md:grid-cols-3 lg:flex lg:justify-evenly mb-10">
        <div id="promo-1" className="">
          <img
            src="../src/assets/promo-1.svg"
            alt=""
            className=" m-auto w-10 h-10"
          />
          <p className="text-center text-[#0067b8] font-semibold underline decoration-2 ">
            Choose your Microsoft 365
          </p>
        </div>
        <div id="promo-2" className="">
          <img
            src="../src/assets/promo-2.svg"
            alt=""
            className=" m-auto w-10 h-10"
          />
          <p className="text-center text-[#0067b8] font-semibold underline decoration-2 ">
            Shop Xbox games and consoles
          </p>
        </div>
        <div id="promo-1" className="">
          <img
            src="../src/assets/promo-1.svg"
            alt=""
            className=" m-auto w-10 h-10"
          />
          <p className="text-center text-[#0067b8] font-semibold underline decoration-2 ">
            {" "}
            Get Windows 11
          </p>
        </div>
        <div id="promo-3" className="md:col-span-3">
          <img
            src="../src/assets/promo-3.svg"
            alt=""
            className=" m-auto w-10 h-10"
          />
          <p className="text-center text-[#0067b8] font-semibold underline decoration-2 ">
            Explore Surface devices
          </p>
        </div>
      </div>
    </>
  );
};

export default Promo;
