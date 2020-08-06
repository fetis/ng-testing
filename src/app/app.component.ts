import { Component } from '@angular/core';

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-testing';

  get isGermany(): boolean {
    return this.dataService.country === 'DE';
  }

  constructor(
    private dataService: DataServiceService
  ) {
  }
}
