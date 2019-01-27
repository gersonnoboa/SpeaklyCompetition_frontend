import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AddStreakService {

  constructor(private http: HttpClient) { }

  postStreaks(name: String, words: Number, streakDays: Number) {
    return this.http
    .post(environment.url + "/api/streaks", {
        name: name,
        words: words,
        streakDays: streakDays,
        date: new Date()
    })
    .pipe(
        catchError((error: HttpErrorResponse) => { return Observable.throw(error); })
    );
  }
}
