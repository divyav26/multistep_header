import { useState } from "react";
import { megaMenu } from "../data/data";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  console.log(activeCategory);

  console.log(isMegaMenuOpen);

  return (
    <>
      <div className="z-40" onMouseLeave={() => setIsMegaMenuOpen(false)}>
        <div className="w-full h-[100px] bg-white text-black shadow-xl flex justify-between items-center px-10 relative z-10">
          <nav className=" flex items-center px-10 relative z-10 w-[40%] ">
            {["men", "women", "kids", "beauty"].map((category) => {
              return (
                <div
                  className={`w-full cursor-pointer 
                }`}

                  // onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <p
                    className={`font-semibold text-lg uppercase
                      activeCategory === category
                        ? "border-b border-red-500 w-10"
                        : ""
                    }`}
                    onMouseEnter={() => {
                      setActiveCategory(category);
                      setIsMegaMenuOpen(true);
                    }}
                  >
                    {category}
                  </p>
                </div>
              );
            })}
          </nav>
          <div className="w-[30%] relative  flex items-center gap-4">
            <CiSearch className="absolute left-2 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="border py-2 px-8 w-full rounded-sm bg-gray-50"
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <p className="flex flex-col items-center gap-1 text-lg font-medium">
              <FaRegUser className="h-6 w-6" />
              Profile
            </p>
            <p className="flex flex-col items-center gap-1 text-lg font-medium">
              <FaRegHeart className="w-6 h-6" />
              Wishlist
            </p>
            <p className="flex flex-col items-center gap-1 text-lg font-medium">
              <FiShoppingBag className="h-6 w-6" />
              Bag
            </p>
          </div>
        </div>

        {isMegaMenuOpen && (
          <div
            className="w-full h-[80vh] bg-white text-black shadow-2xl p-10 grid grid-cols-4 gap-4 absolute z-0"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            {activeCategory === "men" &&
              megaMenu.men.map((item) => {
                return (
                  <div className="flex flex-col">
                    <div className="text-red-500">{item.heading}</div>
                    <ul>
                      {item.items.map((item) => {
                        return (
                          <li key={item} className="py-1">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            {activeCategory === "women" &&
              megaMenu.women.map((item) => {
                return (
                  <div className="flex flex-col">
                    <div className="text-red-500">{item.heading}</div>
                    <ul>
                      {item.items.map((item) => {
                        return (
                          <li key={item} className="py-1">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            {activeCategory === "kids" &&
              megaMenu.kids.map((item) => {
                return (
                  <div className="flex flex-col">
                    <div className="text-red-500">{item.heading}</div>
                    <ul>
                      {item.items.map((item) => {
                        return (
                          <li key={item} className="py-1">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            {activeCategory === "beauty" &&
              megaMenu.beauty.map((item) => {
                return (
                  <div className="flex flex-col">
                    <div className="text-red-500">{item.heading}</div>
                    <ul>
                      {item.items.map((item) => {
                        return (
                          <li key={item} className="py-1">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}
