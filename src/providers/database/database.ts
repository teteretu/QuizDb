import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Http } from '@angular/http';
import * as xml2js from 'xml2js';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite,
    private http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }

  /**
   * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
  */
  public getDB() {
    return this.sqlite.create({
      name: 'QUIZ_DB',
      location: 'default'
    });
  }

  createDatabase() {
    let _db: SQLiteObject;

    return new Promise(() => {
      return this.getDB()
        .then((db: SQLiteObject) => {
          _db = db;
        })
        .then(_ => {
          return new Promise((resolve, reject) => {
            this.http.get('assets/sqlite-kickstart/DDL.xml').subscribe(ddl => {
              let parser = new xml2js.Parser();

              parser.parseString(ddl.toString(), (err, res) => {

                _db.sqlBatch(res.sql.statement)
                  .then(() => resolve())
                  .catch(err => reject(err));
              });
            });
          });
        })
        .then(_ => {
          return new Promise((resolve, reject) => {
            this.http.get('assets/sqlite-kickstart/DML.xml').subscribe(dml => {
              let parser = new xml2js.Parser();

              parser.parseString(dml.toString(), (err, res) => {

                let batch = [];
                for (let sql of res.sql.statement) {
                  batch.push(sql._);
                }

                _db.sqlBatch(batch)
                  .then(() => resolve())
                  .catch(err => reject(err));

              });
            });
          });

        })
        .catch(err => console.error(err));

    })
      .catch(err => console.error(err));
  }

}
