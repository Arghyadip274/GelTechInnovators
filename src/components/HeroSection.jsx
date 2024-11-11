import { motion } from 'framer-motion';

function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/S0022112024002799_figAb.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-10 flex flex-col items-center justify-center h-full">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1 }} className="text-5xl font-bold">Why Us?</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1 }} className="text-xl mt-4">Because perfection exists</motion.p>
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1 }} className="text-4xl font-bold">Problem Solved</motion.h2>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1 }} className="text-left text-5xl mt-4">
          Atomisation is difficult, further for gels but not for us.
          Trials going on.
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;