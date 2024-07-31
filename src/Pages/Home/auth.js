import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable(null);
export const isAdminAuthenticated = writable(false);
// export function checkAuth() {
//     return new Promise((resolve) => {
//         const adminToken = localStorage.getItem('adminToken');
//         const token = localStorage.getItem('token');
//         if(adminToken){
//             isAdminAuthenticated.set(true);
//         }else{
//             isAdminAuthenticated.set(false)
//         }
//         if (token) {
//             isAuthenticated.set(true);
//             const userInfo = JSON.parse(localStorage.getItem('user'));
//             user.set(userInfo);
//             console.log('User authenticated:', userInfo);
//         } else {
//             isAuthenticated.set(false);
//             user.set(null);
//             console.log('User not authenticated');
//         }
//         resolve(); // Ensure the promise resolves after the logic completes
//     });
// }


export function checkAuth() {
    return new Promise((resolve) => {
        const token = localStorage.getItem('token');
        const userType = localStorage.getItem('userType');
        if (token) {
            isAuthenticated.set(true);
            const userInfo = {
                userId: localStorage.getItem('userId'),
                type: userType
            };
            user.set(userInfo);
            isAdminAuthenticated.set(userType === 'admin');
            console.log('User authenticated:', userInfo);
        } else {
            isAuthenticated.set(false);
            user.set(null);
            isAdminAuthenticated.set(false);
            console.log('User not authenticated');
        }
        resolve(); // Ensure the promise resolves after the logic completes
    });
}


export function logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminId');

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    isAuthenticated.set(false);
    user.set(null);
}

checkAuth(); // Initialize auth status on module load
