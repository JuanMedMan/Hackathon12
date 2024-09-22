const cursosAsignados = [
    {
        nombre_curso: "Front-End",
        horario: "7:30 a 10:30",
        fecha: "2024-09-07",
        tipo_clase: "Teórica",
        periodo_academico: "2024-2",
        seccion: "A",
        codigo_alumno: "001",
        codigo_docente: "D01"
    },
    {
        nombre_curso: "Back-End",
        horario: "10:00 a 13:00",
        fecha: "2024-09-03",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "002",
        codigo_docente: "D02"
    },
    {
        nombre_curso: "Front-End",
        horario: "3:00 a 9:00",
        fecha: "2024-09-03",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nombre_curso: "Back-End",
        horario: "3:00 a 9:00",
        fecha: "2024-09-05",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nombre_curso: "Calculo",
        horario: "10:00 a 13:00",
        fecha: "2024-09-05",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "002",
        codigo_docente: "D02"
    },
    {
        nombre_curso: "Calculo",
        horario: "10:00 a 13:00",
        fecha: "2024-09-12",
        tipo_clase: "Práctica",
        periodo_academico: "2024-2",
        seccion: "B",
        codigo_alumno: "002",
        codigo_docente: "D02"
    }
];

let semanaActual = "2024-09-02"; 

function obtenerDiaSemanaYFecha(fecha) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date(Date.UTC(...fecha.split('-').map((part, index) => index === 1 ? part - 1 : part)));
    const diaSemana = dias[date.getUTCDay()];
    const diaMes = date.getUTCDate();
    return `${diaSemana} ${diaMes}`;
}

function generarSemana(primeraFecha) {
    const diasSemana = [];
    const startDate = new Date(Date.UTC(...primeraFecha.split('-').map((part, index) => index === 1 ? part - 1 : part)));

    for (let i = 0; i < 6; i++) {
        const dia = new Date(startDate);
        dia.setUTCDate(startDate.getUTCDate() + i);
        const formattedDate = `${dia.getUTCFullYear()}-${String(dia.getUTCMonth() + 1).padStart(2, '0')}-${String(dia.getUTCDate()).padStart(2, '0')}`;
        diasSemana.push({ formattedDate, display: obtenerDiaSemanaYFecha(formattedDate) });
    }

    return diasSemana;
}

function agruparCursosPorFecha() {
    const cursosPorFecha = {};
    cursosAsignados.forEach(curso => {
        const diaYFecha = obtenerDiaSemanaYFecha(curso.fecha);
        if (!cursosPorFecha[diaYFecha]) {
            cursosPorFecha[diaYFecha] = [];
        }
        cursosPorFecha[diaYFecha].push(curso);
    });
    return cursosPorFecha;
}

function mostrarCursos() {
    const scheduleList = document.getElementById("schedule-list");
    scheduleList.innerHTML = ""; 

    const cursosPorFecha = agruparCursosPorFecha();
    const semana = generarSemana(semanaActual);

    semana.forEach(dia => {
        const li = document.createElement("li");
        li.innerHTML = `${dia.display}: <span></span>`;
        if (cursosPorFecha[dia.display]) {
            cursosPorFecha[dia.display].forEach(curso => {
                const cursoInfo = document.createElement("span");
                cursoInfo.innerText = `${curso.nombre_curso} (${curso.horario}) `;
                li.appendChild(cursoInfo);
            });
        }
        scheduleList.appendChild(li);
    });
}

function cambiarSemana(incremento) {
    const startDate = new Date(semanaActual);
    startDate.setUTCDate(startDate.getUTCDate() + (incremento * 7));
    semanaActual = startDate.toISOString().split('T')[0]; 
    mostrarCursos(); 
}


document.querySelector(".fa-chevron-left").addEventListener("click", () => cambiarSemana(-1));
document.querySelector(".fa-chevron-right").addEventListener("click", () => cambiarSemana(1));

mostrarCursos(); 

function filtrarPublicaciones() {
    const input = document.getElementById('search-input').value.toLowerCase(); 
    const postCards = document.querySelectorAll('.post-card'); 
    
    postCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase(); 
        const content = card.querySelector('p').textContent.toLowerCase(); 

        if (title.includes(input) || content.includes(input) || input === '') {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

document.getElementById('search-input').addEventListener('input', filtrarPublicaciones);