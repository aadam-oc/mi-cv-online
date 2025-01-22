// app.js
document.addEventListener('DOMContentLoaded', () => {
    const cvInfoDiv = document.getElementById('cv-info');
    const editBtn = document.getElementById('edit-btn');

    // Funcion para cargar los datos del CV
    function loadCVData() {
        fetch('/api/api.php')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    cvInfoDiv.innerHTML = `
                        <p><strong>Nombre:</strong> ${data.name}</p>
                        <p><strong>Profesion:</strong> ${data.profession}</p>
                        <p><strong>Experiencia:</strong> ${data.experience}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                    `;
                }
            });
    }

    // Cargar datos cuando se inicia la pagina
    loadCVData();

    // Editar los datos del CV
    editBtn.addEventListener('click', () => {
        const data = {
            name: 'Nuevo Nombre',
            profession: 'Nueva Profesion',
            experience: 'Nueva Experiencia',
            email: 'nuevoemail@example.com'
        };

        fetch('/api/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('Datos actualizados con exito');
                loadCVData();
            } else {
                alert('Error al actualizar los datos');
            }
        });
    });
});
