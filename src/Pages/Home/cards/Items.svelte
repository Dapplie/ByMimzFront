<script>
  import Card2 from "./Card2.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { Router, Link, Route } from "svelte-routing";
  import ViewItem from "./ViewItem.svelte";

  let searchQuery = "";
  let selectedType = ""; // Store the selected item type
  let items = [];
  let itemTypes = []; // Store the item types fetched from the backend

  onMount(async () => {
    try {
      // Fetch items
      const itemsResponse = await axios.get('https://bymimzback.onrender.com/api/items');
      items = itemsResponse.data.map((item) => ({ ...item, id: item._id }));
      console.log('Fetched items:', items);

      // Fetch item types
      const typesResponse = await axios.get('https://bymimzback.onrender.com/api/item-types');
      itemTypes = typesResponse.data;
      console.log('Fetched item types:', itemTypes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  // Reactive filtered items based on type and search query
  $: filteredItems = items
    .filter(item => !selectedType || item.type.name === selectedType) // Filter by selected type
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()));
</script>

<Router>
  <Route path="/view-item/:id" component={ViewItem} />
  <main>
    <div>
      <!-- Search and Type Filter -->
      <div class="mx-auto w-[85svw] my-5 md:w-[75vw] flex flex-row" Style="gap:1rem;">
        <input
          id="searchbar"
          bind:value={searchQuery}
          type="text"
          name="search"
          placeholder="Search items.."
          class="border-1 w-full border-black rounded-xl p-2"
        />
        <select
          bind:value={selectedType}
          class="border-1 w-full border-black rounded-xl p-2 "  
        >
          <option value="">View all items</option>
          {#each itemTypes as type}
            <option value={type.name}>{type.name}</option>
          {/each}
        </select>
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
  select {
    padding-inline: .5rem;
    width: 30%;
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    select{
      width: 80% !important;
    }
  }
</style>
