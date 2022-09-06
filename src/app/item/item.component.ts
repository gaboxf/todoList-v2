import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() task: Task = {} as Task;
  @Input() tasks: Task[] = [];
  @Output() tasksChange = new EventEmitter<Task[]>();

  deleteTask = (id: string) => {
    console.log(id);
    this.tasks = this.tasks.filter((findId) => findId.id != id);
    this.tasksChange.emit(this.tasks);
  };
}
