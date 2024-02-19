const Card_Container = ({ datas }) => {
  console.log(datas);
  return (
    <>
      {datas.map((elem) => {
        return (
          <div className="w-[300px] rounded-md border" key={elem.id}>
            <img
              src={elem.images}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                About Macbook
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>

              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white"
              >
                Read
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card_Container;
