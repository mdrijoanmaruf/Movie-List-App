import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Section 1: Brand/Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Movie List</h3>
            <p className="text-sm text-gray-400">
              Discover your favorite movies, track top-rated films, and stay updated on the latest releases. 
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Movie List. All rights reserved.
            </p>
          </div>

          {/* Section 2: Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow me</h3>
            <div className="flex space-x-6">
              <a href="https://github.com/mdrijoanmaruf" aria-label="GitHub" className="hover:text-gray-400 transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mdrijoanmaruf/" aria-label="LinkedIn" className="hover:text-gray-400 transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/md.rijoanmaruf" aria-label="Facebook" className="hover:text-gray-400 transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/rijoanmaruf/" aria-label="Instagram" className="hover:text-gray-400 transition">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Section 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact me</h3>
            <p className="text-sm text-gray-400">Email: rijoanmaruf@gamil.com</p>
            <p className="text-sm text-gray-400">Phone: +8801813606468</p>
            <p className="text-sm text-gray-400">Address: Road-7, Block-C, Bahundhara-R/A , Dhaka</p>
          </div>
          
        </div>

        {/* Bottom Section: Developer Information */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">Developed by <span className="font-bold"><a href="https://rijoan.com" className="hover:underline">Md Rijoan Maruf</a></span></p>
          <p className="text-sm">Project built with React & TailwindCSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
