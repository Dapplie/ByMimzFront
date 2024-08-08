<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  
  let itemName = '';
  let description = '';
  let price = '';
  let itemType = '';
  let imageFile = null;
  let itemTypes = []; // To store the fetched item types
  
  onMount(async () => {
    try {
      const response = await axios.get('https://bymimzback.onrender.com/api/item-types');
      itemTypes = response.data;
    } catch (error) {
      console.error('Error fetching item types:', error);
    }
  });

  const addItem = async () => {
    try {
      const formData = new FormData();
      formData.append('name', itemName);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('type', itemType);
      formData.append('image', imageFile); // Add file to form data

      const response = await axios.post('https://bymimzback.onrender.com/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.status === 201) {
        // Handle success
        itemName = '';
        description = '';
        price = '';
        itemType = '';
        imageFile = null;
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
    <div>
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
          {#each itemTypes as type}
            <option value={type._id}>{type.name}</option>
          {/each}
        </select>
      </div>
      <div>
        <input
          type="file"
          class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
          on:change={e => imageFile = e.target.files[0]}
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
