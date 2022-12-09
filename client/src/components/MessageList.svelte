<script lang="ts">
  import { messages } from "../stores/global-store";
</script>

<div class="gap-2 flex flex-col">
  {#each $messages as message}
    <div class="bg-base-100 text-white p-3 rounded-xl place-self-start">
      {message}
    </div>
  {/each}
</div>
