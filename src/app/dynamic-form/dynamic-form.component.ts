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
  quiz = this.fb.group({
    questions: this.fb.array([
      this.createQuestionControl('Question 1', 'single', {
        label: 'answer',
        correctAnswer: true,
      }),
    ]),
  });

  questionTypes = [
    { value: 'single', label: 'Single choice' },
    { value: 'multiple', label: 'Multiple choice' },
    { value: 'fill', label: 'Fill in the blanks' },
    { value: 'upload', label: 'File upload' },
  ];

  questionsControl = this.quiz.get('questions') as FormArray;

  selectedQuestionTypeValue: string = this.questionTypes[0].value;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.quiz);
  }

  addQuestion() {
    const question = this.createQuestionControl('Question', 'single', {
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
    const answers = question.get('answers') as FormArray;
    const answerValues = answers.value;
    console.log('====', answerValues);

    switch (event.value) {
      case 'single':
        answers.controls.forEach((answer: any) => {
          answer.controls.correctAnswer.setValue(false);
        });
        break;
      case 'fill':
        answers.controls.forEach((answer: any, index) => {
          answer.controls.correctAnswer.setValue('correct answer');
        });
        break;

      default:
        break;
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

  private createAnswerControl(label = '', correctAnswer: boolean | string) {
    return this.fb.group({
      label,
      correctAnswer,
    });
  }

  private createQuestionControl(
    content: string,
    type = 'single',
    answer: { label: string; correctAnswer: boolean | string }
  ) {
    return this.fb.group({
      content,
      type,
      answers: this.fb.array(
        [this.createAnswerControl(answer.label, answer.correctAnswer)],
        validateAbsentCorrectAnswer('correctAnswer')
      ),
    });

    // let form;

    // switch (type) {
    //   case 'single':
    //     form = this.fb.group({
    //       content,
    //       type,
    //       answers: this.fb.array(
    //         [this.createAnswerControl(answer.label, answer.correctAnswer)],
    //         validateAbsentCorrectAnswer('correctAnswer')
    //       ),
    //     });
    //     break;
    //   case 'multiple':
    //     this.fb.group({
    //       content,
    //       type,
    //       answers: this.fb.array(
    //         [this.createAnswerControl(answer.label, answer.correctAnswer)],
    //         validateAbsentCorrectAnswer('correctAnswer')
    //       ),
    //     });
    //     break;
    //   case 'fill':
    //     this.fb.group({
    //       content,
    //       type,
    //       answers: this.fb.array(
    //         [this.createAnswerControl(answer.label, answer.correctAnswer)],
    //         validateAbsentCorrectAnswer('correctAnswer')
    //       ),
    //     });
    //     break;
    //   case 'upload':
    //     break;

    //   default:
    //     form = this.fb.group({
    //       content,
    //       type,
    //       answers: this.fb.array(
    //         [this.createAnswerControl(answer.label, answer.correctAnswer)],
    //         validateAbsentCorrectAnswer('correctAnswer')
    //       ),
    //     });
    //     break;
    // }

    // return form
  }
}
