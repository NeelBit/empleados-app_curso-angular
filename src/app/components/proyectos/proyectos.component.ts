import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ListaEmpleadosService } from 'src/app/services/lista-empleados.service';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

    empleados: Empleado[] = [];

    // inyectar el servicio routes para usar el entutamiento
    constructor(private router: Router, private miServicio: EmpleadosService, private miServicioListaEmpleado: ListaEmpleadosService) { }

    ngOnInit(): void {
        this.empleados = this.miServicioListaEmpleado.empleados;
    }

    volverHome() {
        this.router.navigate(['']);
    }

    guardarEmpl2() {
        let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

        this.miServicioListaEmpleado.agregarEmpleadoService(miEmpleado);

        this.volverHome();
    }

    cuadroNombre: string = "";
    cuadroApellido: string = "";
    cuadroCargo: string = "";
    cuadroSalario: number = 0;

}
