import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) usrId!: string;
  @Input({ required: true }) name!: string;
  isAddigTask = false;
  // All tasksComponent will have one independent INSTANCE of the askService class!!!
  // Solution:  DEPENDENCY INJECTION.
  // private tasksService = new TasksService();

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.usrId);
  }

  onStartAddtask() {
    this.isAddigTask = true;
    console.log(`showNewForm switched to ${this.isAddigTask}`);
  }

  onCloseAddTask() {
    console.log('tasks.component => removeAddWndw()');
    this.isAddigTask = false;
  }
}
