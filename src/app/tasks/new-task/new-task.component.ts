import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    console.log('new task component => removeAddNew');
    this.cancel.emit();
  }
}
