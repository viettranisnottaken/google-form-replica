import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentlySelectedElementDirective } from './currently-selected-element.directive';
import { ControlPipe } from './control.pipe';

@NgModule({
  declarations: [AppComponent, CurrentlySelectedElementDirective],
  imports: [BrowserModule, DynamicFormModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
