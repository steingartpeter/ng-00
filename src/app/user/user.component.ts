import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // SIGNAL VERSION
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // -- This not using really signal, it uses standard EventEmitter,
  // -- but it looks like exacty the input() version
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    console.log('User clicked...');
    this.select.emit(this.id);
  }
}
