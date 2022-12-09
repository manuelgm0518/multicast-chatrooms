<script lang="ts">
  import { messages, isMine } from "../stores/global-store";
</script>

<div class="gap-2 flex flex-col">
  {#each $messages as message}
    <div
      class="message text-white p-3 rounded-xl {isMine(message)
        ? 'place-self-end bg-primary text-end'
        : 'place-self-start bg-base-100'}"
    >
      {message}
    </div>
  {/each}
</div>

<style>
  .message {
    min-width: 10%;
    max-width: 70%;
  }
</style>
