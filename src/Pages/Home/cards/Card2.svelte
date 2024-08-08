<script>
  export let item;
  import { Router, Link, Route, navigate } from 'svelte-routing';
  import axios from 'axios';
  import { isAuthenticated } from '../auth'; // adjust the path as necessary
  import { get } from 'svelte/store';
  import SignUp from '../SignUp.svelte';

  let loggedIn = false;

  isAuthenticated.subscribe(value => {
      loggedIn = value;
  });

  const redirectToSignUp = (event) => {
      event.preventDefault(); // Prevent default button behavior
      navigate('/SignUp');
  };



  const addToCart = async () => {
      const token = localStorage.getItem('token');
      try {
          await axios.post('https://bymimzback.onrender.com/api/cart', 
              { itemId: item.id, quantity: 1 },
              { headers: { Authorization: `Bearer ${token}` } }
          );
          alert('Item added to cart');
      } catch (error) {
          console.error('Error adding item to cart:', error);
          alert('Failed to add item to cart');
      }
  };

  const addToFavorite = async () => {
      const token = localStorage.getItem('token');
      try {
          await axios.post('https://bymimzback.onrender.com/api/favorite', 
              { itemId: item.id, quantity: 1 },
              { headers: { Authorization: `Bearer ${token}` } }
          );
          alert('Item added to favorite');
      } catch (error) {
          console.error('Error adding item to favorite:', error);
          alert('Failed to add item to favorite');
      }
  };
</script>
<style>
    .old-price {
  color: red; /* Set the text color to red */
  text-decoration: line-through; /* Apply strikethrough effect */
  margin-right: 8px; /* Space between old and new prices */
}
</style>

<Router>
  <Route path="SignUp" component={SignUp} />


<div class='Card2item'>
  <div class="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
              src={`https://bymimzback.onrender.com/${item.image}`}
              class="h-full w-full object-cover"
              alt=''
          />
          {#if item.onSale}
          {#if item.salePercent != null}
          <div class="absolute top-0 right-0 text-red-600 py-1 rounded text-xl transform rotate-12 font-bold text-center">
            On<br>Sale {item.salePercent}% <!-- Display discount percentage -->
          </div>
          {/if}
        {/if}

      </div>
      <div class="p-6">
          <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {item.name}
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {#if item.oldPrice != null && item.oldPrice > item.price}
                
                  <span class="old-price">${item.oldPrice.toFixed(2)}</span>
                  <span class="new-price">${item.price.toFixed(2)}</span>
                
              {:else}
                ${item.price.toFixed(2)}
              {/if}
              </p>
          </div>
          <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {item.description}
          </p>
      </div>
      {#if loggedIn}
          <div class="p-6 pt-0">
              <div class="flex justify-between gap-2"> <!-- Added flex container -->
                  <button        
                      on:click={addToCart}
                      class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                  >
                      Add&nbsp;to Cart
                  </button>
                  <button
                      on:click={addToFavorite}
                      class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                  >
                      Add&nbsp;to Favorite
                  </button>
              </div>
          </div>
          {:else}
          <div class="p-6 pt-0">
            <div class="flex justify-between gap-2"> <!-- Added flex container -->
                <button        
                    on:click={redirectToSignUp}
                    class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Add&nbsp;to Cart
                </button>
                <button
                on:click={redirectToSignUp}
                    class="block select-none rounded-lg bg-neutral-200 py-2 px-2 text-center align-middle font-sans text-[0.65rem] text-nowrap font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Add&nbsp;to Favorite
                </button>
            </div>
        </div>
      {/if}
  </div>
</div> <!-- card2 item -->

<!-- stylesheet -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>
</Router>