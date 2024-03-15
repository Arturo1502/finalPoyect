import { Link } from "react-router-dom";

const Error404 = () => {



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Ruta de tu GIF */}
      <img
        src="/error.gif"
        alt="Error 404"
        className="mb-4 w-56"
      />
      <h1 className="text-2xl font-bold mb-4">
        Estás intentando acceder a una ruta desconocida
      </h1>
      <Link
        to="/login"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ir al inicio de sesión

      </Link>
    </div>
  );
};

export default Error404;
