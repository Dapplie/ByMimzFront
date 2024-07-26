<script>
  import Video from "./Video/Video.svelte";
  import SignUp from "./SignUp.svelte";
  import SignIn from "./SignIn.svelte";
  import Cards from "./cards/Cards.svelte";
  import AboutUs from "./AboutUs.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Hats from "./cards/Hats.svelte";
  import Bags from "./cards/Bags.svelte";
  import Item from "./cards/Item.js";
  import Card2 from "./cards/Card2.svelte";
  import { onMount } from 'svelte';
  import axios from 'axios';

  const items = [
    new Item("Summer Dress", "This is the description for item 1.", 19, "bag"),
    new Item("Summer Dress", "This is the description for item 2.", 29, "bag"),
    new Item("Item 3", "This is the description for item 3.", 39, "bag"),
    new Item("Item 4", "This is the description for item 3.", 39, "bag"),
    new Item("Item 5", "This is the description for item 3.", 39, "bag"),
    new Item("Item 6", "This is the description for item 3.", 39, "bag"),
    new Item("Item 7", "This is the description for item 3.", 39, "bag"),
    new Item("Item 45", "This is the description for item 3.", 39, "bag"),
    new Item("Item 32", "This is the description for item 3.", 39, "bag"),
  ];
</script>

<!-- <Bags></Bags> -->
 <!-- <Hats></Hats> -->
<Video />
<!-- <SignUp />
<SignIn></SignIn> -->
<!-- <Cards /> -->

<!-- <div class="flex flex-row flex-wrap gap-5 justify-center items-center">
        {#each items as item}
            <Card2 {item} />
        {/each}
    </div> -->

<Router>
  <Route path="SignUp" component={SignUp} />
  <Route path="Bags" component={Bags} />
  <Route path="Hats" component={Hats} />
  <Route path="Cards" component={Cards} />

  <!-- <Bags></Bags> -->

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
    }
    .clickable-div div {
      text-decoration: none; /* Prevent underline inside the card content */
    }
    .clickable-div div:hover {
      text-decoration: none; /* Prevent underline on hover inside the card content */
    }
  </style>

  <!-- stylesheet -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
  />

  <!-- <Link to="/SignUp">Sign up</Link>
    <Link to="/Bags">Bags</Link>
    <Link to="/Hats">Hats</Link>
    <Link to="/Cards">Cards</Link> -->

</Router>
<AboutUs></AboutUs>
