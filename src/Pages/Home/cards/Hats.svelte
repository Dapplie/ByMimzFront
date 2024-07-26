<script>
    import Card from "./Card.svelte";
    import Item from "./Item";
    import Card2 from "./Card2.svelte";
    import { onMount } from 'svelte';
    import axios from 'axios';

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
</script>


<div class="flex flex-row flex-wrap gap-5 justify-center items-center">
    {#each items as item}
        <Card2 {item} />
    {/each}
</div>

