import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControlPipe } from '../control.pipe';
import { MultipleChoiceModule } from '../shared/form-fields/multiple-choice/multiple-choice.module';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MultipleChoiceModule,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
