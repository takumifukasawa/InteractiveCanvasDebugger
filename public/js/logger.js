
class Logger {

  constructor() {
    this.elem = document.querySelector(".js-log");
  }

  append(message) {
    const p = document.createElement("p");
    p.textContent = message;
    this.elem.appendChild(p);
  }

  log(...messages) {
    console.log(...messages);
    for(let i = 0; i < messages.length; i++) {
      this.append(messages[i]);
    }
  }

  error(...messages) {
    console.error(...messages);
    for(let i = 0; i < messages.length; i++) {
      this.append(messages[i]);
    }
  }
}

export default new Logger();