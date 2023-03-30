import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';
import { DataService } from './data.service';
import { EmpleadosService } from './empleados.service';

// Inyectable se usa para servicios dentro de servicio. en este servicio quiero usar el otro servicio
@Injectable({
    providedIn: 'root'
})
export class ListaEmpleadosService {

    // aqui va el servicio inyectado
    constructor(private servicioMuestraMensajeInyectado: EmpleadosService, private dataService: DataService) { }

    // recibir data de empleados
    setEmpleados(misEmpleados: Empleado[]) {
        this.empleados = misEmpleados;
    }

    empleados: Empleado[] = [];
    /* empleados: Empleado[] = [
        new Empleado("juan", "perez", "gerente", 1200),
        new Empleado("cosme", "fulano", "operador", 900),
        new Empleado("roco", "gomez", "chofer", 600),
        new Empleado("julia", "cosita", "rrhh", 800),
    ]; */

    agregarEmpleadoService(miEmpleado: Empleado) {

        this.empleados.push(miEmpleado);

        this.dataService.guardarEmpleados(this.empleados);

        this.servicioMuestraMensajeInyectado.muestraMensaje(`Se añadió correctamente a ${miEmpleado.nombre} ${miEmpleado.apellido} :)`)
        //this.servicioMuestraMensajeInyectado.muestraMensaje("Empleado agregado correctamente");

    }

    encontrarEmpleado(indice: number): Empleado {

        // comprobar que exista indice antes de buscar empleado en la lista
        // this.empleados.at(indice) !=  undefined
        if (indice >= this.empleados.length) {
            
            console.log("indice >= length")
            let miEmpleado: Empleado = this.empleados[this.empleados.length-1];
            return miEmpleado;

        } else {
            let miEmpleado: Empleado = this.empleados[indice];
            return miEmpleado;
        }

        /* let miEmpleado: Empleado = this.empleados[indice];
        return miEmpleado; */
    }

    actualizarEmpleado(indice: number, empleado: Empleado) {
        this.empleados[indice] = empleado;

        // llamar a actualizar empleado de data
        this.dataService.actualizarEmpleados(indice, empleado);

        // probando a ver si actualiza automaticamente
        //this.obtenerEmpleados();

        // mensaje
        this.servicioMuestraMensajeInyectado.muestraMensaje(`Se actualizó correctamente a ${empleado.nombre} ${empleado.apellido} :)`)
        
    }

    eliminarEmpleado(indice: number) {

        let msg = `Se borró correctamente a ${this.empleados[indice].nombre} ${this.empleados[indice].apellido} :(`;

        this.empleados.splice(indice, 1);

        // eliminar en la data
        this.dataService.eliminarEmpleado(indice);

        // para reconstruir indice y no tener conflico entre array y bbdd
        if(this.empleados != null) {
            this.dataService.guardarEmpleados(this.empleados);
        }

        // mensaje
        this.servicioMuestraMensajeInyectado.muestraMensaje(msg);

        
    }


    // obtener empleados de la base de firebase, devuelve Observable (objeto que vigila modificacion en el almacen de datos y de forma asincrona va actualizando la informacion)
    obtenerEmpleados() {
        return this.dataService.cargarEmpleados();
    }

}
