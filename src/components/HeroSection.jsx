import { motion } from "framer-motion";
import BigMac from "../assets/images/BigMac.webp";

export default function HeroSection() {
  return (
    <motion.section
      className="relative flex flex-col md:flex-row items-center justify-between py-32 px-8 bg-[#FFC72C] text-[#27251F] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Delicious Moments, <br />
          <span className="text-[#DA291C]">Made Fresh.</span>
        </h1>
        <p className="text-lg">
          Burgers, fries, and happiness—served your way, anytime.
        </p>
        <button className="mt-6 px-8 py-4 bg-[#DA291C] text-white font-semibold rounded-full shadow-lg hover:bg-[#b71c1c]">
          Order Now
        </button>
      </div>

      <motion.img
        src={BigMac}
        className="w-[400px] md:w-[500px] mt-10 md:mt-0 drop-shadow-2xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
}
