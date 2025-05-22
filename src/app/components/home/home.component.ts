import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}

  goToLinkLogin(){
    this.router.navigateByUrl('/login')
  }

  goToLinkTask(){
    this.router.navigateByUrl('/task')
  }
}
