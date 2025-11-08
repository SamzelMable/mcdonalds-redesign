import { motion } from "framer-motion";
import AppImage from "../assets/images/App.webp";

export default function AppSection() {
  return (
    <motion.section
      id="app"
      className="relative bg-[#FFC72C] flex flex-col md:flex-row items-center justify-center px-8 overflow-hidden md:min-h-[90vh]"
    >
      {/* Content */}
      <div className="max-w-md text-center md:text-left space-y-6 z-10 mt-16 md:mt-0">
        <h2 className="text-4xl font-extrabold text-[#27251F]">
          Get Exclusive Offers on the McDonald’s App
        </h2>
        <p className="text-lg text-[#27251F]/90">
          Download the app today and earn rewards, find deals, and order your
          favorites in just a few taps.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
            <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
            />
        </div>
      </div>

      {/* App Image */}
      <motion.img
        src={AppImage}
        alt="McDonald's App"
        className="
          w-72 md:w-[420px] object-contain
          mt-12 md:mt-0
          md:absolute md:bottom-0 md:right-0 md:mr-12
        "
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
}
