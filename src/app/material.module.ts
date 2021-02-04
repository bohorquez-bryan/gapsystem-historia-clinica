import {NgModule} from '@angular/core';
import {
    MatMenuModule,

} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule ({
    imports:[
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    exports:[
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class MaterialModule {

}