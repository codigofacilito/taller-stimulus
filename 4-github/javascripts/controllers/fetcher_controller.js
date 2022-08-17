import { Controller } from '@hotwired/stimulus';
import { throttle } from 'throttle-debounce';

export default class extends Controller {
  static values = {
    username: String,
    repos: {
      default: [],
      type: Array
    }
  }

  static targets = ["usernameControl", "list","select"];

  connect(){
    this.updateFunc = throttle(1000,()=>{
      this.fetch();
    },{
      noLeading:true
    });

  }

  change(){
    this.usernameValue = this.usernameControlTarget.value;
  }

  usernameValueChanged(prevValue,newValue){
    if(!newValue || newValue.length < 3) return;
    if(this.updateFunc) this.updateFunc();
  }

  fetch(){
    console.log("fetching");
    // Call github api
    fetch(`https://api.github.com/users/${this.usernameValue}/repos`).then(response => response.json()).then(data => {
      // get repos from data object
      const repos = data.map(repo => repo.name);
      this.reposValue = repos;

    }).catch(error => {
      console.log(error);
    });
  }

  reposValueChanged(){
    // build dom elements
    const reposDOM = this.reposValue.map(repo => {
      let repoDOM = document.createElement("option");
      repoDOM.value = repo;
      repoDOM.innerText = repo;
      return repoDOM;
    });

    this.listTarget.innerHTML = "";
    this.listTarget.append(...reposDOM);

    this.selectTarget.disabled = false;

  }
}