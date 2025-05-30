import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();

  onCancel() {
    console.log('new task component => removeAddNew');
    this.cancel.emit();
  }
}
