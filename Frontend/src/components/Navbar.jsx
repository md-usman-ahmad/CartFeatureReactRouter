import { Link , useLocation} from "react-router";


export function Navbar(){

    const Location = useLocation();
    console.log("Location.pathname = ",Location.pathname);

    let token = localStorage.getItem("token");
    console.log("Navbar token = ",token);


    return (
        <>
            <div
                className="header-demo"
                style={{
                backgroundColor: "#f3f4f6",      
                fontWeight: 600,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                }}
            >
                <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900">🛍️ ShopEase</h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className={`cursor-pointer font-medium ${Location.pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                            >
                            Home
                        </Link>

                        <Link
                            className={`cursor-pointer font-medium ${Location.pathname === "/Sports" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Sports
                        </Link>

                        <Link
                            className={`cursor-pointer font-medium ${Location.pathname === "/Men" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Men
                        </Link>

                        <Link
                            className={`cursor-pointer font-medium ${Location.pathname === "/Electronics" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Electronics
                        </Link>

                        <Link
                            className={`cursor-pointer font-medium ${Location.pathname === "/Add Products" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Add Products
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                    {token ? (
                        <>
                            <Link
                                className={`cursor-pointer font-medium text-grey-700 hover:text-red-900 }`} 
                                >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/signup"
                                className={`cursor-pointer font-medium ${Location.pathname === "/signup" ? "text-green-600" : "text-gray-700 hover:text-green-600" }`}
                                >
                                Signup
                            </Link>

                            <Link 
                                to="/login"
                                className={`cursor-pointer font-medium ${Location.pathname === "/login" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                                >
                                Login
                            </Link>
                        </>
                    ) }  
                    </div>  

                    </div>
                </div>
                </header>
            </div>
        </>
    )
}