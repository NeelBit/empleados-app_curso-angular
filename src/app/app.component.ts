import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(private loginService: LoginService) {}

    //userName = "Anónimo";

    ngOnInit(): void {

        firebase.initializeApp({
            apiKey: "AIzaSyC8z0jBWXdn2WviD9xxFndcP0VM6I6Dnzc",
            authDomain: "misclientes-practicaangular.firebaseapp.com",
        });

        //this.userName = firebase.auth().name;
        

    }

    estaLogeado() {
        return this.loginService.isLogin();
    }
    
    salir() {
        this.loginService.logout();

        // recargar sitio. no funciona el logout si recargo desde aca
        //window.location.reload();
    }
    

}
