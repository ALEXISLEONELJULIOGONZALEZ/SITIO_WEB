
document.addEventListener("DOMContentLoaded", function() {
    const tareaInput = document.getElementById("nueva-tarea");
    const agregarBtn = document.getElementById("agregar-tarea");
    const listaTareas = document.getElementById("lista-tareas");

    let tareas = [];

    function renderTareas() {
        listaTareas.innerHTML = "";
        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.className = tarea.completada ? "completada" : "";

            li.innerHTML = `
                ${tarea.descripcion}
                <button onclick="marcarCompletada(${index})">✓</button>
                <button onclick="eliminarTarea(${index})">Eliminar</button>
            `;
            listaTareas.appendChild(li);
        });
    }

    agregarBtn.addEventListener("click", function() {
        const descripcion = tareaInput.value.trim();
        if (descripcion) {
            tareas.push({ descripcion, completada: false });
            tareaInput.value = "";
            renderTareas();
        }
    });

    window.marcarCompletada = function(index) {
        tareas[index].completada = !tareas[index].completada;
        renderTareas();
    };

    window.eliminarTarea = function(index) {
        tareas.splice(index, 1);
        renderTareas();
    };

    renderTareas();
});
