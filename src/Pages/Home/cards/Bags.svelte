<script>
  import Card from "./Card.svelte";
  import Item from "./Item";
  import Card2 from "./Card2.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { Router, Link, Route } from "svelte-routing";
  import ViewItem from "./ViewItem.svelte";
  import { navigate } from "svelte-routing";


  let searchQuery = "";
  let items = [
    // new Item("Summer Dress", "This is the description for item 1.", 19, "bag"),
    // new Item("Summer Dress", "This is the description for item 2.", 29, "bag"),
  ];

  onMount(async () => {
    try {
      const response = await axios.get('http://localhost:3030/api/items');
      items = response.data.map((item, index) => ({ ...item, id: item._id || index }));
      console.log('Fetched items:', items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  });


 // Reactive filtered items based on type and search query
  $: filteredItems = items
    .filter(item => item.type === 'bag') // Filter by type
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    item.description.toLowerCase().includes(searchQuery.toLowerCase())); // Filter by search quer
</script>

<router>
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
</router>

<style>
  input { padding-inline: .5rem; }
  input::placeholder {
    /* color: red; */
    padding-inline: .5rem;
  }
</style>
