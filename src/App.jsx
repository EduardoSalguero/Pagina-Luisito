import { useState } from "react";
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

  const siguiente = () => setIndice((indice + 1) % secciones.length);
  const anterior = () => setIndice((indice - 1 + secciones.length) % secciones.length);

  return (
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
    </div>
  );
}

export default App;
