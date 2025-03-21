import { useState } from "react";
import lothirionLogo from "../../assets/lothirion_logo.png";

// Navigation items structure matching Accenture's navigation
const navItems = [
  {
    title: "What we do",
    items: [
      { name: "AI & Generative AI", href: "/services/ai" },
      { name: "Cloud", href: "/services/cloud" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "Data & Analytics", href: "/services/data-analytics" },
      { name: "Digital Engineering", href: "/services/digital-engineering" },
      { name: "Sustainability", href: "/services/sustainability" },
    ],
  },
  {
    title: "What we think",
    href: "/insights",
  },
  {
    title: "Who we are",
    items: [
      { name: "About Us", href: "/about/company" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Sustainability", href: "/about/sustainability" },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-0">
              <img src={lothirionLogo} alt="" className="h-12 w-auto" />
              <span className="text-white text-3xl font-medium -ml-1">Lothirion</span>
            </a>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) =>
              item.items ? (
                <div key={item.title} className="relative group">
                  <button className="text-white text-sm hover:text-sky-500 transition-colors flex items-center py-2">
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-black border border-gray-800 shadow-lg z-50">
                    <div className="p-4">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-gray-300 hover:text-sky-500 text-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.title}
                  href={item.href || "/"}
                  className="text-white text-sm hover:text-sky-500 transition-colors py-2"
                >
                  {item.title}
                </a>
              )
            )}
          </nav>

          {/* Desktop Search & Country Selector */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search button */}
            <button className="text-white hover:text-sky-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            {/* Country selector */}
            <div className="relative group">
              <button className="text-white hover:text-sky-500 transition-colors flex items-center">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  USA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-black border border-gray-800 shadow-lg z-50">
                <div className="p-2">
                  {["USA", "Canada", "UK", "Germany", "France", "Japan", "Australia"].map((country) => (
                    <a
                      key={country}
                      href="#"
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900"
                    >
                      {country}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-75" onClick={() => setMobileMenuOpen(false)}>
              <div
                className="fixed inset-y-0 right-0 max-w-xs w-full bg-black shadow-xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-0">
                    <img src={lothirionLogo} alt="" className="h-8 w-auto" />
                    <span className="text-white text-lg font-medium -ml-1">Lothirion</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="space-y-8">
                  {navItems.map((item) => (
                    <div key={item.title} className="py-2">
                      {item.items ? (
                        <>
                          <p className="text-base font-medium text-white mb-3">{item.title}</p>
                          <div className="ml-4 space-y-3">
                            {item.items.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-gray-300 hover:text-sky-500 text-sm"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </>
                      ) : (
                        <a href={item.href || "/"} className="block text-base font-medium text-white">
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto pt-8 border-t border-gray-800 mt-8">
                  <button className="flex items-center text-white hover:text-sky-500 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    USA
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-3 w-3"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
