import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { GroupsService } from './groups.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplyButtonComponent,
    SearchInputComponent,
    CheckboxComponent,
    ProductGroupComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [GroupsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
