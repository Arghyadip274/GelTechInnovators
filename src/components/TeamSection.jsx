  import { motion } from 'framer-motion';
  import { useEffect, useRef, useState } from 'react';
  function TeamSection() {
    const teamMembers = [
      { name: "Arghadeep Das", role: "Market Research and Provisional patent", bio: "A visionary leader skilled in market analysis, driving innovation in luxury design to ensure solutions exceed industry standards.", image:'/0a5c2352-a672-4dcf-be3d-4e0e56c656c6.jpeg' },
      { name: "Arghyadip Mondal", role: "Website design ", bio: "An engineer with a passion for design, creating stunning, user-friendly websites that reflect excellence in both performance and aesthetics.", image: '/arghyadip.jpeg'},
      { name: "Ishaan Sharma", role: "CFD", bio: "Blending creativity with technical expertise to transform complex ideas into elegant designs that push the boundaries of innovation.", image:  '/d0b88ac3-02da-4318-a2ff-4a806b79eae1.jpeg'},
      { name: "Kalavakunta Kalyani", role: "CAD ", bio: "A creative CAD designer whose precision and artistic flair result in functional yet visually captivating designs.", image: "/kalyani.jpeg" },
      { name: "Subhro Halder", role: "CFD ", bio:  "A problem solver who leverages CFD skills to develop groundbreaking solutions that enhance performance and efficiency.", image: "/subro.jpeg" },
      { name: "Milan Kumar", role: "CAD", bio: "A skilled CAD designer who visualizes concepts and creates detailed designs that align perfectly with project goals.", image: "/milan.jpg" },
      { name: "Satvik Jaiswal", role: "CFD", bio:  "Driven by a passion for fluid dynamics to tackle complex challenges, resulting in innovative CFD solutions that benefit the team.", image: "/satvik.jpg" },
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