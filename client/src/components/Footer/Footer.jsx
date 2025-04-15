import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentyear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-16 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* About Us */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm leading-relaxed">
                            We specialize in creating unique, high-performance web apps that connect people and bring them closer together. Our mission is to help businesses and individuals thrive in the digital age.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="/privacy-policy" className="hover:underline transition duration-300 ease-in-out">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:underline transition duration-300 ease-in-out">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:underline transition duration-300 ease-in-out">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:underline transition duration-300 ease-in-out">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-sm leading-relaxed">Email: support@emorro.com</p>
                        <p className="text-sm leading-relaxed">Phone: +1 (800) 123-4567</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6 text-white hover:text-pink-200 transition duration-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6 text-white hover:text-pink-200 transition duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-6 h-6 text-white hover:text-pink-200 transition duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-indigo-400 pt-6 mt-10 text-center text-sm">
                    <p>© {currentyear} Emorro. All Rights Reserved.</p>
                    <p className="text-gray-100">
                        Built with ❤️ by BlackAlphaLabs. <span className="hidden sm:inline">Designed to empower your digital presence.</span>
                    </p>
                    <p className="text-gray-100 mt-2 text-xs">
                        Engineered by <a target='_blank' href="https://blackalphalabs.vercel.app/" className="text-indigo-300 hover:underline">BlackAlphaLabs</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
