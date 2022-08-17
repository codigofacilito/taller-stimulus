import { Application } from "@hotwired/stimulus";
import TimerController from "./controllers/timer_controller.js";
// Register stimulus controller
window.Stimulus = Application.start();
Stimulus.register("timer", TimerController)



