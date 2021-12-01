import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import {
  AboutComponent,
  ChildComponent,
  ChildOneComponent,
  ChildTwoComponent,
  HomeComponent,
  PnfComponent,
  ProfileComponent,
} from './home.component';
import {
  CustomCanActivate,
  CustomCanActivateChild,
  CustomCanDeactivate,
  CustomCanLoad,
  CustomResolveGuard,
} from './Guards/custom.guard';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'child',
    component: ChildComponent,
    canActivateChild: [CustomCanActivateChild],
    children: [
      { path: 'child1', component: ChildOneComponent },
      { path: 'child2', component: ChildTwoComponent },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      staticData: 'some data',
    },
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    canActivate: [CustomCanActivate],
    canDeactivate: [CustomCanDeactivate],
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: { resolvedData: CustomResolveGuard },
  },
  {
    path: 'product',
    canLoad: [CustomCanLoad],
    loadChildren: () =>
      import('./Product/product.module').then((d) => d.ProductModule),
  },
  {
    path: '**',
    component: PnfComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    PnfComponent,
    ChildComponent,
    ChildOneComponent,
    ChildTwoComponent,
  ],
  providers: [
    CustomCanActivate,
    CustomCanActivateChild,
    CustomResolveGuard,
    CustomCanDeactivate,
    CustomCanLoad,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
