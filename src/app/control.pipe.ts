import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Pipe({
  name: 'control',
})
export class ControlPipe implements PipeTransform {
  transform(form: FormGroup, ...args: string[]): any {
    return (form.controls[args[0]] as FormGroup).controls;
  }
}
