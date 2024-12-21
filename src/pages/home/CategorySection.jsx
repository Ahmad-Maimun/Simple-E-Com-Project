import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Modal from "../../components/Modal";
import {
  deleteCategories,
  getCategories,
} from "../../features/categories/categorySlice";

function CategorySection() {
  const categoriesData = useSelector((state) => state.categories);
  const [deleteCategoryId, setDeleteCategoryId] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const clickHandler = (id) => {
    setDeleteCategoryId(id);
  };

  const modalCloseHandler = () => {
    setDeleteCategoryId(false);
  };

  const deleteHandler = () => {
    if (deleteCategoryId) {
      // deleteDataFromFirebase("categories/" + deleteCategoryId);
      dispatch(deleteCategories(deleteCategoryId));
      setDeleteCategoryId(false);
    }
  };

  let categoriesSectionContent;

  if (categoriesData.isLoading) {
    categoriesSectionContent = (
      <div className="text-xl">Data is Loading.....</div>
    );
  }

  if (categoriesData.isError) {
    categoriesSectionContent = (
      <div className="text-xl">Error || {categoriesData.error}</div>
    );
  }
  if (
    !categoriesData.isLoading &&
    !categoriesData.isError &&
    categoriesData.categories.length === 0
  ) {
    categoriesSectionContent = <div className="text-xl">🥸No Data Found🥸</div>;
  }

  if (
    !categoriesData.isLoading &&
    !categoriesData.isError &&
    categoriesData.categories.length > 0
  ) {
    categoriesSectionContent = categoriesData.categories.map((category) => (
      <div
        key={category.id}
        className="w-48 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        <img
          src={category.categoryImage}
          alt={category.categoryName}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="p-3 text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            {category.categoryName}
          </h3>
          <div className="flex justify-between mt-4">
            {/* Edit Button */}
            <Link
              to={`edit-category/${category.id}`}
              className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300"
            >
              Edit
            </Link>

            {/* Delete Button */}
            <button
              onClick={() => clickHandler(category.id)}
              className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div>
      {deleteCategoryId && (
        <Modal onDelete={deleteHandler} onClose={modalCloseHandler} />
      )}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Categories
          </h2>

          {/* All Categories in One Line */}
          <div className="flex justify-between gap-4">
            {categoriesSectionContent}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategorySection;
