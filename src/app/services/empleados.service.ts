import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmpleadosService {

    constructor() { }

    muestraMensaje(mensaje: string) {
        alert(mensaje);
    }

}
