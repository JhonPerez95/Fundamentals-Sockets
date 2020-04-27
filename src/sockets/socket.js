const { io } = require("../server");

io.on("connection", (client) => {
  console.log("User is connected");

  // Listend
  client.on("disconnect", () => {
    console.log("User is Disconnected");
  });

  client.on("sendMessage", (data, callback) => {
    console.log(data);

    client.broadcast.emit("sendMessage", { data });
    // if (message.user) {
    //   callback({
    //     res: "All Good",
    //   });
    // } else {
    //   callback({
    //     res: "All Wrong",
    //   });
    // }
  });

  // Send informations
  client.emit("sendMessage", {
    user: "Admin",
    message: "Welcome to API",
  });
});
