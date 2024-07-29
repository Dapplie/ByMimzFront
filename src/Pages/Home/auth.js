import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable(null);

function checkAuth() {
    const token = localStorage.getItem('userId');
    if (token) {
        isAuthenticated.set(true);
        const userInfo = JSON.parse(localStorage.getItem('user'));
        user.set(userInfo);
        console.log('User authenticated:', userInfo);
    } else {
        isAuthenticated.set(false);
        user.set(null);
        console.log('User not authenticated');
    }
}

export function logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    isAuthenticated.set(false);
    user.set(null);
}

checkAuth(); // Initialize auth status on module load