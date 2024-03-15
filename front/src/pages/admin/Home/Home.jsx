import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { useMyContext } from "../../services/Context";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  const { user } = useMyContext();
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-black">
          Bienvenido {user && user.user.name}!
        </h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="transition-colors hover:cursor-pointer hover:text-white" />
          <RiArrowRightSLine className="transition-colors hover:cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="Bitacora"
          text="Ver Bitacora"
          enlace="/bitacora"
        />
        <CardTicket
          ticket="pending"
          totalTickets="Usuarios"
          text="Agregar Usuario"
          enlace="/usuarios/add"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="Paginas"
          text="Agregar Pagina"
          enlace="/paginas/add"
        />
        <CardTicket
          ticket="close"
          totalTickets="Roles"
          text="Agregar Rol"
          enlace="/roles/add"
        />
      </div>
      <div>
        <h1 className="my-10 text-2xl text-black">Información</h1>
      </div>
      
    </div>
  );
};

export default Home;
