import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-bg mt-28 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="space-y-2">
              <Link
                href="/all"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                All
              </Link>
              <Link
                href="/electronics"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Electronics
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <p className="text-gray-400 text-sm">© 2024 American</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
