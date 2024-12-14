import { Link, Outlet } from "react-router";

function DashboardLayout() {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-gray-800">Dashboard</h1>

          {/* Navigation Links */}
          <nav className="flex gap-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-6 rounded-full font-medium shadow-lg transform hover:scale-105 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="create-product"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-full font-medium shadow-lg transform hover:scale-105 transition duration-300"
            >
              Create Product
            </Link>
            <Link
              to="create-category"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white py-2 px-6 rounded-full font-medium shadow-lg transform hover:scale-105 transition duration-300"
            >
              Create Category
            </Link>
          </nav>
        </div>
      </header>

      <div className="py-5">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
