import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-taskcontainer',
  imports: [TaskComponent],
  templateUrl: './taskcontainer.component.html',
})
export class TaskcontainerComponent {
  @Input() tasks!: { content: string; id: number; userID: number }[];

  updateTask(tasks: any) {
    this.tasks = tasks;
  }

  checkTask() {}
}
