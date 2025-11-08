import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Image from "../assets/images/Resturant.jpg";

export default function OurStorySection() {
  return (
    <section
      id="ourstory"
      className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <FadeInWhenVisible>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-600">
              Our Story
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Since opening our first restaurant in 1955, McDonald’s has been
              bringing people together through good food and good times. What
              started as a small burger stand has grown into a global community,
              serving millions every day with a smile.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe in quality ingredients, local partnerships, and creating
              moments that make life a little tastier. Because at McDonald’s, it’s
              not just about the meal — it’s about the memories made along the way.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Right: Image */}
        <FadeInWhenVisible>
          <motion.img
            src={Image}
            alt="Friends sharing McDonald's meal"
            className="rounded-3xl shadow-lg w-full md:w-1/2 object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
