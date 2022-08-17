import { Application } from "@hotwired/stimulus";
import ValidatorController from "./controllers/validator_controller.js";
import TogglePasswordController from "./controllers/toggle_password_controller.js";
// Register stimulus controller
window.Stimulus = Application.start();
Stimulus.register("validator", ValidatorController);
Stimulus.register("toggler", TogglePasswordController);



