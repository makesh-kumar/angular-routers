import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  styleUrls: ['./../app.component.css'],
  template: `<h2>Product Componentss </h2>
  
  <button [routerLink]="['old']" routerLinkActive="btn-active">Go New Prod </button>


  <button [routerLink]="['new']" routerLinkActive="btn-active">Go Old Prod </button>

  <router-outlet></router-outlet>

  `,
})
export class ProductComponent {}

@Component({
  selector: 'app-new-prod',
  template: `<h2>New Prod Component </h2>`,
})
export class NewProductComponent {}

@Component({
  selector: 'app-old-prod',
  template: `<h2>Old Prod Component </h2>`,
})
export class OldProductComponent {}
