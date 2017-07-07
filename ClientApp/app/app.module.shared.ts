import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MaterialdemoComponent } from './components/materialdemo/materialdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCardModule, MdInputModule, MdAutocompleteModule, MdRadioModule} from '@angular/material';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MaterialdemoComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MdCardModule,
        MdInputModule,
        MdAutocompleteModule,
        MdRadioModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
