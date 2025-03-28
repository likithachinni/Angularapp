import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// interface test {
//   taskId: string;
//   inputval: string;
//   dynamicVal: string;
//   taskTitle: string;
//   taskSummary: string;
//   taskDate: string;
// }

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  title: boolean = false;
  summary: boolean = true;
  visibility: boolean = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all concepts',
      dueDate: '2025-04-05',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular going on',
      summary: 'Learn all concepts',
      dueDate: '2025-04-05',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular and complete asap',
      summary: 'Learn all concepts',
      dueDate: '2025-04-05',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  data1 = 'good evening rose';
  data2 = 'Love you bangaru \u{1F648}';
  data3 = 'Thanks for bringing prawns';

  toogleinputfield() {
    this.title = !this.title;
  }
  toogleoutputfield() {
    this.summary = !this.summary;
  }
  tooglevisibility() {
    this.visibility = !this.visibility;
  }
}
