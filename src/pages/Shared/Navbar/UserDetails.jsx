import  { useState } from 'react';

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <div
        className="cursor-pointer"
        onClick={toggleNavbar}
      >
        {/* Your profile icon image goes here */}
        <img
          src="profile-icon.png"
          alt="Profile Icon"
          className="w-8 h-8 rounded-full"
        />
      </div>

      {/* Navbar */}
      {isNavbarOpen && (
        <div className="absolute top-12 right-0 bg-white border rounded shadow-md p-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Users
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
               Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Order History
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
