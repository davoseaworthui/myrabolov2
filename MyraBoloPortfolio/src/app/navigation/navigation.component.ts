import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(){
    this.isVisible = !this.isVisible;
  }
}
