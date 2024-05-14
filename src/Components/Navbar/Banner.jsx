
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#12141D] text-center py-20">
        <h1 className="text-white text-4xl lg:text-6xl font-medium">Write better</h1>
        <h1 className="lg:text-6xl text-4xl font-medium mt-2"><span className="text-white">content for your</span></h1>
        <div className="relative">
          <h1 className="lg:text-6xl text-4xl font-medium mt-2">
            <span className="bg-gradient-to-l from-[#FFC947]  to-[#FC6739] text-transparent bg-clip-text">Facebook Ads</span>
          </h1>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[220px] lg:w-[360px] h-1 bg-gradient-to-l from-[#FFC947]  to-[#FC6739]"></div>
        </div>
       
        <p className="my-5 text-[#FAFAFA]">Artificial intelligence writting tool helps you create blogs, <br /> social media websites and much more.</p>
      <button className="gredient-button">Start 14 Days Free Trial</button>
<div className="my-2 flex items-center gap-2 mx-auto max-w-max ">
<FaRegCirclePlay className="bg-white" />
<button className="btn btn-ghost">Watch A Demo</button>

</div>
      </div>
    </div>
  );
};

export default Banner;
