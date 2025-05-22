import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: string[] = [];
  userName: string = 'User';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userName = currentUser.name || 'User';
  }

  addTask(): void {
    const task = prompt('Enter your new task:');
    if (task) {
      this.tasks.push(task);
    }
  }

  goToLinkLogin() {
    this.router.navigateByUrl('/login');
  }

  goToLinkTask() {
    this.router.navigateByUrl('/task');
  }
}
