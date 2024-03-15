import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../pages/services/Context";
// Icons
import {
  RiBarChart2Line,
  RiEarthLine,
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
  RiPagesLine,
} from "react-icons/ri";
import { FaCashRegister, FaRegUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const { logoutUser } = useMyContext();
  const handleLogout = () => {
    logoutUser();
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={` overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-sidebar border-r-red-500 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="mb-20 text-2xl font-bold text-center text-white">
            TGESTION<span className="text-4xl text-esmeralda">.</span>
          </h1>
          <ul className="">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center mb-5 gap-4 px-4 py-4 text-white transition-colors rounded-lg hover:bg-zinc-800 "
              >
                <LuLayoutDashboard className="text-esmeralda " />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/bitacora"
                className="flex items-center mb-5 gap-4 px-4 py-4 text-white transition-colors rounded-lg hover:bg-zinc-800"
              >
                <FaCashRegister className="text-esmeralda" /> Bitacora
              </Link>
            </li>
            <li>
              <Link
                to="/usuarios"
                className="flex items-center mb-5 gap-4 px-4 py-4 text-white transition-colors rounded-lg hover:bg-zinc-800"
              >
                <FaRegUser className="text-esmeralda" /> Usuarios
              </Link>
            </li>
            <li>
              <Link
                to="/paginas"
                className="flex items-center mb-5 gap-4 px-4 py-4 text-white transition-colors rounded-lg hover:bg-zinc-800"
              >
                <RiPagesLine className="text-esmeralda" /> Paginas
              </Link>
            </li>
            <li>
              <Link
                to="/roles"
                className="flex items-center mb-5 gap-4 px-4 py-4 text-white transition-colors rounded-lg hover:bg-zinc-800"
              >
                <GrUserAdmin className="text-esmeralda" /> Roles
              </Link>
            </li>
            
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 px-4 py-4 text-white transition-colors rounded-lg hover:bg-zinc-800 cursor-pointer"
          >
            <RiLogoutCircleRLine className="text-logout" />{" "}
            <button onClick={handleLogout}>Cerrar sesión</button>
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed z-50 p-3 text-black rounded-full xl:hidden bottom-4 right-4 bg-[#4791ff]"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
