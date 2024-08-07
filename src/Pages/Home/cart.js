// src/stores/cartStore.js
import { writable } from 'svelte/store';

export const cart = writable([]);

// Fetch cart data from server
export async function fetchCart() {
  try {
    const response = await fetch('http://localhost:3030/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using a different auth mechanism
      }
    });

    if (!response.ok) throw new Error('Failed to fetch cart');

    const data = await response.json(); // Ensure data is correctly defined
    console.log('Fetched cart data:', data); // Debugging line

    // Assuming data.items is the array of cart items
    cart.set(data.items);
  } catch (err) {
    console.error('Error fetching cart:', err); // Error handling
  }
}