import { IoIosArrowForward } from "react-icons/io";

const Card_Container = ({ datas }) => {
  // console.log(datas);
  return (
    <>
      {datas.map((elem) => {
        return (
          <div className="w-full rounded-md m-auto mt-10 sm:mt-0" key={elem.id}>
            <img
              src={elem.images}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-center lg:object-cover "
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-2xl font-semibold ">
                {elem.title}
              </h1>
              <p className="mt-3 text-base text-gray-600">{elem.description}</p>

              <button type="button" className="btn-design">
                {elem.more}
                <span className="ml-1 pt-1">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card_Container;
