document.addEventListener('DOMContentLoaded', function () { //Ejecucion del DOM
const escolarizados2 = [
  "Alejandro Cordón García",
  "Noelia Díaz López",
  "Jorge Durán Muñoz",
  "José Javier García Flores",
  "Juan Jesús González Bravo",
  "Alejandro González Macía",
  "Mireya González Ricón",
  "Rubén Gordillo Bellido",
  "Manuel Jiménez Gutiérrez",
  "Emilio Mariscal Sierra",
  "Alejandro Montesinos Pozo",
  "Irene Osuna Delgado",
  "Julio Javier Pascual Cruz",
  "Sergio Perea Moreno",
  "Justo Puerto Delgado",
  "Fernando Rodríguez Gamarro",
  "Jesús Romero Pérez",
  "José Joaquín Sánchez García",
  "José Miguel Sánchez Mariscal"
];

const alumnoSelect = document.getElementById('alumnoSelect');
escolarizados2.forEach(nombre => {
  const option = document.createElement('option');
  option.value = nombre;
  option.textContent = nombre;
  alumnoSelect.appendChild(option);
});

const asignaturas2 = [
  "Despliegue de aplicaciones web",
  "Desarrollo web en entorno cliente",
  "Desarrollo web en entorno servidor",
  "Proyecto intermodular",
  "Inglés profesional",
  "Diseño de interfaces web",
  "Itinerario Personal para la Empleabilidad II"
];

const asignaturaSelect = document.getElementById('asignaturaSelect');

asignaturas2.forEach(modulo => {
  const option = document.createElement('option');
  option.value = modulo;
  option.textContent = modulo;
  asignaturaSelect.appendChild(option);
});

document.getElementById('boton').addEventListener('click', function() {
  const alumno = alumnoSelect.value;
  const asignatura = asignaturaSelect.value;
  const nota = document.getElementById('input').value;

  // Validar campos vacíos
  if (!alumno || !asignatura || nota === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validar que la nota esté entre 0 y 10
  const notaNum = parseFloat(nota);
  if (isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
    alert("La nota debe ser un número entre 0 y 10.");
    return;
  }

  // Si todo está bien
  alert(`Nota guardada para ${alumno} en ${asignatura}: ${notaNum}`);
});


});//Cierre de llaves para que se ejecute el DOM