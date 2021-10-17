import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MultipleChoiceModule } from '../shared/form-fields/multiple-choice/multiple-choice.module';
import { ShortAnswerModule } from '../shared/form-fields/short-answer/short-answer.module';
import { FileUploadModule } from '../shared/form-fields/file-upload/file-upload.module';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MultipleChoiceModule,
    ShortAnswerModule,
    FileUploadModule,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
