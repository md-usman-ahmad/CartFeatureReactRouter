import { Link , useLocation} from "react-router";


export function Navbar({gettingProductsFromDB}){

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

                        <Link to="/Sports"
                            className={`cursor-pointer font-medium ${Location.pathname === "/Sports" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Sports
                        </Link>

                        <Link to="/Men"
                            className={`cursor-pointer font-medium ${Location.pathname === "/Men" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Men
                        </Link>

                        <Link to="/Electronics"
                            className={`cursor-pointer font-medium ${Location.pathname === "/Electronics" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Electronics
                        </Link>
                        {token && 
                        <Link
                            className={`cursor-pointer font-medium ${Location.pathname === "/Add Products" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                            >
                            Add Products
                        </Link>}
                    </nav>

                    <div className="flex items-center space-x-4">
                    {token ? (
                        <>
                            <button className="text-gray-700 hover:text-yellow-200 relative">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                                    ></path>
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-zinc-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    XX
                                </span>
                            </button>

                            <Link
                                className={`cursor-pointer font-medium text-grey-700 hover:text-red-500 }`} 
                                onClick={()=>{
                                    localStorage.removeItem("token");
                                    alert("Logout Successfull");
                                }}
                                to="/"
                                >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/Signup"
                                className={`cursor-pointer font-medium ${Location.pathname === "/Signup" ? "text-green-600" : "text-gray-700 hover:text-green-600" }`}
                                >
                                Signup
                            </Link>

                            <Link 
                                to="/Login"
                                className={`cursor-pointer font-medium ${Location.pathname === "/Login" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
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