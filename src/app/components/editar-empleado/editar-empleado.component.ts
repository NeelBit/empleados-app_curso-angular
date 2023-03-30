import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ListaEmpleadosService } from 'src/app/services/lista-empleados.service';

@Component({
    selector: 'app-editar-empleado',
    templateUrl: './editar-empleado.component.html',
    styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

    empleados: Empleado[] = [];

    accion: number;

    // inyectar el servicio routes para usar el entutamiento
    constructor(
        private router: Router, 
        private miServicio: EmpleadosService, 
        private miServicioListaEmpleado: ListaEmpleadosService,
        private ruta: ActivatedRoute
        
    ) { }

    // se ejecuta en primer lugar cuando llamamos al archivo
    ngOnInit(): void {
        this.empleados = this.miServicioListaEmpleado.empleados;

        // almacenar el indice que recibe por la ruta/direccion
        this.indice = this.ruta.snapshot.params['id'];

        // buscar y almacenar empleado
        let miEmpleado: Empleado = this.miServicioListaEmpleado.encontrarEmpleado(this.indice);

        this.cuadroNombre = miEmpleado.nombre;
        this.cuadroApellido = miEmpleado.apellido;
        this.cuadroCargo = miEmpleado.cargo;
        this.cuadroSalario = miEmpleado.salario;

        // queryParams de accion
        this.accion = parseInt(this.ruta.snapshot.queryParams['accion']);
    }

    volverHome() {
        this.router.navigate(['']);
    }

    actualizar() {
        let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

        this.miServicioListaEmpleado.actualizarEmpleado(this.indice, miEmpleado);

        this.volverHome();
    }

    eliminarEmpleado() {
        this.miServicioListaEmpleado.eliminarEmpleado(this.indice);
        this.volverHome();
    }

    completarAccion() {

        console.log(this.accion);

        //if (this.accion === 1) {
            /* let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
            this.miServicioListaEmpleado.actualizarEmpleado(this.indice, miEmpleado);
            this.volverHome(); */

            //this.actualizar();

        //} else {
            /* this.miServicioListaEmpleado.eliminarEmpleado(this.indice);
            this.volverHome(); */
            //this.eliminarEmpleado();
        //}

        switch (this.accion) {
            // caso 1 editar
            case 1:
                let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
                this.miServicioListaEmpleado.actualizarEmpleado(this.indice, miEmpleado);
                this.volverHome();
                break;
            
            // caso 2 eliminar
            case 2:
                this.miServicioListaEmpleado.eliminarEmpleado(this.indice);
                this.volverHome();
                break;

            default:
                break;
        }
        
    }

    esNumber(val: any): boolean {
        //console.log(typeof val === 'number');
        return typeof val === 'number';
    }

    es1o2() {
        return this.accion ===1 || this.accion===2;
    }


    cuadroNombre: string = "";
    cuadroApellido: string = "";
    cuadroCargo: string = "";
    cuadroSalario: number = 0;

    indice: number;

}
