import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

function HomeDashboard() {
  const data = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const categories = [
    {
      id: 1,
      name: "Technology",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Health",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Travel",
      image: "https://via.placeholder.com/150",
    },
    { id: 4, name: "Food", image: "https://via.placeholder.com/150" },
    {
      id: 5,
      name: "Education",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Sports",
      image: "https://via.placeholder.com/150",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$250",
      rating: 4.0,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$60",
      rating: 4.8,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "$150",
      rating: 4.3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "$150",
      rating: 4.3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "$150",
      rating: 4.3,
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div>
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Categories
          </h2>

          {/* All Categories in One Line */}
          <div className="flex justify-between gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="w-48 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-red-500 font-bold">{product.price}</p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.208a1 1 0 00.95.69h4.42c.969 0 1.371 1.24.588 1.81l-3.584 2.597a1 1 0 00-.364 1.118l1.357 4.208c.3.921-.755 1.688-1.539 1.118l-3.584-2.597a1 1 0 00-1.176 0L5.98 17.688c-.784.57-1.838-.197-1.539-1.118l1.357-4.208a1 1 0 00-.364-1.118L1.85 9.635c-.783-.57-.381-1.81.588-1.81h4.42a1 1 0 00.95-.69l1.357-4.208z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    {/* Edit Button */}
                    <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300">
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomeDashboard;
