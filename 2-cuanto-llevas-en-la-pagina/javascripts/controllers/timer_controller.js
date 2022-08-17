import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
  // Values for stimulus
  static values = {
    initialDate: String
  }
  connect(){
    this.initialDateValue = new Date();
    setInterval(() => {
      this.element.querySelector("p.timer").innerHTML = this.time_ago_in_words_with_parsing(this.initialDateValue);
    }, 1000);

  }
  
  time_ago_in_words_with_parsing(from) {
    var date = new Date;
    date.setTime(Date.parse(from));
    return this.time_ago_in_words(date);
  }
  // Takes a timestamp and converts it to a relative time
  // DateHelper.time_ago_in_words(1331079503000)
  time_ago_in_words(from) {
    return this.distance_of_time_in_words(new Date, from);
  }

  distance_of_time_in_words(to, from) {
    var distance_in_seconds = ((to - from) / 1000);
    var distance_in_minutes = Math.floor(distance_in_seconds / 60);
    var tense = distance_in_seconds < 0 ? " desde ahora" : " atrás";
    distance_in_minutes = Math.abs(distance_in_minutes);
    if (distance_in_minutes == 0) { return Math.floor(distance_in_seconds) + ' segundos' + tense; }
    if (distance_in_minutes == 1) { return 'Un minuto' + tense; }
    if (distance_in_minutes < 45) { return distance_in_minutes + ' minutos' + tense; }
    if (distance_in_minutes < 90) { return 'alrededor de una hora' + tense; }
    if (distance_in_minutes < 1440) { return 'alrededor de  ' + Math.floor(distance_in_minutes / 60) + ' horas' + tense; }
    if (distance_in_minutes < 2880) { return 'un día' + tense; }
    if (distance_in_minutes < 43200) { return Math.floor(distance_in_minutes / 1440) + ' días' + tense; }
    if (distance_in_minutes < 86400) { return 'alrededor de un mes' + tense; }
    if (distance_in_minutes < 525960) { return Math.floor(distance_in_minutes / 43200) + ' meses' + tense; }
    if (distance_in_minutes < 1051199) { return 'alrededor de un año' + tense; }

    return 'más de ' + Math.floor(distance_in_minutes / 525960) + ' años';
  }
}