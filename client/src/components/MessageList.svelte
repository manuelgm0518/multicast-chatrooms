<script lang="ts">
  import { messages } from "../stores/global-store";
  import { formattedDate } from "../models/Message";
  import { afterUpdate } from "svelte";

  let element: HTMLElement;

  afterUpdate(() => {
    if (messages) scrollToBottom(element);
  });
  $: if (messages && element) {
    scrollToBottom(element);
  }
  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  };
</script>

<div class="flex-1 overflow-auto" bind:this={element}>
  <div class="flex flex-col gap-3 px-3">
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
</div>
