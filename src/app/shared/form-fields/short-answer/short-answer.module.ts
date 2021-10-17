import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortAnswerComponent } from './short-answer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [ShortAnswerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule,
  ],
  exports: [ShortAnswerComponent],
})
export class ShortAnswerModule {}
