import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function ModelsShowcase() {
  const models = [
    { name: 'Airblast atomisation', description: 'Basic Idea of Atomizers', image: '/Model1.png', padding: 'p-4' , size: 'w-full h-96' },
    { name: 'CAD', description: 'CAD model initialisation', image: '/newmodel.jpeg', padding: 'p-8', size: 'w-full h-96' },
    { name: '3D MODEL', description: 'Isometric View', image: '/model_3d.jpeg', padding: 'p-6' , size: 'w-full h-96' },
    { name: 'CFD', description: 'DPM method simulation', image: '/simulation.jpg' , padding: 'p-6', size: 'w-full h-96' }, // Added size property for CFD
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
        <div className="flex justify-center space-x-12">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="max-w-xs text-center transition-transform transform hover:scale-105 hover:shadow-lg" // Added hover effects
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`${model.padding} bg-white rounded-lg shadow-md`}>
                <img src={model.image} alt={model.name} className={`w-full max-h-full object-cover rounded-lg mb-6 ${model.size || ''}`} /> {/* Apply size if defined */}
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