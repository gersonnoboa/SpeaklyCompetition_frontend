import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddStreakService } from './add-streak.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

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
        private ngFlashMessageService: NgFlashMessageService) { }

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
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Words added successfully"], 
                dismissible: true,
                timeout: 4000,
                type: "success"
            });
            this.router.navigateByUrl('/streaks');
        }, error => {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["An error occurred. Make sure that you are typing numbers only on the words and streak fields."], 
                dismissible: true,
                timeout: 4000,
                type: "danger"
            });
        })
    }
}
