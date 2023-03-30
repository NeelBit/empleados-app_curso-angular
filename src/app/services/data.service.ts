import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient, private loginService: LoginService) { }

    guardarEmpleados(empleados: Empleado[]) {

        // metodo post sube la informacion no importa si esta duplicada
        /* this.httpClient.post('https://misclientes-practicaangular-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(

            response => console.log("Se han guardado los datos en la bbdd: " + response),
            error => console.log("¡Error! " + error),

        ); */

        // put para actualizar la informacion reemplazando
        this.httpClient.put('https://misclientes-practicaangular-default-rtdb.firebaseio.com/datos.json', empleados).subscribe({
            next: (v) => console.log("Se han guardado los datos en la bbdd: " + v),
            error: (e) => console.log("¡Error! " + e),
            }

        );
    }

    cargarEmpleados() {
        const token = this.loginService.getIdToken()

        return this.httpClient.get('https://misclientes-practicaangular-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    actualizarEmpleados(indice: number, empleado: Empleado) {
        let url = `https://misclientes-practicaangular-default-rtdb.firebaseio.com/datos/${indice}.json`;

        this.httpClient.put(url, empleado).subscribe({
            next: (v) => console.log("Se ha editado correctamente a: " + v),
            error: (e) => console.log("¡Error! " + e),
        });
    }

    eliminarEmpleado(indice: number) {
        let url = `https://misclientes-practicaangular-default-rtdb.firebaseio.com/datos/${indice}.json`;

        this.httpClient.delete(url).subscribe({
            next: (v) => console.log("Se ha borrado correctamente a: " + v),
            error: (e) => console.log("¡Error! " + e),
        });
    }

}
