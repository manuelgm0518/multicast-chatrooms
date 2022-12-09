<script lang="ts">
  import MessageList from "./components/MessageList.svelte";
  import MessageBar from "./components/MessageBar.svelte";
</script>

<main class="bg-base-300 w-screen h-screen">
  <div class="container mx-auto flex flex-col h-full p-5">
    <div class="flex-1 overflow-auto">
      <MessageList />
    </div>
    <div class="divider h-0" />
    <div>
      <MessageBar />
    </div>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
