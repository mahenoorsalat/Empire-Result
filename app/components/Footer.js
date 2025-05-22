"use client"

import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="grid md:grid-cols-4 gap-8 justify-center">
                        <div>
                            <img src="/Logo.png" alt="Logo" className="h-12 mb-10 w-auto" />
                            <div className="flex space-x-4 mb-4">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jeremiah-guarnaccia/" target="_blank" rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.21h.07c.56-1.06 1.94-2.21 4-2.21 4.28 0 5.07 2.82 5.07 6.49V24h-5V14.62c0-2.26-.04-5.17-3.15-5.17-3.15 0-3.63 2.46-3.63 5.01V24h-5V8z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/empireresults/" target='_blank' className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm.315 4.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-sm text-gray-500">©2023 All Rights Reserved</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Pages</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="/" className="hover:text-[#022729]">Home</a></li>
                                <li><a href="/About" className="hover:text-[#022729]">How It Work</a></li>
                                <li><a href="/Portfolio" className="hover:text-[#022729]">Portfolio</a></li>
                                <li><a href="/contact" className="hover:text-[#022729]">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Service</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>Social Media Management</li>
                                <li>Organic Growth Systems</li>
                                <li>Paid Ads & Lead Gen</li>
                                <li>Branding & Design</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Strategy</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>AI Content Production</li>
                                <li>Local SEO & Google</li>
                                <li>Reputation Management</li>
                                <li>Analytics & Reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="text-center pb-6">
                <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-400">
                    © 2025 <a href="#" className="hover:underline">Empire Results</a>. All Rights Reserved.
                    Developed by <a href="https://www.linkedin.com/in/mahenoor-salat/" target="_blank" className="text-blue-700 hover:underline">Mahenoor Salat</a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
