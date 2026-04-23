import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Portfolio</h2>
          <p className="text-gray-400">আপনার ডিজিটাল স্বপ্নকে বাস্তবে রূপান্তর করতে আমি সর্বদা প্রস্তুত।</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#pricing" className="hover:text-blue-500 transition">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-2xl hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-red-500 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Your Name.</p>
      </div>
    </footer>

  );
};

export default Footer;