import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable(null);

export function checkAuth() {
    return new Promise((resolve) => {
        const token = localStorage.getItem('token');
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
        resolve(); // Ensure the promise resolves after the logic completes
    });
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    isAuthenticated.set(false);
    user.set(null);
}

checkAuth(); // Initialize auth status on module load
