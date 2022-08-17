import { Application } from "@hotwired/stimulus";
// import TogglePasswordController from "./controllers/toggle_password_controller.js";
// Register stimulus controller

import FetcherController from "./controllers/fetcher_controller.js";

window.Stimulus = Application.start();
// Register stimulus controllers
Stimulus.register("fetcher", FetcherController);



