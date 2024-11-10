// src/components/ModelsShowcase.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
function ModelsShowcase() {
  const models = [
    { name: 'Airblast atomisation', description: 'Basic Idea of Atomizers', image: 'src/assets/Model1.png', padding: 'p-4' },
    { name: 'IDEA', description: 'Hand Drawn idea', image:'src/assets/1370ee66-bf6d-4f4c-bbc8-c88afc7d23f9.jpeg' , padding: 'p-6' },
    { name: 'CAD', description: 'CAD model initialisation', image:'../src/assets/WhatsApp Image 2024-10-22 at 17.10.22.jpeg' , padding: 'p-8' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="p-10 bg-gray-100"
      >
        <h2 className="text-3xl font-semibold text-center mb-10">Our Models</h2>
        <div className="flex justify-center space-x-12"> {/* Increased space-x-8 to space-x-12 */}
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="max-w-xs text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              // Removed the whileHover effect
            >
              <div className={`${model.padding} bg-white rounded-lg shadow-md`}>
                <img src={model.image} alt={model.name} className="w-full max-h-full object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-2xl font-bold">{model.name}</h3>
              <p className="text-gray-700">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ModelsShowcase;