import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import {FilterPipe} from './app.filterPipe';
import {Filter} from './app.filter';

import { FilterComponent } from './filter/filter.component'
import { RegisterService } from './register..service';
import { HttpClientModule } from '@angular/common/http';
import { FiltComponent } from './filt/filt.component';

const router : Routes=[{path :'' ,redirectTo:'/filt',pathMatch:'full'},
{path:'filt',component:FiltComponent },
{path:'filter',component:FilterComponent },
{path:'register',component:RegisterComponent}]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    Filter,
    FilterPipe,
    FilterComponent,
    FiltComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
