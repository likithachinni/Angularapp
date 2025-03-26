// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// // export class UserComponent {
// //   selectedUser = DUMMY_USERS[randomIndex];

// //   get imagePath() {
// //     return 'assets/users/' + this.selectedUser.avatar;
// //   }
// //   onSelectedUser() {
// //     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// //     this.selectedUser = DUMMY_USERS[randomIndex];
// //   }
// // }
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

//

// import { Component, Input, input, computed } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input.required<string>();

//   imagePath = computed(() => {
//     return 'assests/users/' + this.avatar();
//   });
//   onSelectedUser() {}
// }

// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   @Input({ required: true }) user!: {
//     id: string;
//     name: string;
//     avatar: string;
//   };
//   @Output() select = new EventEmitter();

//   get imagePath() {
//     return 'assests/users/' + this.user.avatar;
//   }
//   onSelectUser() {
//     this.select.emit(this.user.id);
//   }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
