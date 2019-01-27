import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddStreakService } from './add-streak.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-streak',
  templateUrl: './add-streak.component.html',
  styleUrls: ['./add-streak.component.scss']
})
export class AddStreakComponent implements OnInit {
    formAddStreak: FormGroup;
    
    constructor(private fb: FormBuilder, 
        private service: AddStreakService, 
        private router: Router,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.formAddStreak = this.fb.group({
            "name": "",
            "words": "",
            "streakDays": ""
      });
    }

    onSubmitClicked() {
        const name = this.formAddStreak.controls["name"].value;
        const words = this.formAddStreak.controls["words"].value;
        const streakDays = this.formAddStreak.controls["streakDays"].value;

        this.service.postStreaks(name, words, streakDays).subscribe(event => {
            this.showSnackBar("Words added successfully");
            this.router.navigateByUrl("/streaks");
        }, error => {
            this.showSnackBar("An error occurred. Make sure that you are typing numbers only on the words and streak fields.");
        });
    }

    showSnackBar(message: string) {
        this.snackBar.open(message,
            "OK",
            {
                duration: 4000,
                verticalPosition: 'top'
            })
    }
}
