import { useState } from "react";
import "./App.css";

function App() {
  // Estado para los datos del CV
  const [cvData, setCvData] = useState({
    name: "",
    title: "",
    description: "",
  });

  // Actualizar datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-500 text-white p-4 shadow-md text-center">
        <h1 className="text-2xl font-bold">Generador de CV</h1>
      </header>

      <main className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Formulario */}
        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Informacion Personal</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Nombre:</label>
              <input
                type="text"
                name="name"
                value={cvData.name}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Titulo:</label>
              <input
                type="text"
                name="title"
                value={cvData.title}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Ejemplo: Desarrollador Web"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Descripcion:</label>
              <textarea
                name="description"
                value={cvData.description}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Describe tu perfil profesional"
              ></textarea>
            </div>
          </form>
        </section>

        {/* Vista Previa */}
        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Vista Previa</h2>
          <div>
            <h3 className="text-2xl font-bold">{cvData.name || "Tu Nombre"}</h3>
            <p className="text-lg text-gray-700">{cvData.title || "Tu Titulo"}</p>
            <p className="mt-4">{cvData.description || "Aqui aparecera tu descripcion profesional."}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
