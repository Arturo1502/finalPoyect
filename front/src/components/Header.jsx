import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import { useMyContext } from "../pages/services/Context";

const Header = () => {
  const { logoutUser, user } = useMyContext();
  const id = user?.user?.id;
  const name = user?.user?.name;

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <header className="flex justify-between h-[4vh] md:h-[5vh] border-b  p-8 items-center bg-white">
      <div className="flex items-center justify-between gap-8 text-white "></div>

      <nav className="flex items-center gap-2 ">
        <Menu
          menuButton={
            <MenuButton className="flex items-center px-6 py-3 transition-colors rounded-lg gap-x-2 bg-sidebar ">
              <img
                src={`https://robohash.org/138.36.78.${id}.png`}
                alt={`Avatar de ${name}`}
                className="object-cover w-6 h-6 rounded-full"
              />
              <span className="text-white ">Perfil</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          // arrowClassName="bg-fondoclaro"
          transition
          menuClassName="bg-fondoclaro p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="flex items-center flex-1 px-6 py-2 text-black  transition-colors rounded-lg hover:bg-sidebar gap-x-4 "
            >
              <img
                src={`https://robohash.org/138.36.78.${id}.png`}
                alt={`Avatar de ${name}`}
                className="object-cover w-8 h-8 rounded-full"
              />
              <div className="flex flex-col text-sm ">
                <span className="text-sm text-azull hover:text-white">Ver Perfil</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-azull" />

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="flex items-center flex-1 px-6 py-2 text-azull hover:text-logout transition-colors rounded-lg hover:bg-sidebar gap-x-4"
              onClick={handleLogout}
            >
              <RiLogoutCircleRLine className="text-logout" /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
