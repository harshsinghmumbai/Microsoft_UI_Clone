import Card_Props from "./Card_Props";

const Card_Items = () => {
  const data1 = {
    title: "Surface for Business",
    images: "../src/assets/cards_2.1.avif",
    description:
      "  No matter what you do, there’s a Surface to help you do it. ",
    more: " Shop now",
  };
  const data2 = {
    title: "Get Microsoft Teams for free",
    images: "../src/assets/cards_2.2.webp",
    description:
      " Online meetings, chat and shared cloud storage – all in one place. ",
    more: "Sign up for free",
  };
  const data3 = {
    title: " Windows 11 for business",
    images: "../src/assets/cards_2.3.avif",
    description:
      "Designed for hybrid work. Powerful for employees.Consistent for IT. Secure for all.",
    more: "Learn more",
  };
  const data4 = {
    title: "Join the era of AI",
    images: "../src/assets/cards_2.4.jpg",
    description:
      "  Create, communicate, and code with the latest Microsoft AI solutions. ",
    more: "Explore AI solutions",
  };
  return (
    <>
      <h1 className="text-2xl font-semibold px-5 mb-4 sm:mb-0 mt-16 sm:mt-3 ">
        For business
      </h1>
      <div className="sm:grid sm:grid-row-2 sm:grid-cols-2 sm:gap-2 lg:flex lg:justify-evenly p-3">
        <Card_Props {...data1} />
        <Card_Props {...data2} />
        <Card_Props {...data3} />
        <Card_Props {...data4} />
      </div>
    </>
  );
};

export default Card_Items;
