import { useState } from "react";
import { megaMenu } from "../data/data";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  console.log(activeCategory);

  console.log(isMegaMenuOpen);

  const handleCategory = (category: string) => {
    if (activeCategory === category) {
      setIsMegaMenuOpen(false);
      setActiveCategory("");
    } else {
      setActiveCategory(category);
      setIsMegaMenuOpen(true);
    }
  };

  return (
    <>
      <div>
        <nav className="w-full h-[50px] bg-white text-black shadow-xl flex items-center px-10 relative z-10 ">
          {["men", "women", "kids", "beauty"].map((category) => {
            return (
              <div
                className={`w-full cursor-pointer 
                }`}
                onClick={() => handleCategory(category)}
                key={category}
              >
                <p
                  className={`${
                    activeCategory === category
                      ? "border-b border-red-500 w-10"
                      : ""
                  }`}
                >
                  {category}
                </p>
              </div>
            );
          })}
        </nav>
        {isMegaMenuOpen && (
          <div className="w-full h-[80vh] bg-white text-black shadow-2xl p-10 grid grid-cols-4 gap-4 absolute z-0">
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
