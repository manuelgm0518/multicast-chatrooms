import { get, writable } from "svelte/store";
import { io } from "socket.io-client";
import type { Message } from "../models/Message";

export const messages = writable([] as Message[]);
export const socket = io("ws://localhost:3000/");

socket.on("chat message", (message) => {
  const lastMessage = get(messages).at(-1);
  if (lastMessage && !lastMessage.checked)
    messages.update((value) => {
      const item = value.pop();
      item.checked = true;
      return [...value, item];
    });
  else {
    messages.update((value) => [
      ...value,
      {
        mine: false,
        text: message,
        date: new Date(),
        checked: true,
      } as Message,
    ]);
  }
});

export const sendMessage = (message: string) => {
  messages.update((value) => [
    ...value,
    {
      mine: true,
      text: message,
      date: new Date(),
      checked: false,
    } as Message,
  ]);
  socket.emit("chat message", message);
};
