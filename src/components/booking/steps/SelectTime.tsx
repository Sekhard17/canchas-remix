import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface SelectTimeProps {
  selectedTime?: string;
  onSelect: (time: string) => void;
  onBack: () => void;
}

const SelectTime: React.FC<SelectTimeProps> = ({
  selectedTime,
  onSelect,
  onBack
}) => {
  // Horario de funcionamiento: 9:00 - 23:00
  const timeSlots = Array.from({ length: 14 }, (_, i) => {
    const hour = i + 9;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  const isTimeDisabled = (time: string) => {
    const [hours] = time.split(':').map(Number);
    const now = new Date();
    return now.getHours() >= hours;
  };

  const getTimeStatus = (time: string) => {
    // Simulamos disponibilidad (en producción esto vendría del backend)
    const random = Math.random();
    if (random < 0.2) return 'reserved';
    if (random < 0.3) return 'maintenance';
    return 'available';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Selecciona una Hora
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Elige el horario que prefieras
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {timeSlots.map((time) => {
            const status = getTimeStatus(time);
            const isDisabled = isTimeDisabled(time) || status !== 'available';
            const isSelected = selectedTime === time;

            return (
              <motion.button
                key={time}
                whileHover={!isDisabled ? { scale: 1.05 } : undefined}
                whileTap={!isDisabled ? { scale: 0.95 } : undefined}
                onClick={() => !isDisabled && onSelect(time)}
                disabled={isDisabled}
                className={`
                  relative p-4 rounded-xl flex flex-col items-center justify-center
                  transition-all duration-200
                  ${isSelected
                    ? 'bg-emerald-500 text-white ring-2 ring-emerald-500 ring-offset-2'
                    : isDisabled
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'hover:bg-emerald-50 dark:hover:bg-emerald-900 text-gray-700 dark:text-gray-300'
                  }
                `}
              >
                <FontAwesomeIcon 
                  icon={faClock} 
                  className={`text-xl mb-2 ${isSelected ? 'text-white' : 'text-emerald-500'}`}
                />
                <span className="font-semibold">{time}</span>
                
                {status !== 'available' && !isSelected && (
                  <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                    {status === 'reserved' ? 'Reservado' : 'Mantención'}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Disponible</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">No Disponible</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-100 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Reservado</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-lg font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Volver
        </button>
        
        <button
          disabled={!selectedTime}
          className={`px-8 py-3 rounded-lg font-semibold text-white
            ${selectedTime
              ? 'bg-emerald-500 hover:bg-emerald-600'
              : 'bg-gray-300 cursor-not-allowed'
            }`}
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default SelectTime;