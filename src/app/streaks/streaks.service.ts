import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StreaksService {
    constructor(private http: HttpClient) { }

    requestStreaks() {
        console.log("requesting streaks");
        return this.http.get(environment.url + "/api/streaks/week");
    }
}
