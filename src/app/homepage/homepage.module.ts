import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { InfoComponent } from './info/info.component';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
  declarations: [HomepageComponent, InfoComponent, MainBodyComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
