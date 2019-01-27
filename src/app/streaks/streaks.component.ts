import { Component, OnInit } from '@angular/core';
import { StreaksService } from './streaks.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-streaks',
    templateUrl: './streaks.component.html',
    styleUrls: ['./streaks.component.scss']
})
export class StreaksComponent implements OnInit {
    isLoading = false;
    streaks: any;

    constructor(private service: StreaksService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.getStreaks();
    }

    getStreaks() {
        this.service.requestStreaks().subscribe(event => {
            this.configureData(event as Array<any>);
        },
        error => {
            this.showSnackBar("An error occurred. Please try again later.");
            console.error(error);
        });
    }

    configureData(data: Array<any>) {
        data.map(x => {
            x.formattedDate = moment(x.lastUpdated).format("MMM Do YY");
        });

        this.showData(data);
    }

    showData(data: Array<any>) {
        this.isLoading = false;
        this.streaks = data;
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
