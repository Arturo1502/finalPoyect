import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../services/UseFetch";
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";
const Register = () => {
  const { handleSubmitPost } = useFetch();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-sidebar">
      <div className="bg-azull p-8 rounded-xl shadow-2xl w-auto lg:w-[550px] h-[700px] ">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-esmeralda mb-8">
          Crear cuenta
        </h1>
        <form
          onSubmit={handleSubmitPost}
          action="http://127.0.0.1:8000/api/auth/register"
          className="mb-10"
        >
          <div className="relative mb-10">
            <RiUserLine className="absolute -translate-y-1/2 top-1/2 left-2 text-esmeralda" />
            <input
              type="text"
              className="w-full py-3 pl-8 pr-4 text-azull rounded-lg outline-none "
              placeholder="Nombre"
              name="name"
            />
          </div>
          <div className="relative mb-10">
            <RiUserLine className="absolute -translate-y-1/2 top-1/2 left-2 text-esmeralda" />
            <input
              type="text"
              className="w-full py-3 pl-8 pr-4 text-azull rounded-lg outline-none"
              placeholder="Apellidos"
              name="apellido"
            />
          </div>
          <div className="relative mb-10">
            <RiMailLine className="absolute -translate-y-1/2 top-1/2 left-2 text-esmeralda" />
            <input
              type="email"
              className="w-full py-3 pl-8 pr-4 text-azull rounded-lg outline-none"
              placeholder="Correo electrónico"
              name="email"
            />
          </div>
          <div className="relative mb-10">
            <RiMailLine className="absolute -translate-y-1/2 top-1/2 left-2 text-esmeralda" />
            <input
              type="date"
              className="w-full py-3 pl-8 pr-4 text-azull rounded-lg outline-none"
              placeholder="Correo electrónico"
              name="fecha_nacimiento"
            />
          </div>
          <div className="relative mb-10">
            <RiLockLine className="absolute -translate-y-1/2 top-1/2 left-2 text-esmeralda" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-3 pl-8 pr-4 text-azull rounded-lg outline-none"
              placeholder="Contraseña"
              name="password"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -translate-y-1/2 top-1/2 right-2 hover:cursor-pointer text-esmeralda"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -translate-y-1/2 top-1/2 right-2 hover:cursor-pointer text-esmeralda"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-bold text-black uppercase rounded-lg bg-slate-100 hover:bg-esmeralda"
            >
              Registrarme
            </button>
          </div>
        </form>
        <span className="flex items-center justify-center gap-2 text-white">
          {" "}
          <Link
            to="/login"
            className="transition-colors text-fondoclaro hover:text-esmeralda"
          >
            ¿Ya tienes cuenta? Ingresa
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
