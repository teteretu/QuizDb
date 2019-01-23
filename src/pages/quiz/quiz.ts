
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { Question } from '../../model/question';
// import { QuestionAnswerProvider } from '../../providers/question-answer/question-answer';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  NUM_QUESTIONS = 5;

  @ViewChild('slides') slides: Slides;

  hasFinished: boolean = false;
  score: number = 0;
  questions = [];


  constructor(public questionProvider: QuestionProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    // private questionAnswerProvider: QuestionAnswerProvider
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

    this.slides.lockSwipes(true);

    console.log("load questions");
    this.questions = this.questionProvider.loadQuestions(this.NUM_QUESTIONS);/*
      .then((data) => {

        console.log("questions", data);
        if (data) {
          this.questions = data;
        }

      })*/;

  }

  ngOnChanges() {
    console.log("active slide", this.slides.isEnd());
  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  selectAnswer(opt: number, question: Question) {
    // this.questionAnswerProvider.setAnswerByQuestion(question.idQuestion, ckCorrect);

    question.selected = true;

    if (question.optCorrectAnswer == opt) {
      this.score++;

      const toast = this.toastCtrl.create({
        message: 'Resposta Correta!!',
        duration: 2000
      });
      toast.present();

    } else {
      const toast = this.toastCtrl.create({
        message: 'Resposta Incorreta!!',
        duration: 2000
      });
      toast.present();
    }

    setTimeout(() => {
      this.nextSlide();
    }, 1000);
  }

  restartQuiz() {
    this.questions = this.questionProvider.loadQuestions(this.NUM_QUESTIONS);
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000, false);
    this.slides.lockSwipes(true);
  }

  backButton() {
    this.navCtrl.pop();
  }

}
