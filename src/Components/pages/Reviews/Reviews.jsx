import personimg from '../../../assets/Ellipse 14(1).png';
import personimg2 from '../../../assets/Ellipse 14(2).png';
import personimg3 from '../../../assets/Ellipse 14.png';
import personimg4 from '../../../assets/Ellipse 15.png';
import personimg6 from '../../../assets/Ellipse 14(1).png';
import personimg7 from '../../../assets/Ellipse 14(2).png';
import personimg8 from '../../../assets/Ellipse 14.png';
import personimg5 from '../../../assets/Ellipse 15.png';

import { FaTwitter } from "react-icons/fa";

const Reviews = () => {
  const personsimg = [personimg, personimg2, personimg3, personimg4, personimg6, personimg5, personimg7, personimg8];

  return (
 <div>
       <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-4">
      {personsimg.map((person, index) => (
        <div key={index} className="font-sans rounded-md border px-6 py-4 bg-white max-w-md">
          <div className="flex bg-white items-center">
            <img className='bg-white' src={person} alt={`Person ${index + 1}`} />
            <div className="flex bg-white flex-col ml-4">
              <a className="font-bold bg-white text-black" href="#">Emily Jane Morgan</a>
              <span className="text-grey bg-white">@MorganEmilyJane</span>
            </div>
            <span className='ml-auto'>
              <FaTwitter className='text-xl bg-white' />
            </span>
          </div>
          <div className="mt-3 mb-1 leading-normal bg-white text-lg">
            You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
          </div>
          <div className="bg-white text-[#0EA5E9]">#another</div>
        </div>
      ))}
      
    </div>
    <hr className="h-px my-10 border border-[#252835] w-full" />

 </div>
  );
};

export default Reviews;
