import React from 'react';
import logo from '../src/assets/image.png';

function Navbar() {
  return (
    <section className="relative">
                <header className="bg-black fixed top-0 left-0 w-full z-[100]">

    <nav className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-999"> {/* Changed position to fixed and added top-0, left-0, right-0 */}
      <div className="mx-auto flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-[3rem]" />
      </div>

      <div className="flex items-center justify-center mt-6 mx-auto">
        <div className="flex justify-between w-2/3">
          <a href="www.google.com" className="text-black block text-gray-300 hover:text-blue-800 ">About us</a>
          <a href="#" className="text-black block text-gray-300  hover:text-blue-800">Modus Operandi</a>
          <a href="#" className="text-black block text-gray-300  hover:text-blue-800">B2B Campus Clientele</a>
          <a href="#" className="text-black block text-gray-300  hover:text-blue-800">Base Location</a>
          <a href="#" className="text-black block text-gray-300  hover:text-blue-800">Inquiries</a>
        </div>
      </div>
    </nav>
    </header>
    </section>
  );
}

export default Navbar;
