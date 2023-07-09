import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToAbout () {
    this.router.navigate(['/about']);
  }

  navigateToContact () {
    this.router.navigate(['/contact']);
  }

  navigateToRemarks () {
    this.router.navigate(['/remarks']);
  }

}
