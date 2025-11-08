import { motion } from "framer-motion";
import Ice from "../assets/images/Ice.webp";
import Pork from "../assets/images/Pork.webp";


const menuItems = [
  {
    name: "Big Mac",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-BigMac",
    desc: "The iconic burger with two all-beef patties and special sauce.",
  },
  {
    name: "Pulled Pork Burger",
    img: Pork,
    desc: "Tender pulled pork, tangy BBQ sauce, and crisp slaw in a soft bun.",
  },
  {
    name: "McFlurry Oreo",
    img: Ice,
    desc: "Creamy vanilla soft serve blended with Oreo cookie pieces.",
  },
];

export default function MenuSection() {
  return (
    <motion.section id="menu" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#DA291C] mb-12">
          Our Classics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
