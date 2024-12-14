function CreateCategory() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
          Add Category
        </h2>
        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="categoryName"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Product Image URL */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="categoryImage"
            >
              Category Image URL
            </label>
            <input
              type="url"
              id="categoryImage"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
