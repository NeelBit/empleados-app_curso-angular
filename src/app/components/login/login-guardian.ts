import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login.service";


/* guardian es algo que controla y limita visistas a paginas, en este caso se limita la pag contacto a solo logueados  */
@Injectable()
export class LoginGuardian implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if (this.loginService.isLogin()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
        
    }

}