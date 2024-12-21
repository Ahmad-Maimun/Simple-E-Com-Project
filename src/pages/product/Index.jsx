import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setProducts } from "../../features/products/productSlice";
import { productFormSchema } from "../../validation/validationSchema";

function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productFormSchema),
    defaultValues: {
      productName: "",
      productPrice: "",
      productImage: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setProducts(data));
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
          Add Product
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              {...register("productName")}
              type="text"
              id="productName"
              name="productName"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productName && (
              <span className="text-red-500">
                {errors.productName?.message}
              </span>
            )}
          </div>

          {/* Product Price */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="productPrice"
            >
              Product Price ($)
            </label>
            <input
              {...register("productPrice")}
              type="number"
              id="productPrice"
              name="productPrice"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productPrice && (
              <span className="text-red-500">
                {errors.productPrice?.message}
              </span>
            )}
          </div>

          {/* Product Image URL */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="productImage"
            >
              Product Image URL
            </label>
            <input
              {...register("productImage")}
              type="url"
              id="productImage"
              name="productImage"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productImage && (
              <span className="text-red-500">
                {errors.productImage?.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
