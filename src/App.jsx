import { useState, useEffect } from "react";
import uno from "./assets/1.jpg";
import dos from "./assets/2.jpg";
import tres from "./assets/3.jpg";

const secciones = [
  {
    titulo: "Quiénes somos",
    descripcion: "Somos un equipo apasionado por el desarrollo web moderno.",
    imagen: uno,
  },
  {
    titulo: "Qué hacemos",
    descripcion: "Creamos sitios rápidos, responsivos y personalizados.",
    imagen: dos,
  },
  {
    titulo: "Proyectos anteriores",
    descripcion: "Hemos trabajado con marcas locales y freelancers.",
    imagen: tres,
  },
];

function App() {
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % secciones.length);
    },5000); //5 segundos

    return() => clearInterval(intervalo);
  },[]);
  const siguiente = () => setIndice((indice + 1) % secciones.length);
  const anterior = () => setIndice((indice - 1 + secciones.length) % secciones.length);

  const irAlInicio = () => {
    setIndice(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <a onClick={irAlInicio} className="cursor-pointer">
        <img src="/logo.png" alt="Logo" className="h-10"/>
      </a>
      <span className="font-bold text-lg text-black">Luisito productora</span>
    </div>

    {/* Menú */}
    <nav className="flex items-center gap-6 text-black text-sm font-semibold">
      <a href="#servicios" className="hover:text-blue-600">Servicios</a>
      <a href="#proyectos" className="hover:text-blue-600">Proyectos</a>
      <a href="#contacto" className="hover:text-blue-600">Contacto</a>
    </nav>
  </div>
</header>
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="max-w-xl text-center">
        <img src={secciones[indice].imagen} alt={secciones[indice].titulo} className="w-full h-auto rounded-lg mb-4" />
        <h1 className="text-3xl font-bold mb-4">{secciones[indice].titulo}</h1>
        <p className="text-lg">{secciones[indice].descripcion}</p>
      </div>
      <div className="flex gap-4 mt-6">
        <button onClick={anterior} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">←</button>
        <button onClick={siguiente} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">→</button>
      </div>
      <div className="flex gap-2 mt-4">
        {secciones.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === indice ? "bg-blue-500" : "bg-gray-500"}`} />
        ))}
      </div>
      <div id="contacto" className="mt-16 w-full bg-gray-800 text-white py-12 px-6">
  <h2 className="text-2xl font-bold text-center mb-4">Contáctanos</h2>
  <p className="text-center mb-6 max-w-xl mx-auto">
    ¿Tienes un proyecto en mente? Escríbenos y lo hacemos realidad.
  </p>
  <form className="max-w-xl mx-auto grid gap-4">
    <input
      type="text"
      placeholder="Nombre"
      className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
    />
    <input
      type="email"
      placeholder="Correo"
      className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
    />
    <textarea
      rows="4"
      placeholder="Mensaje"
      className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
    ></textarea>
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
    >
      Enviar
    </button>
  </form>
</div>
    </div>
    </>
  );
}

export default App;
