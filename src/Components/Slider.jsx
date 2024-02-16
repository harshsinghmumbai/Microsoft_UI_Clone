const Slider = () => {
  return (
    <>
      <div
        id="slider"
        className="flex flex-col lg:flex lg:flex-row lg:items-center lg:bg-[#f2f2f2] lg:h-[31rem]"
      >
        <div id="image" className="w-full lg:w-[60%] lg:h-full ">
          <img
            src="../src/assets/Slider.avif"
            alt=""
            className="h-full w-full object-contain lg:object-fill"
          />
        </div>
        <div
          id="container"
          className="p-5 md:border md:rounded-lg md:shadow-xl md:w-[96%] md:m-auto md:-mt-[3rem] md:bg-white lg:-mt-0 lg:w-[40%] lg:mb-0 lg:h-[12.50rem] lg:bg-[#f2f2f2] lg:shadow-none lg:border-0 shadow-md  "
        >
          <h1 className="text-2xl font-semibold mb-3 lg:text-3xl">Surface Pro 9</h1>
          <p className="text-base mb-5 lg:text-lg">
            Tablet versatility and laptop power — all in one ultra-portable
            device
          </p>
          <button className="bg-[#0067b8] text-white font-semibold p-2 rounded-sm mb-5 lg:text-base ">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
