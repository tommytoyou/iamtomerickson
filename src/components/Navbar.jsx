import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks";
import { navigation } from "../data/siteData";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? "nav-blur shadow-lg shadow-navy-950/10 dark:shadow-navy-950/30"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="font-display text-xl md:text-2xl font-bold text-navy-900 dark:text-white hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              Tom<span className="text-accent-500">.</span>Erickson
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="relative text-navy-600 dark:text-navy-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors py-2 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800 hover:text-accent-500 dark:hover:text-accent-400 transition-all"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800 transition-all"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800 transition-all"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy-50 dark:bg-navy-900 shadow-2xl md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Panel Header */}
                <div className="flex items-center justify-between p-4 border-b border-navy-200 dark:border-navy-700">
                  <span className="font-display text-lg font-bold text-navy-900 dark:text-white">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800 transition-all"
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    {navigation.map((item, i) => (
                      <motion.li
                        key={item.name}
                        custom={i}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <a
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block px-4 py-3 rounded-lg text-navy-700 dark:text-navy-200 hover:bg-accent-500/10 hover:text-accent-500 dark:hover:text-accent-400 transition-all font-medium"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Panel Footer */}
                <div className="p-4 border-t border-navy-200 dark:border-navy-700">
                  <p className="text-sm text-navy-500 dark:text-navy-400 text-center">
                    Tom<span className="text-accent-500">.</span>Erickson
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
