import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  // Targets son requeridos
  static targets = ['password'];

  connect() {
    console.log("Hellou world");
  }

  toggle(){
    if(this.passwordTarget.type === "password")
      this.passwordTarget.type = "text";
    else
      this.passwordTarget.type = "password";
  }


}