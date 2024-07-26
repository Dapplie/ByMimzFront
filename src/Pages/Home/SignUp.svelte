<script>
    import { onMount } from 'svelte';
    import { goto } from '@sveltejs/kit/navigation';
    import axios from 'axios';

    let fullName = '';
    let email = '';
    let location = '';
    let phoneNumber = '';
    let password = '';

    const signUp = async () => {
        try {
            const response = await axios.post('http://localhost:3030/api/signup', {
                fullName,
                email,
                location,
                phoneNumber,
                password
            });
            console.log('Sign-up successful:', response.data);
            goto('/'); // Redirect after successful sign-up
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };
</script>





<div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px]">
      <form on:submit|preventDefault={signUp}>
        <div class="mb-5">
          <label
            for="fullName"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="fullName"
            placeholder="Full Name"
            bind:value={fullName} required
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            bind:value={email} required
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="location"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter your location"
            bind:value={location} required
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        
        <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              bind:value={phoneNumber} required
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
            <label
              for="password"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              bind:value={password} required
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>


        <div>
          <button
            type="submit"
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>