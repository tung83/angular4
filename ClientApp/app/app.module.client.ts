import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdAutocompleteModule, MdRadioModule, MdNativeDateModule, MdDatepickerModule } from '@angular/material';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdCardModule,
        MdInputModule,
        MdAutocompleteModule,
        MdRadioModule,
        MdNativeDateModule,
        MdDatepickerModule,
        BrowserAnimationsModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ]
})
export class AppModule {
}
