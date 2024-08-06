<script>
     import { Router, Link, Route } from "svelte-routing";
     import Bags from "./Bags.svelte";
     import Hats from "./Hats.svelte";
</script>






<Router>
    <Route path="Bags" component={Bags} />
    <Route path="Hats" component={Hats} />



<div class="card-container">
    <Link to="/Bags" class="clickable-div">
      <div
        class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div
          class="relative m-1 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"
        >
          <img src="./assets/fashion.jpg" alt="ui/ux review check" />
        </div>
        <div class="p-6">
          <h4
            class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            BAGS
          </h4>
          <p
            class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased"
          >
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others.
          </p>
        </div>
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center -space-x-3">
            <img
              alt="natali craig"
              src="/assets/bag1.jpg"
              class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
            />
            <img
              alt="tania andrew"
              src="/assets/bag2.jpg"
              class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
            />
          </div>
          <p
            class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased"
          >
            100+ items
          </p>
        </div>
      </div>
    </Link>

    <Link to="/Hats" class="clickable-div">
      <div
        class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div
          class="relative m-1 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none"
        >
          <img src="./assets/fashion.jpg" alt="ui/ux review check" />
        </div>
        <div class="p-6">
          <h4
            class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            HATS
          </h4>
          <p
            class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased"
          >
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others.
          </p>
        </div>
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center -space-x-3">
            <img
              alt="natali craig"
              src="/assets/bag1.jpg"
              class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
            />
            <img
              alt="tania andrew"
              src="/assets/bag2.jpg"
              class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
            />
          </div>
          <p
            class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased"
          >
            100+ items
          </p>
        </div>
      </div>
    </Link>
  </div>

  <style>
    .card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      width: 100%; /* Full width to ensure centering */
      margin: 0 auto; /* Center container in the viewport */
      padding: 2rem 0; /* Add some padding to center vertically */
    }
    .clickable-div {
      text-decoration: none;
      max-width: 384px;
      margin: 0;
      padding: 0;
      display: inline-block; /* Ensure links do not occupy full width */
    }
    .clickable-div:hover {
      text-decoration: none; /* Prevent underline on hover */
      transform: scale(1.01); /* Grow a bit on hover */
    }
    .clickable-div div {
      text-decoration: none; /* Prevent underline inside the card content */
      transition: transform 0.2s;
    }
    .clickable-div div:hover {
      text-decoration: none; /* Prevent underline on hover inside the card content */
      transform: scale(1.01); /* Grow a bit on hover */
    }
  </style>

  <!-- stylesheet -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
  />

</Router>