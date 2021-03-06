import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { validateAbsentCorrectAnswer } from '../../validation/validateAbsentCorrectAnswer';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  // question = this.fb.group({
  //   content: 'Question',
  //   type: 'single',
  //   answers: this.fb.array(
  //     [this.createAnswerControl('Answer', true)],
  //     validateAbsentCorrectAnswer('correctAnswer')
  //   ),
  // });

  @Input() questionIndex!: number;
  @Input() question!: FormGroup;

  answers!: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.question);
    this.answers = this.question.controls.answers as FormArray;
  }

  addAnswer(question: AbstractControl) {
    const answers = question.get('answers') as FormArray;

    answers.push(this.createAnswerControl());
  }

  removeAnswer(answerIndex: number, question: AbstractControl) {
    const answers = question.get('answers') as FormArray;

    if (answers.length <= 1) {
      return;
    }

    answers.removeAt(answerIndex);
  }

  validateCorrectAnswer(
    event: MatCheckboxChange,
    question: any,
    answerIndex: number
  ) {
    if (question.controls.type.value === 'single') {
      const answers = question.get('answers') as FormArray;

      answers.controls.forEach((answer: any, index) => {
        if (answerIndex === index) {
          return;
        }

        answer.controls.correctAnswer.setValue(false);
      });
    }
  }

  private createAnswerControl(label = '', correctAnswer = false) {
    return this.fb.group({
      label,
      correctAnswer,
    });
  }

  private createQuestionControl(
    content: string,
    answer: { label: string; correctAnswer: boolean }
  ) {
    return this.fb.group({
      content,
      type: 'single',
      answers: this.fb.array(
        [this.createAnswerControl(answer.label, answer.correctAnswer)],
        validateAbsentCorrectAnswer('correctAnswer')
      ),
    });
  }
}
