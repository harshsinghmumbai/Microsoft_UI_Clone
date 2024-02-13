import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className="border-b-[1px] shadow-sm w-screen h-14 p-1 md:p-3 max-w-[1480px] m-auto">
        <div className="flex justify-between items-center h-full px-1">
          <div
            id="navigate"
            className="flex justify-between items-center space-x-1"
          >
            <RxHamburgerMenu className="w-6 h-6 md:hidden" />
            <IoSearchSharp className="w-[2rem] h-[1.30rem] block md:hidden " />
          </div>
          <div id="logo" className="md:flex md:items-center md:order-first">
            <img src="../src/assets/logo.png" alt="" className="w-28 h-7 " />
            <nav className="hidden md:block ml-3">
              <ul className="flex justify-between space-x-3 text-sm">
                <li>Microsoft 365</li>
                <li>Teams</li>
                <li>Copilot</li>
                <li>Windows</li>
                <li className="hidden sm:block">Surface</li>
                <li className="hidden lg:block">Xbox</li>
                <li className="hidden lg:block">Support</li>
                <li className="flex items-center lg:hidden">
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
              <p className="flex justify-center items-center">
                All Microsoft
                <span className="pt-1 ml-[2px]">
                  <IoIosArrowDown />
                </span>
              </p>
            </div>
            <IoSearchSharp className="w-[2rem] h-[1.30rem] hidden md:block" />
            <FaCartShopping className="w-5 h-5" />
            <RiAccountCircleFill className="w-6 h-6" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
