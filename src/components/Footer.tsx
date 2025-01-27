import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    return (
  <footer className="bg-black flex satoshi justify-between px-4 md:px-[54px] lg:px-[184px] items-center text-white">
    <div className="w-dvw px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <div>
          <h3 className="integral text-xl font-bold mb-6">SPARTAN PARTS</h3>
          <p className="text-gray-400 mb-4">Your trusted source for premium GPU solutions and gaming hardware.</p>
          <div className="flex items-center gap-4 mb-4">
            <Phone size={20} className="text-gray-400" />
            <span className="text-gray-400">1-800-SPARTAN</span>
          </div>
          <div className="flex satoshi items-center gap-4 mb-4">
            <Mail size={20} className="text-gray-400" />
            <span className="text-gray-400">support@spartanparts.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={20} className="text-gray-400" />
            <span className="text-gray-400">123 Tech Street, Silicon Valley, CA</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg integral font-bold mb-6">QUICK LINKS</h3>
          <ul className="space-y-3">
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg integral font-bold mb-6">CATEGORIES</h3>
          <ul className="space-y-3">
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Gaming GPUs</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Workstation Cards</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Mining Solutions</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">AI Accelerators</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Cooling Solutions</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg integral font-bold mb-6">NEWSLETTER</h3>
          <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
            />
            <button className="bg-white integral text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="mt-6">
            <h4 className="text-sm integral font-bold mb-4">FOLLOW US</h4>
            <div className="flex gap-4">
              <a href="" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Spartan Parts. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Use</a>
            <a href="" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    );
}

export default Footer;