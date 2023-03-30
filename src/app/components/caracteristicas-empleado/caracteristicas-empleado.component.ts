import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
    selector: 'app-caracteristicas-empleado',
    templateUrl: './caracteristicas-empleado.component.html',
    styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

    @Input() indice: number;
    @Input() empleadosLista: Empleado[];

    @Output() caracteristicasEmpleados = new EventEmitter<string>();

    agregaCaracteristicas(value: string) {
        this.caracteristicasEmpleados.emit(value);

        // uso de servicio para mostrar alert, si quiero que muestre la caracteristica, usar el parametro que recibe value
        this.miServicio.muestraMensaje(`Caracteristicas añadidas correctamente a ${this.empleadosLista[this.indice].nombre}` );
    
        this.caracteristicaCampoInput = "";
    }

    constructor(private miServicio: EmpleadosService) { }

    ngOnInit(): void {
    }

    caracteristicaCampoInput = "";

}
