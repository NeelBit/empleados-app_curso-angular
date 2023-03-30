import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosHijoComponent } from './components/lista-empleados-hijo/lista-empleados-hijo.component';
import { CaracteristicasEmpleadoComponent } from './components/caracteristicas-empleado/caracteristicas-empleado.component';
import { EmpleadosService } from './services/empleados.service';
import { ListaEmpleadosService } from './services/lista-empleados.service';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';

import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './components/login/login-guardian';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'contacto', component: ContactoComponent, canActivate:[LoginGuardian]},
    {path: 'editar-empleado/:id', component: EditarEmpleadoComponent},
    {path: 'login', component: LoginComponent},
    // path de 404 siempre al final
    {path: '**', component: PageNotFoundComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        ListaEmpleadosHijoComponent,
        CaracteristicasEmpleadoComponent,
        HomeComponent,
        ProyectosComponent,
        QuienesSomosComponent,
        ContactoComponent,
        EditarEmpleadoComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [EmpleadosService, ListaEmpleadosService, DataService, LoginService, CookieService, LoginGuardian],
    bootstrap: [AppComponent]
})
export class AppModule { }
