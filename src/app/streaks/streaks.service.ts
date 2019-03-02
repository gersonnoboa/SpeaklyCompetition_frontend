import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root'
})
export class StreaksService {
    constructor(private http: HttpClient) { }

    requestStreaks() {
        return this.http
        .get(environment.url + "/api/streaks/week")
        .pipe(
            catchError((error: HttpErrorResponse) => { 
                console.error(error); 
                return Observable.throw(error); })
        );
    }
}
