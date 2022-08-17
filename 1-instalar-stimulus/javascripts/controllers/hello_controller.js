import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect(){
    console.log(this.element);
    this.element.querySelector("p").innerHTML = "Hello World desde Stimulus";
  }
}