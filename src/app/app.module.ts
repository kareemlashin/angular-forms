import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { MapperComponent } from './mapper/mapper.component';
import { TableComponent } from './table/table.component';
import { ArabicOnlyDirective } from './directive/arabic-only.directive';
import { ArabicAndNumberDirective } from './directive/arabic-and-number.directive';
import { EnglishAndNumberDirective } from './directive/english-and-number.directive';
import { EnglishOnlyDirective } from './directive/english-only.directive';
import { NumberDirective } from './directive/number.directive';
import { FloatDirective } from './directive/float.directive';

@NgModule({
  declarations: [AppComponent, FormDynamicComponent, FormComponent, ErrorComponent, MapperComponent, TableComponent, ArabicOnlyDirective, ArabicAndNumberDirective, EnglishAndNumberDirective, EnglishOnlyDirective, NumberDirective, FloatDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
