import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { fullstackComponent } from './components/fullstack.component';
import {mernComponent} from './components/mern.component';
import {mevnComponent} from './components/mevn.component';
import {meanComponent} from './components/mean.component';

@NgModule({
  declarations: [
    AppComponent,
    fullstackComponent,
    meanComponent,
    mernComponent,
    mevnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [fullstackComponent]
})
export class AppModule { }
