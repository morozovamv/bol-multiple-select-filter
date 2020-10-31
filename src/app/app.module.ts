import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProductGroupComponent } from './product-group/product-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyButtonComponent,
    SearchInputComponent,
    CheckboxComponent,
    ProductGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
