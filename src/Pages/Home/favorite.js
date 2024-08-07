// src/stores/favoriteStore.js
import { writable } from 'svelte/store';

export const favorite = writable([]);

// Fetch favorite data from server
export async function fetchFavorite() {
  try {
    const response = await fetch('http://localhost:3030/api/favorite', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using a different auth mechanism
      }
    });

    if (!response.ok) throw new Error('Failed to fetch favorite');

    const data = await response.json(); // Ensure data is correctly defined
    console.log('Fetched favorite data:', data); // Debugging line

    // Assuming data.items is the array of favorite items
    favorite.set(data.items);
  } catch (err) {
    console.error('Error fetching favorite:', err); // Error handling
  }
}