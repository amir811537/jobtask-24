const Footer = () => {

  return (
<footer className="text-white px-8 py-6 bg-[#12141D] ">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-8 md:mb-0 bg-[#12141D]">
            <h3 className="text-lg font-bold mb-4 bg-[#12141D]">Company</h3>
            <p className="mb-2 bg-[#12141D]">About</p>
            <p className="mb-2 bg-[#12141D]">Features</p>
            <p className="mb-2 bg-[#12141D]">Works</p>
            <p className="bg-[#12141D]">Career</p>
        </div>
        <div className="mb-8 md:mb-0 bg-[#12141D]">
            <h3 className="text-lg font-bold mb-4 bg-[#12141D]">Help</h3>
            <p className="mb-2 bg-[#12141D]">Customer Support</p>
            <p className="mb-2 bg-[#12141D]">Delivery Details</p>
            <p className="mb-2 bg-[#12141D]">Terms & Conditions</p>
            <p className="bg-[#12141D]">Privacy Policy</p>
        </div>
        <div className="mb-8 md:mb-0 bg-[#12141D]">
            <h3 className="text-lg font-bold mb-4 bg-[#12141D]">Resources</h3>
            <p className="mb-2 bg-[#12141D]">Free eBooks</p>
            <p className="mb-2 bg-[#12141D]">Development Tutorial</p>
            <p className="mb-2 bg-[#12141D]">How to - Blog</p>
            <p className="bg-[#12141D]">Youtube Playlist</p>
        </div>
        <div className="mb-8 md:mb-0 bg-[#12141D]">
            <h3 className="text-lg font-bold mb-4 bg-[#12141D]">Links</h3>
            <p className="mb-2 bg-[#12141D]">Free eBooks</p>
            <p className="mb-2 bg-[#12141D]">Development Tutorial</p>
            <p className="mb-2 bg-[#12141D]">How to - Blog</p>
            <p className="bg-[#12141D]">Youtube Playlist</p>
        </div>
  
    </div>
    <p className="text-center mt-8">&copy;  2024 - All rights reserved.</p>
</footer>
  );
};

export default Footer;