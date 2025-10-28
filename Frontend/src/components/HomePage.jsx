import { Link } from "react-router";
import { MainLayout } from "./mainLayout.jsx"


export function HomePage() {
const token = localStorage.getItem("token");
console.log("homepage token = ",token);
  return (
    <>
        <MainLayout>
        
            {!token && <div className=" flex items-center justify-center bg-white mt-30">
        <div className="text-center max-w-xl px-6">
            <section>
                <div className="mb-12">
                <h1 className="text-6xl font-thin text-gray-800 mb-4">EcommAddToCart</h1>
                <div className="w-32 h-0.5 bg-green-500 mx-auto mb-8"></div>
                <h2 className="text-2xl font-light text-gray-600 leading-relaxed">
                    Hey there! Log in now and start filling up your cart with amazing products!
                </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/Login" 
                    className="group relative border-2 border-blue-500 text-blue-500 hover:text-white font-medium px-12 py-4 rounded-none transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                <Link to="/Signup"  
                    className="group relative border-2 border-green-500 text-green-500 hover:text-white font-medium px-12 py-4 rounded-none transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10">Sign Up</span>
                    <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                </div>
            </section>
            </div>
        </div>}

        <div className="hero-demo vh-100" style={{
            overflow: "hidden",
            height: "530px"
        }} >
            <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28  gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Technology to power</span>
                            <span className="block text-blue-500 xl:inline">your digital life</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            From cutting-edge smartphones to powerful laptops, discover the latest in technology. We bring you premium devices that enhance productivity and entertainment.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a  className="pointer-events-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                    Explore Tech
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a  className="pointer-events-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                                    Compare Products
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 ">
                        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation">
                                    <div className="text-4xl mb-2">📱</div>
                                    <div className="text-sm font-semibold text-gray-700">Smartphones</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation"  style={{ animationDelay: "0.5s" }}>
                                    <div className="text-4xl mb-2">💻</div>
                                    <div className="text-sm font-semibold text-gray-700">Laptops</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation"  style={{ animationDelay: "1s" }}>
                                    <div className="text-4xl mb-2">🎧</div>
                                    <div className="text-sm font-semibold text-gray-700">Audio</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation"  style={{ animationDelay: "1.5s" }}>
                                    <div className="text-4xl mb-2">⌚</div>
                                    <div className="text-sm font-semibold text-gray-700">Wearables</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
         {/* <!-- Features Section --> */}
    <section class="py-10 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose ShopEase?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🚚</span>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h4>
                    <p class="text-gray-600">Free shipping on all orders over $50. Fast and reliable delivery.</p>
                </div>
                <div class="text-center">
                    <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🔒</span>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Secure Payment</h4>
                    <p class="text-gray-600">Your payment information is always safe and secure with us.</p>
                </div>
                <div class="text-center">
                    <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">↩️</span>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h4>
                    <p class="text-gray-600">30-day return policy. No questions asked, hassle-free returns.</p>
                </div>
            </div>
        </div>
    </section>  

    {/* <!-- Footer --> */}
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 class="text-lg font-semibold mb-4">🛍️ ShopEase</h4>
                    <p class="text-gray-400">Your trusted online shopping destination for quality products at great prices.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#home" class="hover:text-white">Home</a></li>
                        <li><a href="#products" class="hover:text-white">Products</a></li>
                        <li><a href="#about" class="hover:text-white">About Us</a></li>
                        <li><a href="#contact" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Customer Service</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">Help Center</a></li>
                        <li><a href="#" class="hover:text-white">Returns</a></li>
                        <li><a href="#" class="hover:text-white">Shipping Info</a></li>
                        <li><a href="#" class="hover:text-white">Track Order</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white text-2xl">📘</a>
                        <a href="#" class="text-gray-400 hover:text-white text-2xl">🐦</a>
                        <a href="#" class="text-gray-400 hover:text-white text-2xl">📷</a>
                        <a href="#" class="text-gray-400 hover:text-white text-2xl">💼</a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 ShopEase. All rights reserved.</p>
            </div>
        </div>
    </footer>

        </MainLayout>
    </>
  );
}
