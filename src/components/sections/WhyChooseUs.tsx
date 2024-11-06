import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved,
  faLocationDot,
  faClock,
  faWifi,
  faParking,
  faShower
} from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  const features = [
    {
      icon: faShieldHalved,
      title: "Seguridad Garantizada",
      description: "Instalaciones monitoreadas 24/7 y personal de seguridad"
    },
    {
      icon: faLocationDot,
      title: "Ubicación Privilegiada",
      description: "Dos sedes estratégicamente ubicadas en Osorno"
    },
    {
      icon: faClock,
      title: "Horarios Flexibles",
      description: "Abierto todos los días con amplios horarios"
    },
    {
      icon: faWifi,
      title: "WiFi Gratuito",
      description: "Conexión de alta velocidad en todas las instalaciones"
    },
    {
      icon: faParking,
      title: "Estacionamiento",
      description: "Amplio estacionamiento gratuito y seguro"
    },
    {
      icon: faShower,
      title: "Vestuarios",
      description: "Vestuarios equipados con duchas y lockers"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">¿Por Qué Elegirnos?</h2>
          <p className="section-subtitle">
            Descubre por qué somos la mejor opción para disfrutar del fútbol en Osorno
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 p-4 rounded-xl">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;