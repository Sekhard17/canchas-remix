import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFutbol,
  faCalendarCheck,
  faHistory,
  faBell
} from '@fortawesome/free-solid-svg-icons';

const ManagerDashboard = () => {
  const modules = [
    {
      title: 'Estado de Canchas',
      icon: faFutbol,
      description: 'Gestionar estado y mantenimiento',
      link: '/manager/courts'
    },
    {
      title: 'Reservas Activas',
      icon: faCalendarCheck,
      description: 'Ver y gestionar reservas actuales',
      link: '/manager/bookings/active'
    },
    {
      title: 'Historial',
      icon: faHistory,
      description: 'Ver historial completo de reservas',
      link: '/manager/bookings/history'
    },
    {
      title: 'Notificaciones',
      icon: faBell,
      description: 'Ver cambios y actualizaciones',
      link: '/manager/notifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Panel de Encargado
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                  <FontAwesomeIcon 
                    icon={module.icon} 
                    className="text-2xl text-emerald-600 dark:text-emerald-400" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {module.description}
                  </p>
                  <a
                    href={module.link}
                    className="text-emerald-500 hover:text-emerald-600 font-medium"
                  >
                    Acceder →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;