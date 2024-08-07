<script>
    import Item from "./Home/cards/Item";
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { Router, Link, Route } from "svelte-routing";
    import AddProduct from "./AddProduct.svelte";
    import ViewOrders from "./ViewOrders.svelte";
    import AddType from "./AddType.svelte";

    let searchQuery = "";
    let items = [];
    let filteredItems = [];
    let editPrice = {};
    let newPrice = {};

    const fetchItems = async () => {
        try {
            const response = await fetch('https://bymimzback.onrender.com/api/items');
            if (!response.ok) throw new Error('Network response was not ok.');
            items = await response.json();
            filteredItems = items; // Initialize filtered items
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`https://bymimzback.onrender.com/api/items/${id}`);
            if (response.status === 200) {
                items = items.filter(item => item._id !== id);
                filteredItems = filteredItems.filter(item => item._id !== id); // Update filtered items
                console.log('Item deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const filterItems = () => {
        filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const updateItemPrice = async (id) => {
        try {
            const response = await axios.put(`https://bymimzback.onrender.com/api/items/${id}`, {
                price: newPrice[id],
                onSale: true // Include this field to trigger the backend logic
            });
            if (response.status === 200) {
                const updatedItem = response.data;
                items = items.map(item => item._id === id ? updatedItem : item);
                filteredItems = filteredItems.map(item => item._id === id ? updatedItem : item);
                editPrice[id] = false;
                console.log('Item updated successfully');
            }
        } catch (error) {
            console.error('Error updating item price:', error);
        }
    };

    onMount(() => {
        fetchItems();
    });
</script>

<style>
    .search-bar {
        margin-bottom: 1rem;
    }

    .search-bar input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        font-size: 1rem;
    }

    .table-container {
        overflow-x: auto; /* Enable horizontal scrolling */
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 0.75rem;
        text-align: left;
    }

    @media (max-width: 768px) {
        table {
            min-width: 600px; /* Ensure table has a minimum width for better scrolling */
        }
    }
</style>

<router>
    <Route path="AddProduct" component={AddProduct} />
    <Route path="ViewOrders" component={ViewOrders} />
    <Route path="AddType" component={AddType} />

    <div class="container mb-16">
        <h1 class="mb-2">
            Manage all items below, <Link to="/AddProduct">Add new item</Link>, <Link to="/AddType">Add new type</Link>, or <Link to="/ViewOrders"> View orders</Link>
        </h1>

        <!-- Search bar -->
        <div class="search-bar">
            <input 
                type="text" 
                placeholder="Search items.." 
                bind:value={searchQuery} 
                on:input={filterItems}
            />
        </div>

        <div class="table-container">
            <table class="text-left w-full">
                <thead class="bg-gray-700 flex text-white w-full">
                    <tr class="flex w-full mb-2">
                        <th class="p-4 w-1/4">Name</th>
                        <th class="p-4 w-1/4">Description</th>
                        <th class="p-4 w-1/4">Price</th>
                        <th class="p-4 w-1/4">Type</th>
                        <th class="p-4 w-1/4">Action</th>
                    </tr>
                </thead>
                <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 100vh;">
                    {#each filteredItems as item}
                    <tr class="flex w-full mb-2">
                        <td class="p-4 w-1/4">{item.name}</td>
                        <td class="p-4 w-1/4">{item.description}</td>
                        <td class="p-4 w-1/4">
                            {#if editPrice[item._id]}
                                <input type="number" bind:value={newPrice[item._id]} />
                            {:else}
                                ${item.price}
                            {/if}
                        </td>
                        <td class="p-4 w-1/4">{item.type}</td>
                        <td class="p-4 w-1/4">
                            {#if editPrice[item._id]}
                                <button class="bg-green-800 text-white rounded-xl px-4 py-2"
                                    on:click={() => updateItemPrice(item._id)}>Save</button>
                                <button class="bg-gray-800 text-white rounded-xl px-4 py-2"
                                    on:click={() => editPrice[item._id] = false}>Cancel</button>
                            {:else}
                                <button class="bg-blue-800 text-white rounded-xl px-4 py-2"
                                    on:click={() => {editPrice[item._id] = true; newPrice[item._id] = item.price}}>Edit price</button>
                            {/if}
                            <button class="bg-red-800 text-white rounded-xl px-4 py-2"
                                on:click={() => deleteItem(item._id)}>Remove item</button>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</router>
