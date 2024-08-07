<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js">
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
   

      
  import { onMount } from 'svelte';
  import { cart, fetchCart } from './cart';

  let cartItems = [];

  onMount(() => {
    fetchCart();
    const unsubscribe = cart.subscribe(items => {
      cartItems = items;
    });
    return unsubscribe;
  });


  async function removeItem(itemId) {
    console.log(`Attempting to remove item with ID: ${itemId}`);
    try {
      const response = await fetch('https://bymimzback.onrender.com/api/cart', {
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

      // Fetch the updated cart after removing the item
      fetchCart();
    } catch (err) {
      console.error('Error removing item:', err); // Error handling
    }
  }


  async function checkout() {
    try {
      const response = await fetch('https://bymimzback.onrender.com/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const result = await response.json();
      console.log('Checkout response:', result);

      if (!response.ok) throw new Error('Checkout failed');

      // Fetch the updated cart after checkout
      fetchCart();
    } catch (err) {
      console.error('Error during checkout:', err); // Error handling
    }
  }

   </script>

    {#if cartItems.length > 0}
  
   <section class="h-screen bg-gray-100 px-4 text-gray-600 antialiased" x-data="app">
       <div class="flex h-full flex-col justify-center">
           <!-- Table -->
           <div class="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
               <header class="border-b border-gray-100 px-5 py-4">
                   <div class="font-semibold text-gray-800">Manage Cart</div>
               </header>
   
               <div class="overflow-x-auto p-3">
                   <table class="w-full table-auto mb-2">
                       <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                           <tr>
                               <th></th>
                               <th class="p-2">
                                   <div class="text-left font-semibold">Product Name</div>
                               </th>
                               <th class="p-2">
                                   <div class="text-left font-semibold">Quantity</div>
                               </th>
                               <th class="p-2">
                                   <div class="text-left font-semibold">Total</div>
                               </th>
                               <th class="p-2">
                                   <div class="text-center font-semibold">Action</div>
                               </th>
                           </tr>
                       </thead>
                       {#each cartItems as item}
                       <tbody class="divide-y divide-gray-100 text-sm">
                           <!-- record 1 -->
                           <tr>
                               <td class="p-2">
                                   <input type="checkbox" class="h-5 w-5" value="id-1"  />
                               </td>
                               <td class="p-2">
                                   <div class="font-medium text-gray-800">{item.item.name}</div>
                               </td>
                               <td class="p-2">
                                   <div class="text-left">{item.quantity}</div>
                               </td>
                               <td class="p-2">
                                   <div class="text-left font-medium text-green-500">${item.item.price}</div>
                               </td>
                               <td class="p-2">
                                   <div class="flex justify-center">
                                       <button on:click={() => removeItem(item.itemId._id)}>
                                           <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                           </svg>
                                       </button>
                                   </div>
                               </td>
                           </tr>

                       </tbody>
                       {/each}
                   </table>
                   <button
                         on:click={checkout}
                        class="middle none center w-full rounded-lg bg-purple-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">
                        Checkout
                    </button>
               </div>
   
               <!-- total amount -->
   
   
               <div class="flex justify-end">
                   <!-- send this data to backend (note: use class 'hidden' to hide this input) -->
                   <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
               </div>
           </div>
       </div>
   </section>
   
   {:else}
   <p>Your cart is empty.</p>
 {/if}
   