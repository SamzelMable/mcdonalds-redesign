export default function Footer() {
  return (
    <footer className="bg-red-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About McDonald’s</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-300">Our Story</a></li>
            <li><a href="#menu" className="hover:text-yellow-300">Our Food</a></li>
            <li><a href="#deals" className="hover:text-yellow-300">Deals</a></li>
            <li><a href="#app" className="hover:text-yellow-300">Mobile App</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Nutrition Info</a></li>
            <li><a href="#" className="hover:text-yellow-300">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300 text-2xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300 text-2xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-300 text-2xl">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-300 text-2xl">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-red-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} McDonald’s Clone. Designed for demo purposes.
      </div>
    </footer>
  );
}
