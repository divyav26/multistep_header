import { useState } from "react";
import { megaMenu } from "../data/data";
import {
  FiMenu,
  FiShoppingBag,
  FiX,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop
  const [activeCategory, setActiveCategory] = useState<string>("men");

  // Mobile accordion states
  const [openCategory, setOpenCategory] = useState<string>("");
  const [openSection, setOpenSection] = useState<string>("");

  const categories = ["men", "women", "kids", "beauty"];

  return (
    <div className="relative z-40">
      {/* ================= NAVBAR HEADER ================= */}
      <div className="w-full h-20 bg-white shadow-xl flex justify-between items-center px-5 md:px-10">
        {/* Mobile Menu Icon */}
        {isMobileMenuOpen ? (
          <div className="flex justify-between items-center">
            <FiX
              className="text-2xl md:hidden cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenCategory("");
                setOpenSection("");
              }}
            />
          </div>
        ) : (
          <>
            <FiMenu
              className="text-2xl md:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
            <div className="flex justify-between items-center gap-8 md:hidden">
              <FaRegUser className="h-6 w-6" />
              <FaRegHeart className="h-6 w-6" />
              <FiShoppingBag className="h-6 w-6" />
            </div>
          </>
        )}

        {/* Desktop Categories */}
        <nav className="hidden md:flex items-center gap-8 w-[40%]">
          {categories.map((category) => (
            <p
              key={category}
              className={`font-semibold text-lg uppercase cursor-pointer ${
                activeCategory === category ? "border-b-2 border-red-500" : ""
              }`}
              onMouseEnter={() => {
                setActiveCategory(category);
                setIsMegaMenuOpen(true);
              }}
            >
              {category}
            </p>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex w-[30%] relative items-center">
          <CiSearch className="absolute left-2 h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className="border py-2 px-8 w-full rounded-sm bg-gray-50"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex flex-col items-center text-sm">
            <FaRegUser className="h-6 w-6" />
            Profile
          </div>
          <div className="flex flex-col items-center text-sm">
            <FaRegHeart className="h-6 w-6" />
            Wishlist
          </div>
          <div className="flex flex-col items-center text-sm">
            <FiShoppingBag className="h-6 w-6" />
            Bag
          </div>
        </div>
      </div>

      {/* ================= DESKTOP MEGA MENU ================= */}
      {isMegaMenuOpen && (
        <div
          className="hidden md:grid absolute top-20 w-full h-[80vh] bg-white shadow-2xl p-10 grid-cols-4 gap-6"
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          {megaMenu[activeCategory as keyof typeof megaMenu]?.map((section) => (
            <div key={section.heading}>
              <p className="text-red-500 font-semibold mb-2">
                {section.heading}
              </p>
              <ul>
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="py-1 cursor-pointer hover:underline"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ================= MOBILE MENU (MYNTRA STYLE) ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center gap-4 p-4">
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenCategory("");
                setOpenSection("");
              }}
            />
          </div>

          {/* Category → Section → Items */}
          {categories.map((category) => (
            <div key={category} className="">
              {/* CATEGORY */}
              <div
                className="flex justify-between items-center px-4 py-4 font-semibold uppercase cursor-pointer"
                onClick={() => {
                  setOpenCategory(openCategory === category ? "" : category);
                  setOpenSection("");
                }}
              >
                <span>{category}</span>
                {openCategory === category ? (
                  <FiChevronDown />
                ) : (
                  <FiChevronRight />
                )}
              </div>

              {/* SUB-CATEGORY */}
              {openCategory === category &&
                megaMenu[category as keyof typeof megaMenu]?.map((section) => (
                  <div key={section.heading} className="border-t">
                    <div
                      className="flex justify-between items-center px-6 py-4 cursor-pointer"
                      onClick={() =>
                        setOpenSection(
                          openSection === section.heading ? "" : section.heading
                        )
                      }
                    >
                      <span className="font-medium">{section.heading}</span>
                      {openSection === section.heading ? (
                        <FiChevronDown />
                      ) : (
                        <FiChevronRight />
                      )}
                    </div>

                    {/* ITEMS */}
                    {openSection === section.heading && (
                      <ul className="pl-10 pb-4 text-gray-600">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="py-2 text-sm cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
