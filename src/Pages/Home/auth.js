import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable(null);

export function checkAuth() {
    const token = localStorage.getItem('token');
    if (token) {
        isAuthenticated.set(true);
        // Optionally, set user info if you store it in localStorage
        const userInfo = JSON.parse(localStorage.getItem('user'));
        user.set(userInfo);
    } else {
        isAuthenticated.set(false);
        user.set(null);
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    isAuthenticated.set(false);
    user.set(null);
}
