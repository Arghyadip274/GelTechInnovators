// src/components/HeroSection.jsx
function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/S0022112024002799_figAb.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-10 flex flex-col  items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Why Us?</h1>
        <p className="text-xl mt-4">Because perfection exists</p>
        <h2 className="text-4xl font-bold">Problem Solved</h2>
        <div className="text-left text-5xl mt-4">
          Atomisation is difficult, further for gels but not for us.
          Trials going on.
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
