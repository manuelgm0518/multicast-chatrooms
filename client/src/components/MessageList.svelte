<script lang="ts">
  import { messages } from "../stores/global-store";
  import { formattedDate } from "../models/Message";
</script>

<!-- <div class="gap-2 flex flex-col">
  {#each $messages as message}
    <div
      class="message text-white p-3 rounded-xl {message.mine
        ? 'place-self-end bg-primary text-end'
        : 'place-self-start bg-base-100'}"
    >
      {message.text}
    </div>
  {/each}
</div> -->

<div class="flex flex-col gap-3">
  {#each $messages as message}
    <div
      class="py-2 px-4 rounded-2xl whitespace-pre-wrap grid {message.mine
        ? 'bg-primary-focus place-self-end rounded-br-none text-secondary-content'
        : 'bg-base-100 place-self-start rounded-bl-none text-base-content'} "
    >
      <p class="leading-5">
        {message.text}
      </p>
      <p class="text-xs place-self-end {message.mine ? 'text-secondary-content/[0.6]' : 'text-base-content/[0.6]'}">
        {formattedDate(message.date)}
      </p>
    </div>
  {/each}
</div>

<style lang="postcss">
  /* @tailwind components;
  @layer components {
    .message-bubble {
      @apply rounded-xl py-2 px-4 bg-base-100 place-self-start rounded-bl-none text-base-content whitespace-pre-wrap;
      min-width: 25%;
      max-width: 70%;
    }
    .message-bubble.mine {
      @apply rounded-xl bg-secondary-focus place-self-end rounded-br-none text-secondary-content;
    }
  } */
</style>
