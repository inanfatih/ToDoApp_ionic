import { TodoProvider } from './../../providers/todo/todo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArchievedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archieved-todos',
  templateUrl: 'archieved-todos.html',
})
export class ArchievedTodosPage {

  public archivedTodos = [];


  constructor(private todoService: TodoProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.archivedTodos = this.todoService.getArchivedTodos();
  }



}
