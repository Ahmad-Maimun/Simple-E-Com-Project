import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { setDataToFirebase } from "../database/firebaseUtils";
import { categoryFormSchema } from "../validation/validationSchema";
function CreateCategory() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: {
      categoryName: "",
      categoryImage: "",
    },
  });
  const onSubmit = (data) => {
    setDataToFirebase("categories", data);
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
          {params.id ? "Edit Category" : "Add Category"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Product Name */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="categoryName"
            >
              Category Name
            </label>
            <input
              {...register("categoryName")}
              type="text"
              id="categoryName"
              name="categoryName"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.categoryName && (
              <span className="text-red-500">
                {errors.categoryName?.message}
              </span>
            )}
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
              {...register("categoryImage")}
              type="url"
              id="categoryImage"
              name="categoryImage"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.categoryImage && (
              <span className="text-red-500">
                {errors.categoryImage?.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {params.id ? "Edit Category" : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
