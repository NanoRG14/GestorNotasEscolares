document.addEventListener('DOMContentLoaded', function () {
  // 🔗 Referencias a elementos del DOM
  const alumnoSelect = document.getElementById('alumnoSelect');
  const asignaturaSelect = document.getElementById('asignaturaSelect');
  const notaInput = document.getElementById('input');
  const tablaNotas = document.getElementById('tablaNotas');
  const resumen = document.getElementById('resumen');
  const estadoVacio = document.getElementById('estadoVacio');
  const boton = document.getElementById('boton');

  const escolarizados1 = [
  "Lucía Beltrán Márquez", "María Fernanda Torres Llamas", "Iván Cordero Salcedo",
  "Elena Jimena Rivas Montoya", "Álvaro Molina Cifuentes", "Patricia Romero Barragán",
  "Joaquín Esteban Vargas Tejada", "Claudia Moreno Espinosa", "Diego Javier Serrano Padilla",
  "Isabel Cristina León Caballero", "Francisco Manuel Ortega Roldán", "Raquel Domínguez Valverde",
  "Antonio Jesús Medina Carrasco", "Beatriz Sánchez Villalba", "Miguel Ángel Bravo Zamora",
  "Nuria Gallardo Paredes", "Héctor Lozano Camacho"
];

const escolarizados2 = [
  "Alejandro Cordón García", "Noelia Díaz López", "Jorge Durán Muñoz",
  "José Javier García Flores", "Juan Jesús González García", "Alejandro González Macía",
  "Mireya González Ricón", "Rubén Gordillo Bellido", "Manuel Jiménez Gutiérrez",
  "Emilio Mariscal Sierra", "Alejandro Montesinos Pozo", "Irene Osuna Delgado", "Manuel Verdón Torres",
  "Julio Javier Pascual Cruz", "Sergio Perea Moreno", "Justo Puerto Delgado",
  "Fernando Rodríguez Gamarro", "Jesús Romero Pérez", "José Joaquín Sánchez García",
  "José Miguel Sánchez Mariscal"
];

const asignaturas1 = [
  "Lenguaje de marcas", "Sistemas informáticos", "Programación",
  "Bases de datos", "Itinerario Personal para la Empleabilidad I", "Entorno de Desarrollo", "Sostenibilidad",
  "Digitalización del Sistema Productivo"
];

const asignaturas2 = [
  "Despliegue de aplicaciones web",
  "Desarrollo web en entorno cliente",
  "Desarrollo web en entorno servidor",
  "Proyecto intermodular",
  "Inglés profesional",
  "Diseño de interfaces web",
  "Itinerario Personal para la Empleabilidad II"
];

let calificaciones = [];

  function actualizarFormulario(curso) {
    alumnoSelect.innerHTML = '<option value="">-- Selecciona un alumno --</option>';
    asignaturaSelect.innerHTML = '<option value="">-- Selecciona una asignatura --</option>';

    const alumnos = curso === "1" ? escolarizados1 : escolarizados2;
    const materias = curso === "1" ? asignaturas1 : asignaturas2;

    alumnos.forEach(nombre => {
      const option = document.createElement('option');
      option.value = nombre;
      option.textContent = nombre;
      alumnoSelect.appendChild(option);
    });

    materias.forEach(modulo => {
      const option = document.createElement('option');
      option.value = modulo;
      option.textContent = modulo;
      asignaturaSelect.appendChild(option);
    });
  }

  function obtenerColor(nota) {
    if (nota >= 9) return 'row-purple';
    if (nota >= 7) return 'row-blue';
    if (nota >= 5) return 'row-green';
    return 'row-red';
  }

  function obtenerBadge(nota) {
    if (nota >= 9) return { texto: 'Sobresaliente', clase: 'bg-purple' };
    if (nota >= 7) return { texto: 'Notable', clase: 'bg-blue' };
    if (nota >= 5) return { texto: 'Aprobado', clase: 'bg-green' };
    return { texto: 'Suspenso', clase: 'bg-red' };
  }

  function calcularMedia() {
    if (calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acc, a) => acc + a.calificacion, 0);
    return suma / calificaciones.length;
  }

  function renderTabla() {
    tablaNotas.innerHTML = '';

    calificaciones.forEach(asig => {
      const fila = document.createElement('tr');
      fila.className = obtenerColor(asig.calificacion);
      fila.innerHTML = `
        <td>${asig.alumno}</td>
        <td>${asig.curso}</td>
        <td>${asig.nombre}</td>
        <td>${asig.calificacion.toFixed(2)}</td>
        <td>${obtenerBadge(asig.calificacion).texto}</td>
        <td><button onclick="eliminarAsignatura('${asig.id}')">Eliminar</button></td>
      `;
      tablaNotas.appendChild(fila);
    });

    const media = calcularMedia();
    const badge = obtenerBadge(media);

    resumen.textContent = `Media: ${media.toFixed(2)} - ${badge.texto}`;
    resumen.className = `badge ${badge.clase}`;
    resumen.classList.remove('hidden');

    actualizarEstadoVacio();
  }

  function actualizarEstadoVacio() {
    estadoVacio.classList.toggle('hidden', calificaciones.length > 0);
  }

  window.eliminarAsignatura = function (id) {
    calificaciones = calificaciones.filter(a => a.id !== id);
    renderTabla();
  };

  document.querySelectorAll('input[name="curso"]').forEach(radio => {
    radio.addEventListener('change', e => {
      actualizarFormulario(e.target.value);
      alumnoSelect.value = '';
      asignaturaSelect.value = '';
      notaInput.value = '';
    });
  });

  boton.addEventListener('click', () => {
    const alumno = alumnoSelect.value;
    const asignatura = asignaturaSelect.value;
    const nota = parseFloat(notaInput.value);
    const curso = document.querySelector('input[name="curso"]:checked')?.value;

    if (!alumno || !asignatura || isNaN(nota)) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (nota < 0 || nota > 10) {
      alert('La nota debe estar entre 0 y 10.');
      return;
    }

    calificaciones.push({
      id: Date.now().toString(),
      nombre: asignatura,
      calificacion: nota,
      alumno: alumno,
      curso: curso === '1' ? '1º DAW' : '2º DAW'
    });

    notaInput.value = '';
    renderTabla();
  });

  
  actualizarFormulario('1');
  actualizarEstadoVacio();
});