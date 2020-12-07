
import logger from "/js/logger.js";

const canvas = window.interactiveCanvas;

const contentElem = document.querySelector(".js-content");
const loadingElem = document.querySelector(".js-loading");
const startButtonElem = document.querySelector(".js-start-button");
const endButtonElem = document.querySelector(".js-end-button");

const callbacks = {
  onUpdate: (data) => {
    console.log("[onUpdate]", data);
    try {
      const dataEntry = data[0];
      console.log("[onUpdate] dataEntry", dataEntry);
      if(!dataEntry) {
        return;
      }
      const command = dataEntry.command ? dataEntry.command :
        dataEntry.google ? dataEntry.google.intent.name : null;
      const params = dataEntry.displayWord ? dataEntry.displayedWord : null;
      console.log("[onUpdate] command", command);
      console.log("[onUpdate] params", params);
    } catch(e) {
      // catch
      console.error(e);
    }
  },
  onTtsMark: (markName) => {
    console.log("[onTtsMark]", markName);
  },
};

async function sendTextQuery(text) {
  logger.log(`[sendTextQuery] text: ${text}`);
  const state = await window.interactiveCanvas.sendTextQuery(text);
  logger.log(`[sendTextQuery] state: ${state}`);
}

async function main() {
  const headerHeightPx = await canvas.getHeaderHeightPx();
  logger.log(`[headerHeightPx] ${headerHeightPx}`);
  console.log("[canvas]", canvas);

  contentElem.setAttribute("style", `padding-top: ${headerHeightPx}px;`);

  startButtonElem.addEventListener("click", () => {
    logger.log("pressed start button !!");
    sendTextQuery("yes");
  });
  endButtonElem.addEventListener("click", () => {
    logger.log("pressed end button !!");
    sendTextQuery("no");
  });

  canvas.ready(callbacks);

  loadingElem.classList.remove("is-show");
}

main();