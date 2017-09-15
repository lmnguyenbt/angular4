import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './user.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor( private router:Router,
                 private userService:UserService ) {}

    canActivate( route:ActivatedRouteSnapshot, state:RouterStateSnapshot ): Observable<boolean> {

        return this.userService.isAuthenticated.take( 1 ).map( bool => !bool );
    }
}
