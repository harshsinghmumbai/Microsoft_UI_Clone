const Card_Container_1 = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold px-5 mb-4 mt-16">For business</h1>
      <div id="cards" className="">
        <div className="w-[300px] rounded-md m-auto">
          <img
            src="../src/assets/cards_2.1.avif"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-1">
            <h1 className="text-xl font-semibold">
              Surface for Business
            </h1>
            <p className="mt-3 text-base">
              No matter what you do, there’s a Surface to help you do it.
            </p>

            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_Container_1;
