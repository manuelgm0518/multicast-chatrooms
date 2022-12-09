import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

const PORT = 3000;

const app: Express = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const serial = new SerialPort({
  path: "/dev/tty.Bluetooth-Incoming-Port",
  baudRate: 9600,
});
const parser = serial.pipe(new ReadlineParser());

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    serial.write(Buffer.from("main screen turn on"), function (err) {
      if (err) return console.log("Error on write: ", err.message);
      console.log("Message Sent: " + msg);
    });
  });
});

serial.on("open", () => {
  console.log("Serial port connected");
  parser.on("data", function (data) {
    io.emit("chat message", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
