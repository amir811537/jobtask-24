import logo1 from '../../assets/Logo(1).png';
import logo2 from '../../assets/Logo(2).png';
import logo3 from '../../assets/Logo(3).png';
import logo4 from '../../assets/Logo(4).png';
import logo5 from '../../assets/Logo(5).png';
import logo6 from '../../assets/Logo(6).png';
import logo7 from '../../assets/Logo(7).png';
import logo8 from '../../assets/Logo(8).png';
import Cards from './Cards/Cards';
import Prices from './Prices/Prices';
import Reviews from './Reviews/Reviews';
import Subscribe from './Subscribe/Subscribe';
import Testimonial from './testimonial/Testimonial';
import WebBuild from './web builder/WebBuild';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const HomeContent = () => {
  return (
    <div>
      <div className="my-10">
        <p className="text-white font-medium text-center">Trusted by nearly 5000+ paying customers</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="mx-auto" style={{ maxWidth: '150px' }} />
        ))}
      </div>
{/* testimonial  section  */}
<Testimonial></Testimonial>
<Cards></Cards>
<WebBuild></WebBuild>

<Reviews></Reviews>

<Prices></Prices>
<Subscribe></Subscribe>

    </div>
  );
};

export default HomeContent;
