import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

const PORT = 3000;

const app: Express = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const serialPorts = [] as SerialPort[];

async function initSerialPorts() {
  const ports = await SerialPort.list();
  for (let port of ports) {
    const serial = new SerialPort({
      path: port.path,
      baudRate: 9600,
    });
    const parser = serial.pipe(new ReadlineParser());
    serial.on("open", () => {
      console.log("Serial port connected");
      parser.on("data", function (data) {
        io.emit("chat message", data);
      });
    });
    serialPorts.push(serial);
  }
}

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    serialPorts.forEach((port) => port.write(msg));
  });
});

initSerialPorts();

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
