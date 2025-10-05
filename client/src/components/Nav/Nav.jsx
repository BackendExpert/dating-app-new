import React, { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-pink-600 to-red-500 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="text-white text-2xl font-semibold">
                    <a href="/" className="hover:underline">Emorro</a>
                </div>

                {/* Menu (Desktop) */}
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="text-white hover:text-pink-200 transition">Home</a>
                    <a href="/AboutUs" className="text-white hover:text-pink-200 transition">About</a>
                    <a href="/Services" className="text-white hover:text-pink-200 transition">Services</a>
                    <a href="/ContactUs" className="text-white hover:text-pink-200 transition">Contact</a>
                    <a href="/PrivacyPolicy" className="text-white hover:text-pink-200 transition">Privacy Policy</a>
                    <a href="/TermsAndConditions" className="text-white hover:text-pink-200 transition">Terms</a>
                    <a href="/TermsAndConditions" className="text-white hover:text-pink-200 transition">Login</a>
                </div>

                {/* Social Media (Desktop) */}
                <div className="hidden md:flex space-x-4">
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

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-white">
                        {isMobileMenuOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Visible when screen size is small) */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="bg-gradient-to-r from-pink-600 to-red-500 p-4 space-y-4">
                    <a href="/" className="text-white block hover:text-pink-200 transition">Home</a>
                    <a href="/AboutUs" className="text-white block hover:text-pink-200 transition">About</a>
                    <a href="/Services" className="text-white block hover:text-pink-200 transition">Services</a>
                    <a href="/ContactUs" className="text-white block hover:text-pink-200 transition">Contact</a>
                    <a href="/PrivacyPolicy" className="text-white block hover:text-pink-200 transition">Privacy Policy</a>
                    <a href="/TermsAndConditions" className="text-white block hover:text-pink-200 transition">Terms</a>
                    <a href="/login" className="text-white block hover:text-pink-200 transition">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
