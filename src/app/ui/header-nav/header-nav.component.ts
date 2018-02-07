import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Thing Dashboard';
  }

  ngOnInit() {
  }

}
