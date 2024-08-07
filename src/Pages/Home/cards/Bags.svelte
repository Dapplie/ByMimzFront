<script>
  import Card2 from "./Card2.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { Router, Link, Route } from "svelte-routing";
  import ViewItem from "./ViewItem.svelte";
  import { navigate } from "svelte-routing";

  let searchQuery = "";
  let items = [];

  onMount(async () => {
    try {
      const response = await axios.get('http://localhost:3030/api/items');
      // Assuming the type field is an object and needs to be transformed or looked up
      items = response.data.map((item) => ({ ...item, id: item._id }));
      console.log('Fetched items:', items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  });

  // Reactive filtered items based on type and search query
  $: filteredItems = items
    .filter(item => item.type && item.type.name === 'bag') // Adjusted for new item structure
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()));
</script>

<Router>
  <Route path="/view-item/:id" component={ViewItem} />
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
        <Link to={`/view-item/${item.id}`} style="cursor: pointer; text-decoration: none;" class="clickable-div">
          <Card2 {item} />
        </Link>
        {/each}
      </div>
    </div>
    <style>
      .clickable-div:hover {
        text-decoration: none; /* Prevent underline on hover */
        transform: scale(1.01); /* Grow a bit on hover */
      }
      .clickable-div div {
        text-decoration: none; /* Prevent underline inside the card content */
        transition: transform 0.2s;
      }
      .clickable-div div:hover {
        text-decoration: none; /* Prevent underline on hover inside the card content */
        transform: scale(1.01); /* Grow a bit on hover */
      }
    </style>
  </main>
</Router>

<style>
  input { padding-inline: .5rem; }
  input::placeholder {
    padding-inline: .5rem;
  }
</style>
