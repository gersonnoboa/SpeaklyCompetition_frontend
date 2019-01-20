import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AddStreakService {

  constructor(private http: HttpClient) { }

  postStreaks(name: String, words: Number, streakDays: Number) {
    return this.http.post(environment.url + "/api/streaks", {
        name: name,
        words: words,
        streakDays: streakDays
    })
  }
}
