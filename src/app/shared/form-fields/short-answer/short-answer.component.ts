import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShortAnswerComponent),
      multi: true,
    },
  ],
})
export class ShortAnswerComponent implements ControlValueAccessor, OnInit {
  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any) {}

  registerOnChange(fn: any) {}

  registerOnTouched(fn: any) {}

  setDisabledState(isDisabled: boolean) {}
}
