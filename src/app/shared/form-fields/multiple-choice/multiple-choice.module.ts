import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MultipleChoiceComponent } from './multiple-choice.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ControlPipe } from 'src/app/control.pipe';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [MultipleChoiceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule,
  ],
  exports: [MultipleChoiceComponent],
})
export class MultipleChoiceModule {}
