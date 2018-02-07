import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public auth: AuthService) {
    this.user = auth.user;
  }

  ngOnInit() {
  }

}
