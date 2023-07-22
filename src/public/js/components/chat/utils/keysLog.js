const keysLog = (data) => {
  const log = document.getElementById("messageLogs");
  let messages = "";

  data.forEach((message) => {
    messages = messages + `<b>${message.user}</b>: ${message.message}</br>`;
  });

  log.innerHTML = messages;
};

export { keysLog };
