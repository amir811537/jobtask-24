/* eslint-disable react/no-unescaped-entities */
import image from '../../../assets/bgremove.png';

const Testimonial = () => {
  return (
<div>
<div className='lg:flex justify-center items-center gap-3'>
       <div className="lg:my-40 my-14 relative w-[60%] mx-auto lg:ml-8">
      <div className="absolute top-56  hidden lg:block  left-[50%] transform -translate-x-1/4 z-10">
        <img className='bg-white w-56 h-24 rounded-lg' src={image} alt="style not loaded" style={{ padding: 0 }} />
      </div>

      <div className="lg:w-[406px]  lg:h-[450px] bg-white shadow-xl rounded-md flex flex-col justify-center items-center relative z-0">
        <div className="p-4 rounded-md bg-white">
          <h2 className="text-black font-bold bg-[#FFFFFF]">Results</h2>
          <p className="text-[#818488] bg-white">Here's what our AI came up with.</p>
          <div className="text-black p-1 bg-white rounded-md">
            <p className="bg-gray-50 rounded-md p-2">
              Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.
            </p>
            <p className="bg-gray-50 p-2">
              Agitate: You have no idea how much sales tax to charge your customers in each state.
            </p>
            <p className="bg-gray-50 p-2">
              Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!
            </p>
          </div>
          <div className="text-black p-2 bg-white rounded-md">
            <p className="bg-gray-50 rounded-md p-2">
              Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.
            </p>
            <p className="bg-gray-50">
              Agitate: Sales tax is a complicated, confusing
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='w-[40%] mx-auto'>
        <h1 className='lg:text-4xlxl text-2xl font-semibold text-white'>Create content efficiently <br /> and quickly with great AI <br /> writing tools</h1>
   <p className='text-gray-50 font-normal  my-5'>150k+ users. No Credit Card Required. Pro designs and <br /> writing at no cost. Start for free. Ai Writer Tool | Generate <br /> text for ecom, social media, website, sales, blogs etc.</p>
   
   <button className= ' my-5 gredient-button'>
   Start 14 Days Free Trial
   </button>
    </div>
 </div>





 <div className='lg:flex  justify-between items-center gap-52'>

 <div className='max-w-md mx-auto lg:text-left text-center'>
        <h1 className='lg:text-3xl text-2xl font-semibold text-white'>Write what you want to<br /> convey through clear, &<br />authentic writing</h1>
   <p className='text-gray-50 font-normal  my-5'>AI-Writer is the most accurate content generation <br /> platform and writing tool that helps you transform <br /> your text into a completely personalized.</p>
   
   <button className= ' my-5 gredient-button'>
   Start 14 Days Free Trial
   </button>
    </div>

       <div className="lg:my-40 my-14 relative max-w-xl mx-auto ">
  

      <div className="lg:w-[600px] w-fit lg:h-[450px]  bg-white shadow-xl rounded-md  m-4 flex flex-col justify-center items-center">
      <div className='flex justify-evenly'>
       <div className='p-4 bg-white'>
       <p className='text-black hover:cursor-pointer bg-white'>
        Blog Outline
        </p >
        <p  className='text-black hover:cursor-pointer bg-white' >
        Blog Intro</p>
        <p  className='text-black hover:cursor-pointer bg-white'>
        Blog Conclusion
        </p>
        <p  className='text-black hover:cursor-pointer bg-white'>
        AIDA
        </p>
        <p  className='text-black hover:cursor-pointer bg-white'>
        PAS
        </p>
        <p  className='text-black hover:cursor-pointer bg-white'>
        Content Rewriter
        </p>
       </div>
       <div className="p-4 rounded-md bg-white">
          <h2 className="text-black font-bold bg-[#FFFFFF]">Results</h2>
          <p className="text-[#818488] bg-white">Here's what our AI came up with.</p>
          <div className="text-black p-1 bg-white rounded-md">
            <p className="bg-gray-50 rounded-md p-2">
              Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.
            </p>
            <p className="bg-gray-50 p-2">
              Agitate: You have no idea how much sales tax to charge your customers in each state.
            </p>
            <p className="bg-gray-50 p-2">
              Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!
            </p>
          </div>
          <div className="text-black p-2 bg-white rounded-md">
            <p className="bg-gray-50 rounded-md p-2">
              Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.
            </p>
            <p className="bg-gray-50">
              Agitate: Sales tax is a complicated, confusing
            </p>
          </div>
        </div>


      </div>
      </div>
    </div>

 </div>








</div>
  );
};

export default Testimonial;
