import { Injectable } from '@angular/core';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.user = credential.user;
        console.log(`credential - ${this.user}`);
        // this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    // this.router.navigate(['/'])
  }

}
