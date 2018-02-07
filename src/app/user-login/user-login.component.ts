import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user: Observable<firebase.User>;

  constructor(public auth: AuthService) {
    this.user = auth.user;
  }

   signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }

  signOut() {
    this.auth.signOut();
  }

 private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    //this.router.navigate(['/']);
    console.log(`jf log: afterSignIn`);
  }



}