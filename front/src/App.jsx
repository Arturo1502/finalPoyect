import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin";
import { MyProvider } from "./pages/services/Context";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/admin/Home/Home";
import Error404 from "./pages/Error404";
import Inventario from "./pages/admin/Inventario/Inventario";
import Categorias from "./pages/admin/Inventario/Categorias";
import Add from "./pages/admin/Inventario/Add";
import Compras from "./pages/admin/Compras/Compras";
import AddCategories from "./pages/admin/Inventario/AddCategories";
import EditProduct from "./pages/admin/Inventario/EditProduct";
import Proveedores from "./pages/admin/Proveedores/Proveedores";
import AddProveedor from "./pages/admin/Proveedores/AddProveedor";
import EditProveedo from "./pages/admin/Proveedores/EditProveedo";
import Perfil from "./pages/auth/Perfil";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<Home />} />

            <Route path="usuarios" element={<Inventario />} />
            <Route path="usuarios/add" element={<Add />} />
            <Route path="usuarios/edit/:id" element={<EditProduct />} />


            <Route path="bitacora" element={<Compras />} />
            <Route path="perfil" element={<Perfil />} />

            <Route path="paginas" element={<Categorias />} />
            <Route path="paginas/add" element={<AddCategories />} />

            <Route path="roles" element={<Proveedores />} />
            <Route path="roles/add" element={<AddProveedor />} />
            <Route path="roles/edit/:id" element={<EditProveedo />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
