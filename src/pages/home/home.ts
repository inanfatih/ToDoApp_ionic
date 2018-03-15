import { TodoDetailsPage } from './../todo-details/todo-details';
import { ArchievedTodosPage } from './../archieved-todos/archieved-todos';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import {TodoProvider} from "../../providers/todo/todo"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public todoDetails = [];
  public todoDates = [];
  public archivedTodosPage = ArchievedTodosPage;
  public createTodosPage = TodoDetailsPage;
  constructor(private todoService: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoService.getTodos();
}

archiveTodo(todoIndex){
  this.todoService.archiveTodo(todoIndex)
}

goToCreation(){
    this.navCtrl.push(TodoDetailsPage);
  }

  addTodoItem(){

  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add A Task",
      subTitle: "Enter the task, its details and the deadline",
      inputs: [
        {
        type: "text",
        placeholder: "Enter task",
        name: "addTodoInput"
        },
        {
          type: "text",
          placeholder: "Enter details",
          name:"addTodoDescription"
        },
        {
          type: "date",
          placeholder: "Enter deadline",
          name: "addTodoDeadline"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Task",
          handler: (inputData)=>{
            let todoText, todoDescription, todoDate;
            todoText = inputData.addTodoInput;
            todoDescription = inputData.addTodoDescription;
            todoDate = inputData.addTodoDeadline;
//            this.todos.push(todoText);
            this.todoService.addTodo(todoText);
            this.todoDetails.push(todoDescription);
            this.todoDates.push(todoDate);

          }
        }
      ]
    });
    addTodoAlert.present();

}


}
