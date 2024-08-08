<script>
    import Card2 from './cards/Card2.svelte';
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { Router, Link, Route } from "svelte-routing";
    import ViewItem from './cards/ViewItem.svelte';
  
    let items = [];
    let onSaleItems = [];
  
    onMount(async () => {
      try {
        const response = await axios.get('http://localhost:3030/api/items');
        items = response.data.map((item, index) => ({ ...item, id: item._id || index }));
  
        // Filter and sort onSale items
        onSaleItems = items
          .filter(item => item.onSale)
          .sort((a, b) => new Date(b.saleAt) - new Date(a.saleAt))
          .slice(0, 3); // Limit to 3 items
  
        console.log('Fetched items:', items);
        console.log('On sale items:', onSaleItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    });
  </script>
  
  <div class="container mx-auto">
  <h1 class="text-red-600 text-center my-4" style="font-family: 'Impact'">
    On Sale
  </h1>
  </div>


<router>
    <Route path="/view-item/:id" component={ViewItem} />
<main>
    <div>
      <!-- Searchbar -->

  
      <div class="flex flex-row flex-wrap gap-5 justify-center items-center mb-10">
        {#each onSaleItems as item}
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