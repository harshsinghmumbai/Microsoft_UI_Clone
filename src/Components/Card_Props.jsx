import { IoIosArrowForward } from "react-icons/io";

const Card_Props = (props) => {
  const { title, images, description,more } = props;
  return (
    <>
      <div id="cards" className="mb-6 sm:mb-0">
        <div className="w-full rounded-md m-auto">
          <img
            src={images}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-center lg:object-center"
          />
          <div className="p-1">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="mt-3 text-base">{description}</p>

            <button type="button" className="btn-design">
              {more}
              <span className="ml-1 pt-1">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_Props;
