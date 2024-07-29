import { writable } from 'svelte/store';
import axios from 'axios';

export const cart = writable([]);

export async function fetchCart(userId) {
    try {
        const response = await axios.get(`http://localhost:3030/api/cart/${userId}`);
        cart.set(response.data.items);
    } catch (error) {
        console.error('Error fetching cart:', error);
    }
}

export async function addToCart(userId, productId, name, price, quantity = 1) {
    try {
        const response = await axios.post('http://localhost:3030/api/cart', {
            userId,
            productId,
            name,
            price,
            quantity
        });
        fetchCart(userId); // Refresh cart after adding an item
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}
