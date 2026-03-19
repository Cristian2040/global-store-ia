'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const brands = [
  { id: 1, name: 'ElectroTech', desc: 'Dispositivos y gadgets de última generación' },
  { id: 2, name: 'HomeStyle', desc: 'Decoración y muebles para tu hogar' },
  { id: 3, name: 'FreshMarket', desc: 'Alimentos orgánicos y frescos del día' },
  { id: 4, name: 'SportFit', desc: 'Equipamiento deportivo profesional' },
  { id: 5, name: 'UrbanWear', desc: 'Moda y tendencias urbanas exclusivas' }
];

export function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === brands.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === brands.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? brands.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900/40 rounded-3xl py-12 px-8 border border-gray-800 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">Marcas Destacadas</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={prevSlide} className="border-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextSlide} className="border-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="relative h-[200px] w-full flex items-center justify-center">
        {/* AnimatePresence gestiona la entrada y salida concurrente de componentes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full max-w-2xl text-center bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
          >
            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              {brands[currentIndex].name}
            </h4>
            <p className="text-gray-300 text-lg">
              {brands[currentIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-8">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
