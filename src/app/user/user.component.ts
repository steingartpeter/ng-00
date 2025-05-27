import { Component, computed, Input, input } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // SIGNAL VERSION
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    console.log('User clicked...');
  }
}
