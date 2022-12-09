import { writable } from "svelte/store";
import { io } from "socket.io-client";

export const messages = writable([] as string[]);

export const socket = io("ws://localhost:3000/");

const my_messages = [];

export const isMine = (message: string) => {
  return my_messages.includes(message);
};

socket.on("chat message", (message) => {
  messages.update((value) => [...value, message]);
});

export const sendMessage = (message: string) => {
  my_messages.push(message);
  socket.emit("chat message", message);
};
