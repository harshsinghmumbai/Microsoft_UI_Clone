import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className="border-b-[1px] shadow-sm w-full lg:w-[90%] lg:m-auto h-14 p-1 md:p-3">
        <div className="flex justify-between items-center h-full px-1">
          <div
            id="navigate"
            className="flex justify-between items-center space-x-1"
          >
            <RxHamburgerMenu className="w-6 h-6 md:hidden" />
            <IoSearchSharp className="w-[2rem] h-[1.30rem] block md:hidden " />
          </div>
          <div className="md:flex md:items-center md:order-first">
            <img
              id="logo"
              src="../src/assets/logo.png"
              alt=""
              className="w-28 h-7 cursor-pointer "
            />
            <nav id="navbar" className="hidden md:block ml-3 lg:ml-7 ">
              <ul className="flex justify-between space-x-3 text-sm ">
                <li className="md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Microsoft 365
                </li>
                <li className="md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Teams
                </li>
                <li className="md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Copilot
                </li>
                <li className="md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Windows
                </li>
                <li className="hidden sm:block md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Surface
                </li>
                <li className="hidden lg:block md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Xbox
                </li>
                <li className="hidden lg:block md:hover:underline md:underline-offset-[5px] md:decoration-2">
                  Support
                </li>
                <li className="flex items-center lg:hidden md:hover:underline md:underline-offset-[5px] md:decoration-2 ">
                  More
                  <span className="pt-1 ml-[2px]">
                    <IoIosArrowDown className="" />
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          <div
            id="user"
            className="flex justify-between items-center space-x-3"
          >
            <div className="hidden md:block text-sm ">
              <p className="flex justify-center items-center md:hover:underline md:underline-offset-[5px] md:decoration-2">
                All Microsoft
                <span className="pt-1 ml-[2px]">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
            <p className="xl:flex xl:justify-center xl:items-center">
              <span className="text-sm hidden xl:block md:hover:underline md:underline-offset-[5px] md:decoration-2">
                Search
              </span>
              <IoSearchSharp className="w-[2rem] h-[1.30rem] hidden md:block" />
            </p>
            <p className="xl:flex xl:justify-center xl:items-center xl:space-x-2">
              <span className="text-sm hidden xl:block md:hover:underline md:underline-offset-[5px] md:decoration-2">
                Cart
              </span>
              <FaCartShopping className="w-5 h-5" />
            </p>
            <p className="xl:flex xl:justify-center xl:items-center xl:space-x-2">
              <span className="text-sm hidden xl:block md:hover:underline md:underline-offset-[5px] md:decoration-2">
                Sign in
              </span>
              <RiAccountCircleFill className="w-6 h-6" />
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
