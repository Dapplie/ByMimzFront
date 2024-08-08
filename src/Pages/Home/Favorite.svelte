<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"> 
    import { onMount } from 'svelte';
    import { favorite, fetchFavorite } from './favorite';
    import { Router, Link, Route } from "svelte-routing";
    import ViewItem from './cards/ViewItem.svelte';
    
    let favoriteItems = [];
    
    onMount(() => {
      fetchFavorite();
      const unsubscribe = favorite.subscribe(items => {
        favoriteItems = items;
      });
      return unsubscribe;
    });
    
    async function addToCart(itemId) {
  console.log(`Attempting to add item with ID: ${itemId}`);
  try {
    const response = await fetch('https://bymimzback.onrender.com/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using a different auth mechanism
      },
      body: JSON.stringify({ itemId, quantity: 1 })
    });

    const result = await response.json();
    console.log('Server response:', result);

    if (!response.ok) throw new Error('Failed to add item to cart');

    alert('Item added to cart');
    // You can fetch the updated cart or perform any other action here if needed
  } catch (err) {
    console.error('Error adding item to cart:', err); // Error handling
  }
}
    
    async function removeItem(itemId) {
      console.log(`Attempting to remove item with ID: ${itemId}`);
      try {
        const response = await fetch('https://bymimzback.onrender.com/api/favorite', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using a different auth mechanism
          },
          body: JSON.stringify({ itemId })
        });
    
        const result = await response.json();
        console.log('Server response:', result);
    
        if (!response.ok) throw new Error('Failed to remove item');
    
        // Fetch the updated favorite after removing the item
        fetchFavorite();
      } catch (err) {
        console.error('Error removing item:', err); // Error handling
      }
    }
    
    document.addEventListener("alpine:init", () => {
      Alpine.data("app", () => ({
        total: 0,
        selected: [],
    
        toggleCheckbox(element, amount) {
          if (element.checked) {
            this.selected.push(element.value);
            this.total += amount;
          } else {
            const index = this.selected.indexOf(element.value);
    
            if (index > -1) this.selected.splice(index, 1);
    
            this.total -= amount;
          }
        },
      }));
    });
    </script>
   <div class="flex items-center justify-center w-full mt-4">
<h1 style="font-family: 'Impact'">Manage Favorites</h1>
</div> 
    <Router>
        <Route path="/view-item/:id" component={ViewItem} />
    
        {#if favoriteItems.length > 0}
        <div class="flex flex-row flex-wrap gap-5 justify-center items-center mb-4">
            {#each favoriteItems as item}
    
            <div class='Card2item'>
                <div class="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        {#if item.item.image}
                        <img
                            src={`https://bymimzback.onrender.com/${item.item.image}`}
                            class="h-full w-full object-cover"
                            alt=''
                        />
                        {/if}
                    </div>
                    <div class="p-6">
                        <div class="mb-2 flex items-center justify-between">
                            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {item.item.name}
                            </p>
                            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                ${item.item.price}
                            </p>
                        </div>
                        <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            {item.item.description}
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <div class="flex justify-between gap-2"> <!-- Added flex container -->
                            <button
                                on:click={() => addToCart(item.itemId._id)}
                                class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add&nbsp;to Cart
                            </button>
                            <button
                                on:click={() => removeItem(item.itemId._id)}
                                class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Remove&nbsp; Favorite
                            </button>
                        </div>
                    </div>
                </div>
            </div> <!-- card2 item -->
    
            <!-- stylesheet -->
            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
    
            {/each}
        </div>
        {:else}
        <p>Your favorite is empty.</p>
        {/if}
    </Router>
    