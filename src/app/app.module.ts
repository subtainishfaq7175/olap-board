import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {DndModule} from 'ng2-dnd';


import { AppComponent } from './app.component';
import { ColomComponent } from './colom/colom.component';
import { ItemComponent } from './colom/item/item.component';
import { RowComponent } from './row/row.component';
import { ConstantsService } from './common/contants.service';

@NgModule({
  declarations: [
    AppComponent,
    ColomComponent,
    ItemComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()

  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
