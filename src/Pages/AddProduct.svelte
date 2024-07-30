<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
  
    let itemName = '';
    let description = '';
    let price = '';
    let itemType = '';
    let image = '';
  
    const addItem = async () => {
      try {
        const newItem = {
          name: itemName,
          description: description,
          price: price,
          type: itemType,
          image: image
        };
  
        const response = await axios.post('http://localhost:3030/api/items', newItem);
        if (response.status === 201) {
          // Handle success (e.g., clear the form, show a success message)
          itemName = '';
          description = '';
          price = '';
          itemType = '';
          image = '';
          alert('Item added successfully');
        }
      } catch (error) {
        console.error('Error adding item:', error);
        alert('Failed to add item');
      }
    };
  </script>
  
  <div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
    <div class="bg-white py-6 px-10 sm:max-w-md w-full">
      <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600 mb-12">
        Add new item:
      </div>
      <div class="">
        <div>
          <input
            type="text"
            class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
            placeholder="Name"
            bind:value={itemName}
          />
        </div>
        <div>
          <input
            type="text"
            class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
            placeholder="Description"
            bind:value={description}
          />
        </div>
        <div>
          <input
            type="number"
            class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
            placeholder="Price"
            bind:value={price}
          />
        </div>
        <div>
          <select
            class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
            bind:value={itemType}
          >
            <option value="" disabled selected>Select Type</option>
            <option value="hat">hat</option>
            <option value="bag">bag</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
            placeholder="Image"
            bind:value={image}
          />
        </div>
  
        <div class="flex justify-center my-6">
          <button
            class="rounded-full p-3 w-full sm:w-56 bg-gradient-to-r from-sky-600 to-teal-300 text-white text-lg font-semibold"
            on:click={addItem}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  </div>
  