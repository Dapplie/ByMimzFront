<script>
    import axios from 'axios';
  
    let newType = "";
    let message = "";
    let errorMessage = "";
  
    const addItemType = async () => {
      if (!newType.trim()) {
        errorMessage = "Type name is required.";
        return;
      }
      
      try {
        await axios.post('http://localhost:3030/api/item-types', { name: newType });
        message = "Item type added successfully!";
        newType = ""; // Clear input field
        errorMessage = ""; // Clear previous errors
      } catch (error) {
        console.error('Error adding item type:', error);
        errorMessage = "Failed to add item type.";
      }
    };
  </script>
  
  <main>
    <div class="mx-auto w-[85svw] my-5 md:w-[75vw]">
      <h2 class="text-xl font-semibold mb-4">Add New Item Type</h2>
      
      <!-- Form for adding new item type -->
      <div class="flex flex-col gap-4">
        <input
          bind:value={newType}
          type="text"
          placeholder="Enter new item type"
          class="border-1 border-black rounded-xl p-2"
        />
        <button
          on:click={addItemType}
          class="bg-blue-500 text-white rounded-xl p-2"
        >
          Add Type
        </button>
        {#if message}
          <p class="text-green-500">{message}</p>
        {/if}
        {#if errorMessage}
          <p class="text-red-500">{errorMessage}</p>
        {/if}
      </div>
    </div>
  </main>
  
  <style>
    input {
      padding-inline: .5rem;
    }
    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
    .text-green-500 {
      color: green;
    }
    .text-red-500 {
      color: red;
    }
  </style>
  