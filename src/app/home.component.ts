import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.staticData = this.route.snapshot.data['staticData'];
  }
}

@Component({
  selector: 'app-profile',
  template: `<h2>Profile Component
  ID -> {{id}}
  REsolved Data -> {{resolvedData}}
  </h2>`,
})
export class ProfileComponent {
  id: string;
  resolvedData: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resolvedData = this.route.snapshot.data['resolvedData'];
  }
}

@Component({
  selector: 'app-about',
  template: `<h2>About Component </h2>
  <h2>ID -> {{id}}
  Filter by -> {{filterBy}}</h2>
  <h2>State Val -> {{stateVal}}</h2>
  `,
})
export class AboutComponent {
  id: string;
  filterBy: string;
  stateVal;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe((filterBy) => {
      this.filterBy = filterBy.get('filterBy');
    });

    // this.stateVal = this.router.getCurrentNavigation().extras.state;
    this.stateVal = history.state['stateVal'];
  }

  canExit() {
    return true;
    // return confirm('are you sure ?');
  }
}

@Component({
  selector: 'app-child',
  styleUrls: ['./app.component.css'],
  template: `<h2>Child Component</h2>
  <button [routerLink]="['child1']" routerLinkActive="btn-active">Go Child 1</button>
  <button [routerLink]="['child2']" routerLinkActive="btn-active">Go Child 2</button>
<router-outlet></router-outlet>
  
  `,
})
export class ChildComponent {}

@Component({
  selector: 'app-child1',
  template: `<h2>Child One </h2>`,
})
export class ChildOneComponent {}

@Component({
  selector: 'app-child2',
  template: `<h2>Child Two</h2>`,
})
export class ChildTwoComponent {}

@Component({
  selector: 'app-pnf',
  template: `<h2>Page Not Found Component </h2>`,
})
export class PnfComponent {}
