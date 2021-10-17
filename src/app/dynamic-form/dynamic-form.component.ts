import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { validateAbsentCorrectAnswer } from '../shared/validation/validateAbsentCorrectAnswer';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  // quiz = this.fb.group({
  //   questions: this.fb.array([
  //     this.createQuestionControl('Question 1', {
  //       label: 'answer',
  //       correctAnswer: true,
  //     }),
  //   ]),
  // });

  quiz = this.fb.group({
    questions: this.fb.array([
      {
        content: 'Question',
        type: 'single',
        answers: { label: 'Answer', correctAnswer: 'Correct Answer' },
      },
    ]),
  });

  questionTypes = [
    { value: 'single', label: 'Single choice' },
    { value: 'multiple', label: 'Multiple choice' },
  ];

  questionsControl = this.quiz.get('questions') as FormArray;

  selectedQuestionTypeValue: string = this.questionTypes[0].value;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.quiz);
  }

  addQuestion() {
    const question = this.createQuestionControl('Question', {
      label: 'answer',
      correctAnswer: true,
    });

    this.questionsControl?.push(question);
  }

  removeQuestion(questionIndex: number) {
    if (this.questionsControl.length <= 1) {
      return;
    }

    this.questionsControl.removeAt(questionIndex);
  }

  // addAnswer(questionIndex: number) {
  //   const answers = this.getCurrentAnswers(questionIndex);

  //   answers.push(this.createAnswerControl());
  // }

  // removeAnswer(answerIndex: number, question: any) {
  //   const answers = question.get('answers') as FormArray;

  //   if (answers.length <= 1) {
  //     return;
  //   }

  //   answers.removeAt(answerIndex);
  // }

  onQuestionTypeChange(event: MatSelectChange, question: AbstractControl) {
    // const answers = this.getCurrentAnswers(questionIndex);
    if (event.value === 'single') {
      const answers = question.get('answers') as FormArray;

      answers.controls.forEach((answer: any) => {
        answer.controls.correctAnswer.setValue(false);
      });
    }
  }

  // validateCorrectAnswer(
  //   event: MatCheckboxChange,
  //   question: any,
  //   answerIndex: number
  // ) {
  //   if (question.controls.type.value === 'single') {
  //     const answers = question.get('answers') as FormArray;

  //     answers.controls.forEach((answer: any, index) => {
  //       if (answerIndex === index) {
  //         return;
  //       }

  //       answer.controls.correctAnswer.setValue(false);
  //     });
  //   }
  // }

  logFormValue() {
    console.log('form value', this.quiz.value);
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
