import { IoIosArrowForward } from "react-icons/io";

const Card_Props = (props) => {
  return (
    <>
      <div id="cards" className="mb-6">
        <div className="w-[300px] rounded-md m-auto">
          <img
            src={props.images}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-1">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <p className="mt-3 text-base">{props.description}</p>

            <button type="button" className="btn-design">
              {props.more}
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
