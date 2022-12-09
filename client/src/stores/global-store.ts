import { writable } from "svelte/store";
import { io } from "socket.io-client";

export const messages = writable([] as string[]);

export const socket = io("ws://localhost:3000/");

socket.on("chat message", (message) => {
  messages.update((value) => [...value, message]);
});

export const sendMessage = (message: string) => {
  socket.emit("chat message", message);
};
