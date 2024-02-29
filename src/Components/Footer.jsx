import { GiEarthAmerica } from "react-icons/gi";
import { IoOptions } from "react-icons/io5";

const Footer = ({ lists }) => {
  const span_list = [
    { title: "Contact Microsoft" },
    { title: "Privacy" },
    { title: "Terms of use" },
    { title: "Trademarks" },
    { title: "About our ads" },
    { title: "© Microsoft 2024" },
  ];
  return (
    <>
      <footer className="w-full h-fit bg-[#f2f2f2] mt-14 ">
        <div className="sm:grid sm:grid-rows-2 sm:grid-cols-3 lg:flex">
          {lists.map((elem, i) => {
            const { heading, li_1, li_2, li_3, li_4, li_5 } = elem;
            return (
              <div id="container" key={i} className="p-7 space-y-2">
                <h3 className=" text-lg font-semibold text-[#786161]">
                  {heading}
                </h3>
                <ul className="text-sm text-[#616190] space-y-3">
                  <li>{li_1}</li>
                  <li>{li_2}</li>
                  <li>{li_3}</li>
                  <li>{li_4}</li>
                  <li>{li_5}</li>
                </ul>
              </div>
            );
          })}
        </div>

        <div id="bottom" className="p-7 lg:flex lg:justify-between">
          <div className="lg:flex">
            <p className="flex justify-start items-center  text-[#616190] mb-2">
              <GiEarthAmerica />
              <span className="">English (India)</span>
            </p>
            <p className="flex justify-start items-center  text-[#616190] mb-4">
              <IoOptions />
              <span className="">Your Privacy Choices</span>
            </p>
          </div>
          <p className="text-xs space-x-1 sm:space-x-5 sm:flex sm:justify-end">
            {span_list.map((elem, i) => {
              const { title } = elem;
              return (
                <span key={i} className="">
                  {title}
                </span>
              );
            })}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
