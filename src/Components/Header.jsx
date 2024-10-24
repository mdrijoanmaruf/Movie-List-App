import { NavLink, useNavigate } from 'react-router-dom'; // useNavigate instead of Navigate
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    return navigate(`/search/movie?q=${searchQuery}`); // navigate to search route
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        
        {/* Title */}
        <div className="text-2xl font-bold">
          <NavLink to="/">Movie List</NavLink>
        </div>

        {/* Nav Links - for larger screens */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex items-center gap-7 text-white">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/movies/popular" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/movies/top" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/movies/upcoming" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
              >
                Upcoming
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              name='search'
              autoComplete='off'
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-black bg-gray-200"
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900">
              <FiSearch className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Search and Hamburger Icons for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none mr-3">
            <FiSearch className="w-6 h-6" />
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-7 text-white bg-gray-800 py-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
                onClick={handleLinkClick} // Close menu on click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/movies/popular" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
                onClick={handleLinkClick} // Close menu on click
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/movies/top" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
                onClick={handleLinkClick} // Close menu on click
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/movies/upcoming" 
                className={({ isActive }) => 
                  isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300 transition"
                }
                onClick={handleLinkClick} // Close menu on click
              >
                Upcoming
              </NavLink>
            </li>
            <li>
              <form onSubmit={handleSearchSubmit} className="relative w-full px-4">
                <input
                  type="text"
                  name='search'
                  placeholder="Search"
                  autoComplete='off'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black">
                  <FiSearch className="w-5 h-5 -mx-9" />
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
