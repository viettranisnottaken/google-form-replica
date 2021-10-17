import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
