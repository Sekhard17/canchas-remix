import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFutbol,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faFutbol} className="text-2xl text-emerald-400" />
              <span className="text-2xl font-bold text-white">Matices</span>
            </div>
            <p className="text-gray-400">
              Las mejores canchas de fútbol en Osorno, donde la pasión por el deporte se vive al máximo.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-emerald-400" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-emerald-400" />
                <span>contacto@matices.cl</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-400" />
                <span>Avenida Real 1405, Rahue Alto</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-emerald-400 transition-colors">Quiénes Somos</a></li>
              <li><a href="#canchas" className="hover:text-emerald-400 transition-colors">Nuestras Canchas</a></li>
              <li><a href="#reservas" className="hover:text-emerald-400 transition-colors">Reservas</a></li>
            </ul>
          </div>

          {/* Social & App */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-2xl hover:text-emerald-400 transition-colors">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-2xl hover:text-emerald-400 transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-2xl hover:text-emerald-400 transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Matices. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-500">
            Desarrollado con ❤️ por Spectrum Code Software
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;