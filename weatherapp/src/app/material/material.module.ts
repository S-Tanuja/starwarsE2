import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents:any= [
  MatTabsModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule
 ]

@NgModule({
  declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})
export class MaterialModule { }
