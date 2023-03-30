import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ListaEmpleadosService } from 'src/app/services/lista-empleados.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title = 'Listado de empleados';
    empleados: Empleado[] = [];


    /* guardarEmp(nombre: string, apellido: String, cargo: String, salario: any) {

        this.empleados.push(new Empleado(nombre, apellido, cargo, +salario));
    } */


    guardarEmpl2() {
        let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

        // hacer uso del servicio
        // hice inyeccion de servicio, usa el servicio en el otro servicio.
        //this.miServicio.muestraMensaje(`Se añadió correctamente a ${this.cuadroNombre} ${this.cuadroApellido} :)`);
        
        // copio para servicio ListaEmpleadosService
        //this.empleados.push(miEmpleado);
        this.miServicioListaEmpleado.agregarEmpleadoService(miEmpleado);

        // resetear cuadros despues de agregar
        this.cuadroNombre = "";
        this.cuadroApellido = "";
        this.cuadroCargo = "";
        this.cuadroSalario = 0;

    }

    /* editarEmp(posicion: number, nombre: string, apellido: string, cargo: string, salario: any) {
        this.empleados[posicion] = new Empleado(nombre, apellido, cargo, salario) ;
    } */

    cuadroNombre: string = "";
    cuadroApellido: string = "";
    cuadroCargo: string = "";
    cuadroSalario: number = 0;


    // Se utiliza el constructor para crear lo del servicio
    constructor(private miServicio: EmpleadosService, private miServicioListaEmpleado: ListaEmpleadosService) { // inyectar en el componente principal el servicio
        // almacenar toda la informacion de la lista de empleados del servicio al array de esta clase
        //this.empleados = this.miServicioListaEmpleado.empleados;
        // la otra forma es con OnInit

    }

    // metodo obligatorio para OnInit, esto es para reemplazar lo del contenido del constructor
    ngOnInit(): void {
        // carga las empleados que se crea manual
        //this.empleados = this.miServicioListaEmpleado.empleados;

        this.miServicioListaEmpleado.obtenerEmpleados().subscribe(misEmpleados => {
            
            //console.log(misEmpleados);

            // cargar en array empleados, la data. data de tipo Object entonces tengo que pasar los valores
            this.empleados = Object.values(misEmpleados);

            // pasar registro a setEmpleados 
            this.miServicioListaEmpleado.setEmpleados(this.empleados);


        });
    }

}
