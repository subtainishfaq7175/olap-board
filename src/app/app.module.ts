import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DndModule} from 'ng2-dnd';


import { AppComponent } from './app.component';
import { ColomComponent } from './colom/colom.component';
import { ItemComponent } from './colom/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ColomComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
