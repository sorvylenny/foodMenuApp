import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListfoodComponent } from './Components/pages/listfood/listfood.component';
import { DetailsFoodComponent } from './Components/pages/details-food/details-food.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/pages/header/header.component';
import { FooterComponent } from './Components/pages/footer/footer.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListfoodComponent,
    DetailsFoodComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
