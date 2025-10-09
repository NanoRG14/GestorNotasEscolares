const escolarizados = [
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

    const select = document.getElementById('alumnoSelect');

    escolarizados.forEach(nombre => {
      const option = document.createElement('option');
      option.value = nombre;
      option.textContent = nombre;
      select.appendChild(option);
    });

    document.getElementById('formulario').addEventListener('submit', function(e) {
      e.preventDefault();
      const alumno = select.value;
      if (alumno) {
        alert("Nota guardada para " + alumno);
      } else {
        alert("Por favor, selecciona un alumno.");
      }
    });