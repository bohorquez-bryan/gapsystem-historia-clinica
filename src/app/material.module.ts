import {NgModule} from '@angular/core';
import {
    MatMenuModule,

} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule ({
    imports:[
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule
    ],
    exports:[
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule
    ]
})
export class MaterialModule {

}