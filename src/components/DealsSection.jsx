import { motion } from "framer-motion";
import Burger from "../assets/images/2Burger.webp";
import Big from "../assets/images/BigMeal.webp";

const deals = [
  {
    title: "2 for $5 Mix & Match",
    desc: "Choose your favorites and save big. Limited time only!",
    img: Burger,
  },
  {
    title: "Free Fries Friday",
    desc: "Download the app and get free fries every Friday with any $1 purchase.",
    img: Big,
  },
];

export default function DealsSection() {
  return (
    <motion.section id="deals" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#DA291C] mb-12">
          Hot Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {deals.map((deal, i) => (
            <motion.div
              key={i}
              className="bg-[#FFF4E0] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center items-center bg-white py-6">
                <img
                  src={deal.img}
                  alt={deal.title}
                  className="w-2/3 h-auto object-contain"
                />
              </div>
              <div className="p-6 text-left space-y-2">
                <h3 className="text-2xl font-bold text-[#DA291C]">
                  {deal.title}
                </h3>
                <p className="text-gray-700">{deal.desc}</p>
                <button className="mt-4 px-6 py-3 bg-[#DA291C] text-white font-semibold rounded-full hover:bg-[#b71c1c] transition">
                  Get This Deal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
