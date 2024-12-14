import { Route, Routes } from "react-router";
import Error from "./Error";
import DashboardLayout from "./layout/DashboardLayout";
import CreateCategory from "./pages/CreateCategory";
import CreateProduct from "./pages/CreateProduct";
import HomeDashboard from "./pages/HomeDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomeDashboard />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="create-category" element={<CreateCategory />} />
        {/* Error Element */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
