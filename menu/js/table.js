const clases = [
    {
        nro: 1,
        unidad_didactica: "Front-End",
        fecha_clases: "2024-09-07",
        inicio: "7:30",
        fin: "10:30",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 50,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Septiembre",
        seccion: "A",
        periodo_academico: "2024-2",
        producto: "Curso Regular",
        codigo_alumno: "001",
        codigo_docente: "D01"
    },
    {
        nro: 2,
        unidad_didactica: "Back-End",
        fecha_clases: "2024-09-03",
        inicio: "10:00",
        fin: "13:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 60,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Práctico",
        codigo_alumno: "002",
        codigo_docente: "D02"
    },
    {
        nro: 3,
        unidad_didactica: "Front-End",
        fecha_clases: "2024-09-03",
        inicio: "15:00",
        fin: "21:00",
        duracion_min: 360,
        duracion_horas: 6,
        tarifa: 50,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Intensivo",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nro: 4,
        unidad_didactica: "Back-End",
        fecha_clases: "2024-09-05",
        inicio: "15:00",
        fin: "21:00",
        duracion_min: 360,
        duracion_horas: 6,
        tarifa: 60,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Intensivo",
        codigo_alumno: "003",
        codigo_docente: "D03"
    },
    {
        nro: 5,
        unidad_didactica: "Calculo",
        fecha_clases: "2024-09-05",
        inicio: "10:00",
        fin: "13:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 70,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Septiembre",
        seccion: "B",
        periodo_academico: "2024-2",
        producto: "Curso Regular",
        codigo_alumno: "002",
        codigo_docente: "D02"
    },
    {
        nro: 6,
        unidad_didactica: "Algoritmos",
        fecha_clases: "2024-10-15",
        inicio: "9:00",
        fin: "12:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 65,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Octubre",
        seccion: "A",
        periodo_academico: "2024-2",
        producto: "Curso Regular",
        codigo_alumno: "004",
        codigo_docente: "D04"
    },
    {
        nro: 7,
        unidad_didactica: "JavaScript Avanzado",
        fecha_clases: "2023-11-20",
        inicio: "14:00",
        fin: "18:00",
        duracion_min: 240,
        duracion_horas: 4,
        tarifa: 80,
        moneda: "S/.",
        estado: "Pendiente",
        mes_pagado: "Noviembre",
        seccion: "C",
        periodo_academico: "2023-2",
        producto: "Curso Práctico",
        codigo_alumno: "005",
        codigo_docente: "D05"
    },
    {
        nro: 8,
        unidad_didactica: "Cálculo II",
        fecha_clases: "2023-12-12",
        inicio: "8:00",
        fin: "11:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 75,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Diciembre",
        seccion: "B",
        periodo_academico: "2023-2",
        producto: "Curso Regular",
        codigo_alumno: "006",
        codigo_docente: "D06"
    },
    {
        nro: 9,
        unidad_didactica: "Bases de Datos",
        fecha_clases: "2022-05-08",
        inicio: "10:00",
        fin: "13:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 70,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Mayo",
        seccion: "A",
        periodo_academico: "2022-1",
        producto: "Curso Práctico",
        codigo_alumno: "007",
        codigo_docente: "D07"
    },
    {
        nro: 10,
        unidad_didactica: "Estructura de Datos",
        fecha_clases: "2021-08-10",
        inicio: "11:00",
        fin: "14:00",
        duracion_min: 180,
        duracion_horas: 3,
        tarifa: 65,
        moneda: "S/.",
        estado: "Pagado",
        mes_pagado: "Agosto",
        seccion: "B",
        periodo_academico: "2021-2",
        producto: "Curso Regular",
        codigo_alumno: "008",
        codigo_docente: "D08"
    }
];


function filtrarClases() {
    const year = document.getElementById("select-year").value;
    const month = document.getElementById("select-month").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    const monthNumber = month && month !== "Todos los meses" ? new Date(`${month} 1, ${year}`).getMonth() + 1 : null;

    const clasesFiltradas = clases.filter(clase => {
        const fecha = new Date(clase.fecha_clases);
        const claseYear = fecha.getFullYear();
        const claseMonth = fecha.getMonth() + 1;

        if (!year && !month && !startDate && !endDate) return true;

        let cumpleFiltros = true;

        if (year) {
            cumpleFiltros = claseYear == year;
        }
        if (month && month !== "Todos los meses") {
            cumpleFiltros = cumpleFiltros && claseMonth == monthNumber;
        }
        if (startDate && new Date(clase.fecha_clases) < new Date(startDate)) {
            cumpleFiltros = false;
        }
        if (endDate && new Date(clase.fecha_clases) > new Date(endDate)) {
            cumpleFiltros = false;
        }

        return cumpleFiltros;
    });

    mostrarClasesEnTabla(clasesFiltradas);
    calcularResumen(clasesFiltradas);
}

function cargarMeses() {
    const yearSelect = document.getElementById("select-year").value;
    const monthSelect = document.getElementById("select-month");
    monthSelect.innerHTML = "";

    const optionTodos = document.createElement("option");
    optionTodos.value = "Todos los meses";
    optionTodos.textContent = "Todos los meses";
    monthSelect.appendChild(optionTodos);

    const fechaActual = new Date();
    const yearActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    meses.forEach((mes, index) => {
        if (yearSelect < yearActual || (yearSelect == yearActual && index + 1 <= mesActual)) {
            const option = document.createElement("option");
            option.value = mes;
            option.textContent = mes;
            monthSelect.appendChild(option);
        }
    });
}

function mostrarRangoDeFechas() {
    const year = document.getElementById("select-year").value;
    const month = document.getElementById("select-month").value;

    if (year && month && month !== "Todos los meses") {
        const firstDay = new Date(`${month} 1, ${year}`).toISOString().split('T')[0];
        const lastDay = new Date(year, new Date(`${month} 1, ${year}`).getMonth() + 1, 0).toISOString().split('T')[0];

        document.getElementById("start-date").value = firstDay;
        document.getElementById("end-date").value = lastDay;
    } else {
        document.getElementById("start-date").value = "";
        document.getElementById("end-date").value = "";
    }
}

function mostrarClasesEnTabla(clasesFiltradas) {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";

    if (clasesFiltradas.length === 0) {
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 14;
        cell.textContent = "No hay datos disponibles.";
        return;
    }

    clasesFiltradas.forEach((clase) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${clase.nro}</td>
            <td>${clase.unidad_didactica}</td>
            <td>${clase.fecha_clases}</td>
            <td>${clase.inicio}</td>
            <td>${clase.fin}</td>
            <td>${clase.duracion_min}</td>
            <td>${clase.duracion_horas}</td>
            <td>${clase.tarifa}</td>
            <td>${clase.moneda}</td>
            <td>${clase.estado}</td>
            <td>${clase.mes_pagado}</td>
            <td>${clase.seccion}</td>
            <td>${clase.periodo_academico}</td>
            <td>${clase.producto}</td>
        `;
    });
}

function calcularResumen(clasesFiltradas) {
    let totalMin = 0;
    let totalHours = 0;
    let totalTariff = 0;

    clasesFiltradas.forEach((clase) => {
        totalMin += clase.duracion_min;
        totalHours += clase.duracion_horas;
        totalTariff += clase.duracion_horas * clase.tarifa;
    });

    document.getElementById("total-min").textContent = totalMin;
    document.getElementById("total-hours").textContent = totalHours;
    document.getElementById("total-tariff").textContent = totalTariff;
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarClasesEnTabla(clases);
    calcularResumen(clases);
    document.getElementById("select-year").addEventListener("change", cargarMeses);
    document.getElementById("select-month").addEventListener("change", mostrarRangoDeFechas);
    document.getElementById("filter-button").addEventListener("click", filtrarClases);
});