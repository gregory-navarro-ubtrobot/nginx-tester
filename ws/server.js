console.log("Server started");
var Msg = "";
var WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 8765 });
wss.on("connection", function (ws) {
  console.log("Client connected");
  ws.on("message", function (message) {
    console.log("Received from client: %s", message);
    ws.send("Server received from client: " + message);
  });
});
