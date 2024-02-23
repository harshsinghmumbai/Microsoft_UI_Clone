const Shop = () => {
  return (
    <>
      <div className="flex flex-col lg:px-10 w-full lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:bg-[#e6e6e6] xl:h-[600px]   ">
        <div className="w-full rounded-md m-auto mt-10 relative md:z-0 lg:w-[70%] lg:h-full">
          <img
            src="../src/assets/shop.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-center sm:h-[400px] lg:object-cover lg:w-full xl:h-[5b00px]"
          />
        </div>
        <div className="p-4 md:p-3 md:border md:rounded-lg md:shadow-xl md:w-[96%] md:m-auto lg:m-0 md:-mt-[3rem] lg:mt-0 md:z-10 md:bg-white lg:w-[30%] lg:bg-[#e6e6e6] lg:shadow-none">
          <h1 className=" text-2xl font-semibold xl:text-4xl">
            Xbox Series S
          </h1>
          <p className="mt-3 text-gray-600 text-base xl:text-lg ">
            Next-gen performance in the smallest Xbox ever
          </p>
          <button
            type="button"
            className="text-base font-semibold mt-3 bg-[#0067b8] text-white p-1 px-3 xl:text-lg"
          >
            Shop Xbox Series S
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
