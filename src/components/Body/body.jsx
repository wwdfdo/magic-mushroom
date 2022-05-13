import Banner from "../Banner/Banner";
import Header from "../Header/header";

const Body = () => {
  return (
    <div className="bg-hero-image w-full h-[100%] bg-no-repeat bg-cover pb-1">
      <Header />
      <Banner />
    </div>
  );
};

export default Body;
