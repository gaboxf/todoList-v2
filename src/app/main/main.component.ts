import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UUID } from 'uuid-generator-ts';
import { Task } from "../task.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  tasks: Task[] = 
  [
    {id:"f967f5049ce8464d9c33130c451d8956", task:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", completed:true}
  ];

  addTask = (task :string) => {
    task.trim().length > 0?this.tasks.unshift({id:(this.generateId()), task: task, completed:false}):console.error("You can't insert blank task");
    console.log(this.tasks);
  }

  generateId = () => {
    let uuid = new UUID();
    return uuid.getDashFreeUUID();
   }
}
