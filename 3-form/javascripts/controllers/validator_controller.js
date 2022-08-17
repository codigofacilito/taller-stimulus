import { Controller } from '@hotwired/stimulus';
import { passwordStrength } from 'check-password-strength';
export default class extends Controller {
  // Targets son requeridos
  static targets = [ 'form', 'password', 'passwordMessage'];
  static classes = ['success', 'warning'];

  connect(){
    console.log( this.warningClass );
  }

  checkPasswordScore(event){
    let passwordStrengthValidation = passwordStrength(this.passwordTarget.value);
    let message = this.getMessage(passwordStrengthValidation.value);
    this.applyStyles( passwordStrengthValidation.value );
    this.passwordMessageTarget.innerHTML = message;
  }

  applyStyles(passwordStrengthValidationValue){
    this.passwordMessageTarget.classList.remove(...[this.successClass , this.warningClass]);
    if(passwordStrengthValidationValue === 'Strong'){
      this.passwordMessageTarget.classList.add(this.successClass);
    }else{
      this.passwordMessageTarget.classList.add(this.warningClass);
    }
    
    
  }

  getMessage(originalMessage){
    
    switch (originalMessage) {
      case 'Too weak':
        return 'La contraseña es muy débil'
      case 'Weak':
        return 'La contraseña es débil'
      case 'Medium':
        return 'La contraseña es medianamente segura'
      case 'Strong':
        return 'La contraseña es segura'
    }
  }

}