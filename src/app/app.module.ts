import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { GridComponent } from './grid/grid.component'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule
    } from '@angular/material';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        appRoutingModule,
        MatTableModule,
        MatPaginatorModule, 
        BrowserAnimationsModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        GridComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }