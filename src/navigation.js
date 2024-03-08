import React from "react";
import logo from "../src/assets/image.png";

function Navbar() {
  return (
    <section className="relative">
      <header className="bg-black fixed top-0 left-0 w-full z-[100]">
        <nav className="bg-transparent shadow-md py-4 fixed top-0 left-0 right-0 z-999 flex flex-row justify-between">
          {" "}
          {/* Changed position to fixed and added top-0, left-0, right-0 */}
          <div className=" ml-10 flex justify-start max-w-5xl items-center">
            <img src={logo} alt="Logo" className="h-[3rem]" />
          </div>
          <div className="flex flex-row items-center justify-end mt-6 mr-10">
            <div className="flex  flex-row justify-end gap-4 ">
              <a
                href="www.google.com"
                className="text-black block text-gray-300 hover:text-blue-800 "
              >
                About us
              </a>
              <a
                href="#"
                className="text-black block text-gray-300  hover:text-blue-800"
              >
                Modus Operandi
              </a>
              <a
                href="#"
                className="text-black block text-gray-300  hover:text-blue-800"
              >
                B2B Campus Clientele
              </a>
              <a
                href="#"
                className="text-black block text-gray-300  hover:text-blue-800"
              >
                Base Location
              </a>
              <a
                href="#"
                className="text-black block text-gray-300  hover:text-blue-800"
              >
                Inquiries
              </a>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
