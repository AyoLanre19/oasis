import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  activeSection: string = 'section1';

  showSection(section: string) {
    console.log('Switching to section:', section);
    this.activeSection = section;
  }

  createNewTask() {
    if (this.activeSection !== 'section2') {
      this.activeSection = 'section2';
    }
  }

  
  startTaskCreation() {
    this.activeSection = 'section3';
  }
}

