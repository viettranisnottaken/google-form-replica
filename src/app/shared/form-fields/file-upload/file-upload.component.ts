import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor, OnInit {
  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any) {}

  registerOnChange(fn: any) {}

  registerOnTouched(fn: any) {}

  setDisabledState(isDisabled: boolean) {}
}
