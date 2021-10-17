import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPipe } from '../control.pipe';

@NgModule({
  declarations: [ControlPipe],
  imports: [CommonModule],
  exports: [ControlPipe],
})
export class SharedModule {}
