(function (message = "Hello world") {
  document.dispatchEvent(
    new MessageEvent("message", {
      data: JSON.stringify(message),
    })
  );
})();
