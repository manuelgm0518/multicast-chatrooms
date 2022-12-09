<script lang="ts">
  import { sendMessage } from "../stores/global-store";

  let message: string = "";

  function send() {
    sendMessage(message);
    message = "";
  }
</script>

<form action="submit" class="gap-3 flex" on:submit|preventDefault={send}>
  <input type="text" placeholder="Mensaje..." class="input w-full" bind:value={message} />
  <button type="submit" class="btn btn-primary gap-3">
    <i class="uil uil-message text-xl" />
    Envíar
  </button>
</form>
