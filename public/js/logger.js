
class Logger {

  constructor() {
    this.elem = document.querySelector(".js-log");
  }

  append(message) {
    const p = document.createElement("p");
    console.log(message);
    p.textContent = message;
    this.elem.appendChild(p);
  }

  log(...messages) {
    for(let i = 0; i < messages.length; i++) {
      this.append(messages[i]);
    }
  }
}

export default new Logger();