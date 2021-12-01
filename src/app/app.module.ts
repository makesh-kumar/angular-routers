import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Route, RouterModule } from '@angular/router';
import {
  AboutComponent,
  HomeComponent,
  PnfComponent,
  ProfileComponent,
} from './home.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: PnfComponent,
  },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    PnfComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
