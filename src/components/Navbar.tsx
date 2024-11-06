import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faUser, 
  faDownload,
  faPhone,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Quiénes Somos', href: '#about' },
    { name: 'Nuestras Canchas', href: '#courts' },
    { name: 'Reservas', href: '#booking' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          {/* Top Info Bar */}
          <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-gray-200/10">
            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +56 9 54143067
              </span>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                Av. Real 1405, Rahue Alto
              </span>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                Lunes a Viernes: 16:00 - 0:00 | Sábado: 15:00 - 0:00 | Domingo: 15:00 a 23:00
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Main Navbar */}
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold"
            >
              <span className={`${isScrolled ? 'text-emerald-600 dark:text-emerald-400' : 'text-white'}`}>
                Matices
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium hover:text-emerald-500 transition-colors ${
                    isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Iniciar Sesión</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Descargar App</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl"
            >
              <FontAwesomeIcon 
                icon={isOpen ? faTimes : faBars} 
                className={isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-4">
                  <button className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Iniciar Sesión</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition">
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Descargar App</span>
                  </button>
                  <div className="pt-4">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;