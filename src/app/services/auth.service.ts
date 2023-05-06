import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore) { }

  async register({ email, password, firstname, lastname, username }: {
    email: string; 
    password: string, 
    firstname: string, 
    lastname: string, 
    username: string }) {
    try {
      const credentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const ref = doc(this.firestore, `users/${credentials.user.uid}`)
      setDoc(ref, {firstname, lastname, username, email});
      return credentials

    } catch(e) {
      return null;
    }
  }

  async login({ email, password }: { email: string; password: string}) {
    try {
      const credentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return credentials
    } catch(e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth)
  }


}
