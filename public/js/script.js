
console.log("InteractiveCanvasDebugger");

const canvas = window.interactiveCanvas;

const wrapperElem = document.querySelector(".js-wrapper");

const callbacks = {
  onUpdate: (data) => {
    console.log("[onUpdate]", data);
    try {
      const dataEntry = data[0];
      const command = dataEntry.command ? dataEntry.command :
        dataEntry.google ? dataEntry.google.intent.name : null;
        const params = dataEntry.displayWord ? dataEntry.displayedWord : null;
        console.log("[onUpdate: command]", command);
        console.log("[onUpdate: params]", params);
    } catch(e) {
      // catch
      console.error(e);
    }
  },
  onTtsMark: (markName) => {
    console.log("[onTtsMark]", markName);
  },
};

async function main() {
  const headerHeightPx = await canvas.getHeaderHeightPx();
  console.log("[headerHeightPx]", headerHeightPx);
  console.log("[canvas]", canvas);

  wrapperElem.setAttribute("style", `padding-top: ${headerHeightPx}px;`);

  canvas.ready(callbacks);
}

main();