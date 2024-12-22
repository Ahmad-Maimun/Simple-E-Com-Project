import { Route, Routes } from "react-router";
import Error from "./Error";
import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CreateCategory from "./pages/category/Index";
import HomeDashboard from "./pages/home/Index";
import CreateProduct from "./pages/product/Index";

function App() {
  return (
    <Routes>
      {/* Auth Route */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomeDashboard />} />
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="edit-category/:id" element={<CreateCategory />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="edit-product/:id" element={<CreateProduct />} />
        {/* Error Element */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
