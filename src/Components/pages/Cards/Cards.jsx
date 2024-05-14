import img1 from '../../../assets/image 318.png';
import img2 from '../../../assets/image 318(1).png';
import img3 from '../../../assets/image 319.png';
import img4 from '../../../assets/image 320.png';
import img5 from '../../../assets/image 320.png';
import img6 from '../../../assets/image 320.png';
import img7 from '../../../assets/image 320.png';
import img8 from '../../../assets/image 320.png';

const Cards = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div>
      <h1 className="lg:text-5xl text-2xl text-center text-white font-semibold">54 exciting writing tools</h1>
      <p className="text-center text-white my-5">AI engines take information from various sources and read <br /> them like a human would do.</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-3">
        {images.map((img, index) => (
          <div key={index} className="bg-[#282A37] rounded-lg p-6 h-28 flex gap-4 justify-center items-center">
            <img className="bg-[#282A37]" src={img} alt={`Image ${index + 1}`} />
            <div>
              <h3 className="text-xl text-white bg-[#282A37]">Blog Headlines</h3>
              <p className="text-white bg-[#282A37]">Write a better blog title with our A.I tool.</p>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center text-white my-5'>
      See all 54 available tools
      </div>
      <hr className="h-px my-5 border border-[#252835] w-full" />

    </div>
  );
};

export default Cards;
