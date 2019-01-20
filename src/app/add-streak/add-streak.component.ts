import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-streak',
  templateUrl: './add-streak.component.html',
  styleUrls: ['./add-streak.component.scss']
})
export class AddStreakComponent implements OnInit {
    formAddStreak: FormGroup;
    
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.formAddStreak = this.fb.group({
            "name": "",
            "words": "",
            "streak": ""
      });
    }

}
