'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Cómo puedo empezar a vender en GlobalStore?',
    a: 'Simplemente crea una cuenta gratuita, ve a la sección de "Administrar Tienda" y comienza a subir tu inventario. Nuestro proceso es intuitivo y te guiará paso a paso.'
  },
  {
    q: '¿Qué métodos de pago son aceptados?',
    a: 'Aceptamos múltiples métodos de pago, incluyendo tarjetas de crédito/débito, transferencias bancarias y billeteras electrónicas populares de nuestra región.'
  },
  {
    q: '¿Cómo gestionan el envío de los productos?',
    a: 'Nos integramos con proveedores de logística locales para ofrecer opciones de envío en tiempo real con rastreo integrado. También puedes ofrecer recogidas locales.'
  },
  {
    q: '¿GlobalStore cobra comisión por cada venta?',
    a: 'Ofrecemos diferentes planes. El plan estándar cobra una pequeña tarifa plana por transacción, mientras que los planes pro tienen 0% de comisión.'
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 space-y-4">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Preguntas Frecuentes</h3>
      
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div 
            key={index}
            className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm"
            initial={false}
          >
            <motion.button
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              onClick={() => toggleOpen(index)}
              whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }} // Efecto hover (Eventos de mouse)
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg font-medium text-gray-200">{faq.q}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </motion.button>
            
            {/* AnimatePresence for Mostrar/Ocultar elements smoothly */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-0 text-gray-400">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
