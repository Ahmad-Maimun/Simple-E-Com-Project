import { Route, Routes } from "react-router";
import Error from "./Error";
import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/auth/Login";
import Private from "./pages/auth/Private";
import Register from "./pages/auth/Register";
import CreateCategory from "./pages/category/Create";
import IndexCategory from "./pages/category/Index";
import HomeDashboard from "./pages/home/Index";
import CreateProduct from "./pages/product/Index";

function App() {
  return (
    <Routes>
      {/* Auth Route */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<Private />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<HomeDashboard />} />
          {/* CATEGORY */}
          <Route path="index-category" element={<IndexCategory />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="edit-category/:id" element={<CreateCategory />} />
          {/* PRODUCT */}
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="edit-product/:id" element={<CreateProduct />} />
          {/* Error Element */}
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
