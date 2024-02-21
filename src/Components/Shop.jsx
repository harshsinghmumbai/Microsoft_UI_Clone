const Shop = () => {
  return (
    <>
      <div className="p-3 w-full">
        <div className="w-full rounded-md m-auto mt-10">
          <img
            src="../src/assets/shop.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-center"
          />
          <div className="p-4 ">
            <h1 className="inline-flex items-center  text-2xl font-semibold ">
              About Macbook
            </h1>
            <p className="mt-3 text-gray-600 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button
              type="button"
              className="text-base font-semibold mt-3 bg-[#0067b8] text-white p-1 px-3 "
            >
              Shop Xbox Series S
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
