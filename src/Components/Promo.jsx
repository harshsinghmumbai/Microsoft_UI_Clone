const Promo = ({ values }) => {
  // console.table(value);
  return (
    <>
      <div className="w-[90%] m-auto rounded-lg sm:grid sm:grid-rows-2 sm:grid-cols-2 sm:gap-6 sm:p-3 space-y-8 sm:space-y-0 mt-10 md:grid-rows-2 md:grid-cols-3 lg:flex lg:justify-evenly mb-10">
        {values.map((elem, i) => {
          // console.log(elem);
          return (
            <div key={i}>
              <img src={elem.images} alt="" className=" m-auto w-10 h-10" />
              <p className="text-center text-[#0067b8] font-semibold underline decoration-2 ">
                {elem.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Promo;
