const FooterMainSection = () => {
    return (
        // src/components/Footer.js
        <footer className="py-12 bg-white border-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Help Column */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-4">Help</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Delivery Information</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Make A Return</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Orders</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Submit A Fake</a></li>
                        </ul>
                    </div>

                    {/* My Account Column */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-4">My Account</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Login</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Register</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                        </ul>
                    </div>

                    {/* Pages Column */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-4">Pages</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Refer a Friend</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Gymshark Central</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Student Discount</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Training App</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Military Discount</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessibility Statement</a>
                            </li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Factory List</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Sustainability</a></li>
                        </ul>
                    </div>

                    {/* More About Gymshark Column */}
                    <div>
                        <h3 className="text-lg font-bold uppercase mb-4">More About Gymshark</h3>
                        <div className="space-y-4">
                            {/* Gymshark Central Blog Card */}
                            <a
                                href="#"
                                className="block bg-black text-white p-4 rounded-md flex justify-between items-center hover:bg-gray-800"
                            >
                                <div>
                                    <span className="block text-sm uppercase">Gymshark</span>
                                    <span className="block text-lg font-semibold">Central Blog</span>
                                </div>
                            </a>

                            {/* 15% Student Discount Card */}
                            <a
                                href="#"
                                className="block bg-gray-100 text-black p-4 rounded-md flex justify-between items-center hover:bg-gray-200"
                            >
                                <div>
                                    <span className="block text-lg font-semibold">15% Student Discount</span>
                                </div>
                            </a>

                            {/* Email Sign Up Card */}
                            <a
                                href="#"
                                className="block bg-gray-100 text-black p-4 rounded-md flex justify-between items-center hover:bg-gray-200"
                            >
                                <span className="text-lg font-semibold">Email Sign Up</span>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterMainSection;