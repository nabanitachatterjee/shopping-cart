import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor() {
    // to initialize this class
  }

  ngOnInit() {
    console.log('Do something when this component is loaded......');
  }

}
