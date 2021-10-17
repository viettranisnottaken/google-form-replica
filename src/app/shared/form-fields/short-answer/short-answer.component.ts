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
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.scss'],
})
export class ShortAnswerComponent implements OnInit {
  @Input() questionIndex!: number;
  @Input() question!: FormGroup;

  answers!: any;
  currentAnswers!: any;

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
    this.currentAnswers = this.answers.value;
    console.log(this.currentAnswers);

    if (question.controls.type.value === 'fill') {
      const answers = question.get('answers') as FormArray;
      answers.controls.forEach((answer: any, index) => {
        // this.currentAnswers.
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
