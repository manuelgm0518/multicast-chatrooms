import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { SerialPort } from "serialport";

const PORT = 3000;

SerialPort.list().then((value) => {
  console.log(value);
});

// const serial = new SerialPort({
//   path: "/dev/tty-usbserial1",
//   baudRate: 57600,
// });
// serial.on("open", function () {
//   console.log("-- Connection opened --");
//   serial.on("data", function (data) {
//     console.log("Data received: " + data);
//   });
// });

const app: Express = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
