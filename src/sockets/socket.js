const { io } = require("../server");

// Listening Front-End
io.on("connection", (client) => {
  console.log("User is connected");

  // Listend
  client.on("disconnect", () => {
    console.log("User is Disconnected");
  });

  client.on("sendMessage", (data, callback) => {
    console.log(data);

    client.broadcast.emit("sendMessage", { data });
  });

  // Send info Front-End
  client.emit("sendMessage", {
    user: "Admin",
    message: "Welcome to API",
  });
});
