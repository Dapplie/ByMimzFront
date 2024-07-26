<script>
    import Card from "./Card.svelte";
    import Item from "./Item";
    import Card2 from "./Card2.svelte";
    import { onMount } from 'svelte';
    import axios from 'axios';

  let searchQuery = "";
  let items = [];

  onMount(async () => {
    try {
      const response = await axios.get('http://localhost:3030/api/items');
      items = response.data;
      console.log('Fetched items:', items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  });


 // Reactive filtered items based on type and search query
  $: filteredItems = items
    .filter(item => item.type === 'hat') // Filter by type
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    item.description.toLowerCase().includes(searchQuery.toLowerCase())); // Filter by search quer
</script>

<main>
  <div>
    <!-- Searchbar -->
    <div class="mx-auto w-[85svw] my-5 md:w-[75vw]">
      <input
        id="searchbar"
        bind:value={searchQuery}
        type="text"
        name="search"
        placeholder="Search items.."
        class="border-1 w-full border-black rounded-xl p-2"
      />
    </div>

    <div class="flex flex-row flex-wrap gap-5 justify-center items-center">
      {#each filteredItems as item}
        <Card2 {item} />
      {/each}
    </div>
  </div>
</main>

<style>
  input { padding-inline: .5rem; }
  input::placeholder {
    /* color: red; */
    padding-inline: .5rem;
  }
</style>
