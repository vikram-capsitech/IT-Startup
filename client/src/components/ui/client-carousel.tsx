import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo?: string;
  industry: string;
}

interface ClientCarouselProps {
  clients: Client[];
}

export default function ClientCarousel({ clients }: ClientCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / 6));
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const getVisibleClients = () => {
    const itemsPerSlide = 6;
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return clients.slice(start, end);
  };

  const totalSlides = Math.ceil(clients.length / 6);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {getVisibleClients().map((client, index) => (
            <motion.div
              key={`${client.name}-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="professional-card p-6 h-24 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300">
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.industry}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}