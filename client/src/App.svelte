<script lang="ts">
  import MessageList from "./components/MessageList.svelte";
  import MessageBar from "./components/MessageBar.svelte";
</script>

<main class="bg-base-300 w-screen h-screen">
  <div class="container mx-auto flex flex-col h-full p-5">
    <MessageList />
    <div class="divider h-0" />
    <MessageBar />
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
