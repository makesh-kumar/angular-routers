import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<h2>Home Component </h2>
  Static Data -> {{staticData}}
  `,
})
export class HomeComponent {
  staticData;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.staticData = this.route.snapshot.data;
  }
}

@Component({
  selector: 'app-profile',
  template: `<h2>Profile Component
  ID -> {{id}}
  </h2>`,
})
export class ProfileComponent {
  id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}

@Component({
  selector: 'app-about',
  template: `<h2>About Component </h2>
  <h2>ID -> {{id}}
  Filter by -> {{filterBy}}</h2>
  `,
})
export class AboutComponent {
  id: string;
  filterBy: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe((filterBy) => {
      this.filterBy = filterBy.get('filterBy');
    });
  }
}

@Component({
  selector: 'app-pnf',
  template: `<h2>Page Not Found Component </h2>`,
})
export class PnfComponent {}
