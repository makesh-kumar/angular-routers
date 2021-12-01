import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  goAbout() {
    this.router.navigate(['about', 178], {
      queryParams: { filterBy: 'name' },
      queryParamsHandling: 'merge',
      state: {
        stateVal: 'someState',
      },
    });
  }
}
