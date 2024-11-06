import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFutbol, 
  faCalendarAlt, 
  faClock,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import { BookingData } from './BookingPage';

interface BookingSummaryProps {
  bookingData: BookingData;
  currentStep: number;
  onStepClick: (step: number) => void;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  bookingData,
  currentStep,
  onStepClick
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-CL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Resumen de Reserva
      </h3>

      <div className="space-y-6">
        {/* Cancha seleccionada */}
        {bookingData.court && (
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faFutbol} className="text-emerald-500 text-xl" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {bookingData.court.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {bookingData.court.type}
                  </p>
                </div>
                <button
                  onClick={() => onStepClick(1)}
                  className="text-emerald-500 hover:text-emerald-600"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
              <p className="mt-1 text-lg font-semibold text-emerald-500">
                {formatPrice(bookingData.court.price)}
              </p>
            </div>
          </div>
        )}

        {/* Fecha seleccionada */}
        {bookingData.date && (
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 text-xl" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Fecha
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(bookingData.date)}
                  </p>
                </div>
                <button
                  onClick={() => onStepClick(2)}
                  className="text-emerald-500 hover:text-emerald-600"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hora seleccionada */}
        {bookingData.time && (
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faClock} className="text-purple-500 text-xl" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Hora
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {bookingData.time}
                  </p>
                </div>
                <button
                  onClick={() => onStepClick(3)}
                  className="text-emerald-500 hover:text-emerald-600"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Total y botón de confirmación */}
      {bookingData.court && bookingData.date && bookingData.time && (
        <div className="mt-8 space-y-4">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800 dark:text-white">
                Total
              </span>
              <span className="text-xl font-bold text-emerald-500">
                {formatPrice(bookingData.court.price)}
              </span>
            </div>
          </div>

          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Confirmar Reserva
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default BookingSummary;