<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    const orders = writable([]);
  
    async function fetchOrders() {
      try {
        const response = await fetch('http://localhost:3030/api/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using a different auth mechanism
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch orders');
  
        const data = await response.json();
        console.log('Fetched orders data:', data); // Debugging line
        orders.set(data);
      } catch (err) {
        console.error('Error fetching orders:', err); // Error handling
      }
    }
  
    async function deleteOrder(orderId) {
      try {
        const response = await fetch(`http://localhost:3030/api/orders/${orderId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using a different auth mechanism
          }
        });
  
        const result = await response.json();
        console.log('Server response:', result);
  
        if (!response.ok) throw new Error('Failed to delete order');
  
        // Fetch the updated orders after deleting the order
        fetchOrders();
      } catch (err) {
        console.error('Error deleting order:', err); // Error handling
      }
    }
  
    onMount(() => {
      fetchOrders();
    });
  </script>
  
  


  <body class="flex items-center justify-center">
	<div class="container">
		<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-purple-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Order ID</th>
					<th class="p-3 text-left">User</th>
                    <th class="p-3 text-left">Email</th>
                    <th class="p-3 text-left">Phone number</th>
                    <th class="p-3 text-left">Items</th>
                    <th class="p-3 text-left">Order date</th>
					<th class="p-3 text-left" width="110px">Action</th>
				</tr>
				
			</thead>
			<tbody class="flex-1 sm:flex-none">
                {#each $orders as order}
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">{order._id}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.userId.fullName}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.userId.email}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{order.userId.phoneNumber}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    <ul>
                        {#each order.items as item}
                        <li>{item.itemId.name} - {item.quantity} x ${item.itemId.price}</li>
                        {/each}
                      </ul>
                    </td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{new Date(order.orderDate).toLocaleDateString()}</td>
					<td ><button on:click={() => deleteOrder(order._id)}
                        class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                        Paid</button></td>
				</tr>
                {/each}
			</tbody>
		</table>
	</div>
</body>

<style>
 
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>
  