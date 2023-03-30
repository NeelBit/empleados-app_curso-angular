import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
    selector: 'app-lista-empleados-hijo',
    templateUrl: './lista-empleados-hijo.component.html',
    styleUrls: ['./lista-empleados-hijo.component.css']
})
export class ListaEmpleadosHijoComponent implements OnInit {

    @Input() empleadoDeLista: Empleado;
    @Input() indice: number;


    @Input() cuadroNombre: string;
    @Input() cuadroApellido: string;
    @Input() cuadroCargo: string;
    @Input() cuadroSalario: number;

    @Input() empleadosLista: Empleado[];

    constructor() { }

    ngOnInit(): void {
    }

    editarEmp(posicion: number, nombre: string, apellido: string, cargo: string, salario: any) {
        //this.empleadosLista[posicion] = new Empleado(nombre, apellido, cargo, salario) ;
        this.empleadosLista[posicion].nombre = nombre;
        this.empleadosLista[posicion].apellido = apellido;
        this.empleadosLista[posicion].cargo = cargo;
        this.empleadosLista[posicion].salario = salario;
    }

    abrirEditor(indice: number) {

        /* this.newItemEvent.emit(indice); */

        /* this.messageEvent.emit(this.cuadroNombre = this.empleadosLista[indice].nombre);

        alert("hola");
        this.cuadroNombre = this.empleadosLista[indice].nombre;
        this.cuadroApellido = this.empleadosLista[indice].apellido;
        this.cuadroCargo = this.empleadosLista[indice].cargo;
        this.cuadroSalario = this.empleadosLista[indice].salario; */

        /* console.log(this.cuadroNombre);
        console.log(this.cuadroApellido);
        console.log(this.cuadroCargo);
        console.log(this.cuadroSalario); */
        /* console.log("hola");

        console.log(this.empleadosLista[indice].nombre);
        console.log(this.empleadosLista[indice].apellido);
        console.log(this.empleadosLista[indice].cargo);
        console.log(this.empleadosLista[indice].salario); */

        

    }

    @Output() messageEvent  = new EventEmitter<any>();

    /* addNewItem(value: number) {
        this.newItemEvent.emit(value);
    } */



    // Output para agregar caracteristicas
    caracteristicasLista: string[] = [];

    agregarCaracteristica(nuevaCaracteristica: string) {
        this.caracteristicasLista.push(nuevaCaracteristica);
        
    }

    
}
