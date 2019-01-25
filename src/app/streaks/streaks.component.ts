import { Component, OnInit } from '@angular/core';
import { StreaksService } from './streaks.service';
import * as moment from 'moment';

@Component({
    selector: 'app-streaks',
    templateUrl: './streaks.component.html',
    styleUrls: ['./streaks.component.scss']
})
export class StreaksComponent implements OnInit {
    isLoading = false;
    streaks: any;

    constructor(private service: StreaksService) { }

    ngOnInit() {
        this.getStreaks();
    }

    getStreaks() {
        this.service.requestStreaks().subscribe(event => {
            this.configureData(event as Array<any>);
        },
        error => console.error(error));
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
}
