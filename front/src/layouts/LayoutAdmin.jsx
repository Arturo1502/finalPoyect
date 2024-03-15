import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useMyContext } from "../pages/services/Context";

const LayoutAdmin = () => {
  const { user } = useMyContext();


  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-6 bg-gray-50">
      
      {!user && <Navigate to="/login" />}
      <Sidebar />
      <div className="xl:col-span-5 bg-fondoclaro ">
        <Header />
        <div className="h-[90vh] overflow-y-scroll px-8 pt-[12px] bg-[#F4F4F5]">
          <Outlet />
          
        </div>
        <div className="flex justify-end">
        &copy; {new Date().getFullYear()} Arturo Alvarez. Todos los derechos reservados.  
        </div>
        
      </div>
      
        
      
    </div>
  );
};

export default LayoutAdmin;
