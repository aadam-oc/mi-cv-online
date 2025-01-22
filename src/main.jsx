import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure the CSS file exists and is correctly configured.

function App() {
    // State to store CV data
    const [cvData, setCvData] = useState({
        name: 'No disponible',
        profession: 'No disponible',
        experience: 'No disponible',
        email: 'No disponible',
    });

    // State to handle loading state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make the GET request to the API
        setLoading(true); // Set loading state at the start of the request
        fetch('http://172.17.22.166/api/api.php') // Adjusted to use the correct URL
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Datos recibidos:', data);
                setCvData(data); // Update state with the received data
                setLoading(false); // Mark loading as done
            })
            .catch((error) => {
                console.error('Error al obtener los datos:', error);
                setLoading(false); // Handle loading state on error
            });
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Generador de CV</h1>
            <h2>Informacion Personal</h2>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <div>
                    <p><strong>Nombre:</strong> {cvData.name}</p>
                    <p><strong>Titulo:</strong> {cvData.profession}</p>
                    <p><strong>Descripcion:</strong> {cvData.experience}</p>
                    <p><strong>Email:</strong> {cvData.email}</p>
                </div>
            )}
        </div>
    );
}

// Render the app in the element with id "root"
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
