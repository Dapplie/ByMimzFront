<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { Router, Route, navigate } from 'svelte-routing';
  import SignUp from '../SignUp.svelte';
  import { isAuthenticated } from '../auth'; // adjust the path as necessary

  let loggedIn = false;

  isAuthenticated.subscribe(value => {
      loggedIn = value;
  });

  const redirectToSignUp = (event) => {
      event.preventDefault(); // Prevent default button behavior
      navigate('/SignUp');
  };

  let itemId;
  let item;
  // Extract itemId from URL path
  const path = window.location.pathname;
  itemId = path.split('/').pop();

  onMount(async () => {
      if (itemId) {
          try {
              const response = await axios.get(`http://localhost:3030/api/items/${itemId}`);
              item = response.data;
          } catch (error) {
              console.error('Error fetching item:', error);
          }
      }
  });

  const addToCart = async (event) => {
      event.preventDefault(); // Prevent default button behavior
      const token = localStorage.getItem('token');
      try {
          await axios.post(
              'http://localhost:3030/api/cart',
              { itemId: item._id, quantity: 1 },
              { headers: { Authorization: `Bearer ${token}` } }
          );
          alert('Item added to cart');
      } catch (error) {
          console.error('Error adding item to cart:', error);
          alert('Failed to add item to cart');
      }
  };

  const addToFavorite = async (event) => {
      event.preventDefault(); // Prevent default button behavior
      const token = localStorage.getItem('token');
      try {
          await axios.post(
              'http://localhost:3030/api/favorite',
              { itemId: item._id, quantity: 1 },
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
</Router>

<main>
  {#if item}
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="flex font-sans">
          <div class="flex-none w-48 relative">
              <img src={`http://localhost:3030/${item.image}`} alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
          <form class="flex-auto p-6">
              <div class="flex flex-wrap">
                  <h1 class="flex-auto text-xl font-semibold text-gray-900">
                      {item.name}
                  </h1>
                  <div class="text-lg font-semibold text-black-500">
                      <!-- Show old price with strikethrough if it exists -->
                      {#if item.oldPrice}
                        <span class="old-price">${item.oldPrice.toFixed(2)}</span>
                      {/if}
                      <!-- Always show the current price -->
                      <span class="current-price">${item.price.toFixed(2)}</span>
                  </div>
                  <div class="w-full flex-none text-sm font-medium text-black-700 mt-2">
                      {item.description}
                  </div>
              </div>
              <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                  <div class="space-x-2 flex text-sm">
                      <!-- Additional content if needed -->
                  </div>
              </div>
              {#if loggedIn}
              <div class="flex space-x-4 mb-6 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                      <button 
                          on:click={addToCart}
                          class="h-10 px-6 font-semibold rounded-md border border-black-800 text-gray-900" 
                          type="button"
                      >
                          Add to cart
                      </button>
                  </div>
                  <button 
                      on:click={addToFavorite}
                      class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" 
                      type="button" 
                      aria-label="Favorites"
                  >
                      <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                  </button>
              </div>
              {:else}
              <div class="flex space-x-4 mb-6 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                      <button 
                          on:click={redirectToSignUp}
                          class="h-10 px-6 font-semibold rounded-md border border-black-800 text-gray-900" 
                          type="button"
                      >
                          Add to cart
                      </button>
                  </div>
                  <button 
                      on:click={redirectToSignUp}
                      class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" 
                      type="button" 
                      aria-label="Favorites"
                  >
                      <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                  </button>
              </div>
              {/if}
              <p class="text-sm text-slate-700">
                  Pay on delivery
              </p>
          </form>
      </div>
  </div>
  {:else}
  <p>Loading item...</p>
  {/if}
</main>
