import { Injectable } from "@angular/core";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";



@Injectable({providedIn: 'root'})
export class UserService{
  user: string
  userName: ""
  login = true

onLogin(){
  this.user = "Welcome," + this.userName;
}

}
