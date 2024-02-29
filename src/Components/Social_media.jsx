import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

const Social_media = () => {
  return (
    <>
      <div className="">
        <div className="flex px-3 mt-5 w-full sm:mt-11">
          <p className="mb-1 mr-3"> Follow Microsoft</p>
          <div className="flex justify-start items-center space-x-6 px-2">
            <FaFacebookF className="text-2xl" />
            <FaXTwitter className="text-2xl" />
            <AiFillYoutube className="text-2xl" />
          </div>
        </div>
        <div id="button" className="flex justify-end mt-5 px-3">
          <button className="bg-[#d8d8d8]  p-1 px-3 flex justify-center items-center sm:p-2 sm:px-4">
            <IoIosArrowRoundUp className="text-2xl" />
            <span className="text-base font-semibold  "> Back to Top</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Social_media;
