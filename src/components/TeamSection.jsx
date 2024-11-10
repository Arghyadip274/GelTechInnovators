import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
function TeamSection() {
  const teamMembers = [
    { name: "Arghadeep Das", role: "Leader and CAD", bio: "Leader with a passion for innovation and luxury design.", image:'src/assets/0a5c2352-a672-4dcf-be3d-4e0e56c656c6.jpeg' },
    { name: "Arghyadip Mondal", role: "Web team & CFD", bio: "Expert engineer with a focus on perfection and performance.", image: 'src/assets/arghyadip.jpeg'},
    { name: "Ishaan Sharma", role: "Documentation & CFD", bio: "Brings creative vision to life with elegance and style.", image:  'src/assets/d0b88ac3-02da-4318-a2ff-4a806b79eae1.jpeg'},
    { name: "Kalavakunta Kalyani", role: "CAD & CFD", bio: "Brings creative vision to life with elegance and style.", image: "/path/to/robert.jpg" },
    { name: "Subhro Halder", role: "CFD & CAD", bio: "Brings creative vision to life with elegance and style.", image: "/path/to/robert.jpg" },
    { name: "Milan Kumar", role: "CAD", bio: "Brings creative vision to life with elegance and style.", image: "/path/to/robert.jpg" },
    { name: "Satvik Jaiswal", role: "CFD", bio: "Brings creative vision to life with elegance and style.", image: "/path/to/robert.jpg" },
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
      <section className="py-16 bg-gray-100">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Meet the Team
        </motion.h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="max-w-xs text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animation
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-gray-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamSection;