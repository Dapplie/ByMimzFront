<script>
    import { Router, Link, Route } from "svelte-routing";
    import SignUp from "./SignUp.svelte";
    import { onMount } from 'svelte';
    import { goto } from '@sveltejs/kit/navigation';
    import axios from 'axios';
    import { isAuthenticated, user, checkAuth } from './auth';
    import Home from './Home.svelte';
  
  
  
  
      let email = '';
      let password = '';
  
      const signIn = async () => {
      try {
          const response = await axios.post('https://bymimzback.onrender.com/api/signin', {
              email,
              password
          });
          console.log('Sign-in successful:', response.data);
          localStorage.setItem('adminToken', response.data.token);
          localStorage.setItem('adminId', response.data.userId);
          //localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user info
          checkAuth();
          await checkAuth();
          window.location.href = '/'; // Redirect after successful sign-in
          
      } catch (error) {
          console.error('Error during sign-in:', error);
      }
  };
  
  </script>
  <style>
      .login_img_section {
      background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;
    }
    </style>
  
  <Router>
    
    <Route path="/Home" component={Home} />
    <Route path="SignUp" component={SignUp} />
    <div class="h-screen flex">
  
              <div class="flex  lg:w-1/2 justify-center items-center bg-white space-y-8 mx-auto">
                <div class="w-full px-8 md:px-32 lg:px-24">
                <form class="bg-white rounded-md shadow-2xl p-5"
                on:submit|preventDefault={signIn}>
                  <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                  <p class="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                  <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" bind:value={email} required />
                  </div>
                  <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <input class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" bind:value={password} required />
                    
                  </div>
           
                    <button type="submit" class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
               
                  
                  <div class="flex justify-between mt-4">
                    <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>
    
                    <Link to="/SignUp" class="clickable-div text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</Link>
                  </div>
                  
                </form>
                </div>
                
              </div>
          </div>
  </Router>