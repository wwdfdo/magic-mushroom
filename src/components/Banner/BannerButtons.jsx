import RightArrow from "./RightArrow";

const BannerButtons = () => {
  return (
    <div>
      <button className="bg-[#2012e6] border-2 border-[#2012e6] text-white py-3 px-8 mr-5 rounded-lg text-xl font-semibold">
        View on OpenSea
        <span className="ml-5">
          <RightArrow />
        </span>
      </button>
      <button className="bg-white py-3 px-8 rounded-lg text-xl font-semibold">
        Join Discord
      </button>
    </div>
  );
};

export default BannerButtons;
