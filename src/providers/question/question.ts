import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Question } from '../../model/question';
import { Const } from '../../const/Const';

@Injectable()
export class QuestionProvider {

	// colocar o index do array de questions que vai retornar;
	num: Array<number> = [];
	tmpNum: number = 0;

	constructor(private databaseProvider: DatabaseProvider) {
	}

	loadQuestions(qtQuestions) {

		let questions = [];

		while (qtQuestions > 0) {
			questions.push(this.getRandomQuestion());
			qtQuestions--;
		}

		console.log("questions return", questions);
		
		return questions;

		// return new Promise((resolve, reject) => {
		// 	this.databaseProvider.getDB()
		// 		.then((db: SQLiteObject) => {
		// 			let sql = 'SELECT * FROM question';

		// 			console.log("sql", sql);

		// 			return db.executeSql(sql)
		// 				.then((result: any) => {
		// 					if (result.rows.length >= 1) {
		// 						let res = [];
		// 						for (let i = 0; i < result.rows.length; i++) {
		// 							res.push(this.processRow(result.rows.item(i)));
		// 						}
		// 						resolve(res);
		// 					} else {
		// 						resolve([]);
		// 					}

		// 					return null;
		// 				})
		// 				.catch((e) => console.error(e));
		// 		})
		// 		.catch((e) => console.error(e));
		// });

	}

	getRandomQuestion() {
		let questions = Const.questions;
		this.tmpNum = Math.floor(Math.random() * questions.length);
		console.log("this.tmpNum", this.tmpNum);
		console.log("num", this.num);
		console.log("Const.questions", questions);

		console.log("Const.questions", this.num.indexOf(this.tmpNum));

		if (this.num.indexOf(this.tmpNum) == -1) {
			this.num.push(this.tmpNum);
		} else {
			// enquanto não achou no array continue
			while (this.num.indexOf(this.tmpNum) > -1) {
				this.tmpNum = Math.floor(Math.random() * questions.length);

				if (this.num.indexOf(this.tmpNum) == -1) {
					this.num.push(this.tmpNum);
					break;
				}
				console.log("Const.questions", this.num.indexOf(this.tmpNum));

			}
		}

		console.log("tmpNum", this.tmpNum);
		console.log("num", this.num);
		console.log("Const.questions", questions);

		return questions[this.tmpNum];
	}

	processRow(rs: any): Question {
		let question = new Question();

		question.idQuestion = rs.ID_QUESTION;
		question.dsQuestion = rs.DS_QUESTION;
		question.opt1 = rs.OPT1;
		question.opt2 = rs.OPT2;
		question.opt3 = rs.OPT3;
		question.opt4 = rs.OPT4;
		question.score = rs.SCORE;

		return question;
	}

}