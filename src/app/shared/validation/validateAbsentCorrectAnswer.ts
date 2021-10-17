import { AbstractControl, FormArray, ValidationErrors } from '@angular/forms';

export function validateAbsentCorrectAnswer(
  controlName: string
): ValidationErrors | null {
  return (control: AbstractControl) => {
    const answers = control as FormArray;
    const condition = answers.controls.some(
      (answer: AbstractControl) => answer.get('isCorrect')?.value
    );

    if (!condition) {
      return { error: 'need at least 1 correct answer' };
    }

    return null;
  };
}
