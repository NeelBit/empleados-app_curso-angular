import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private route: Router, private cookieService: CookieService) { }

    token: string;

    login(email: string, password: string) {

        // .then para llamar a una funcion cuando la promesa es resuelta
        firebase.auth().signInWithEmailAndPassword(email, password).then(

            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        // generar token
                        this.token = token;

                        // guardar token en cookie. guardar cookie llamada token
                        this.cookieService.set("token", this.token);

                        // redireccionar a inicio
                        this.route.navigate(['']);
                    }
                )
            }
        );
    }

    getIdToken() {
        //return this.token;
        return this.cookieService.get("token");
    }

    // funcion para saber si se genero token/si esta logeado
    isLogin() {

        //console.log(this.cookieService.get("token"));

        //return this.token;
        return this.cookieService.get("token");
        
    }

    // cambiar token, deslogearse
    logout() {
        firebase.auth().signOut().then( () => {
            // vaciar token
            this.token = '';
            // vaciar valor token de cookie
            this.cookieService.set("token", this.token);

            this.route.navigate(['']);

            // recargar sitio
            window.location.reload();
        });
    }

}
