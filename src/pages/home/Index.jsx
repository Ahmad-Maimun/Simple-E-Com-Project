import { useSelector } from "react-redux";

function HomeDashboard() {
  const { categories } = useSelector((store) => store.categories);
  const { products } = useSelector((store) => store.products);

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 border p-3 rounded-md">
          <span className="text-xl">Total Categories</span>
          <h2>{categories.length}</h2>
        </div>
        <div className="col-span-4 border p-3 rounded-md">
          <span className="text-xl">Total Products</span>
          <h2>{products.length}</h2>
        </div>
        <div className="col-span-4 border p-3 rounded-md">
          <span className="text-xl">Total Categories</span>
          <h2>1200</h2>
        </div>
      </div>
    </>
  );
}

export default HomeDashboard;
