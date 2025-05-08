import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-taskcontainer',
  imports: [TaskComponent],
  templateUrl: './taskcontainer.component.html',
})
export class TaskcontainerComponent {
  @Input() tasks!: { content: string; id: number; userID: number }[];

  deleteTask(tasks: any) {
    this.tasks = tasks;
  }

  editTask() {}

  checkTask() {}
}
