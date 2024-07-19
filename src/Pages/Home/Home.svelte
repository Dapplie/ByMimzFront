<script>
    import Video from './Video/Video.svelte';
    import SignUp from './SignUp.svelte';
    import SignIn from './SignIn.svelte';
    import Cards from './cards/Cards.svelte';
    import AboutUs from './AboutUs.svelte';
    import { Router, Link, Route } from "svelte-routing";
    import Hats from './cards/Hats.svelte';
    import Bags from './cards/Bags.svelte';
    import Item from './cards/Item.js'
    import Card2 from './cards/Card2.svelte';

    const items = [
        new Item('Summer Dress', 'This is the description for item 1.', 19, 'bag'),
        new Item('Summer Dress', 'This is the description for item 2.', 29, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag'),
        new Item('Item 3', 'This is the description for item 3.', 39, 'bag')
    ];
    console.log(items);
</script>

<Video />
<!-- <SignUp />
<SignIn></SignIn> -->
<!-- <Cards /> -->

<div class="flex flex-row flex-wrap gap-5 justify-center items-center">
    {#each items as item}
        <Card2 {item} />
    {/each}
</div>


<router>
    
<Link to="/SignUp" class="clickable-div" style="text-decoration: none;
max-width: 384px;
margin:0%;
padding: 0;">
    <div class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-1 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src="./assets/fashion.jpg"
            alt="ui/ux review check"
          />
        </div>
        <div class="p-6">
          <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            BAGS
          </h4>
          <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Because it's about motivating the doers. Because I'm here to follow my
            dreams and inspire others.
          </p>
        </div>
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center -space-x-3">
            <img
              alt="natali craig"
              src="/assets/bag1.jpg"
              class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-1"
            />
            <img
              alt="tania andrew"
              src="/assets/bag2.jpg"
              class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-2"
            />
      
          </div>
          <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
           100+ items
          </p>
        </div>
      </div>
      
      
      <!-- stylesheet -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />
    
    </Link>



    <a href="https://example.com" class="clickable-div" style="text-decoration: none;
        max-width: 384px;
        margin:0%;
        padding: 0;">
        <div class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-1 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img
                src="./assets/fashion.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div class="p-6">
              <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                HATS
              </h4>
              <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                Because it's about motivating the doers. Because I'm here to follow my
                dreams and inspire others.
              </p>
            </div>
            <div class="flex items-center justify-between p-6">
              <div class="flex items-center -space-x-3">
                <img
                  alt="natali craig"
                  src="/assets/bag1.jpg"
                  class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                  data-tooltip-target="author-1"
                />
                <img
                  alt="tania andrew"
                  src="/assets/bag2.jpg"
                  class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                  data-tooltip-target="author-2"
                />
          
              </div>
              <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
               100+ items
              </p>
            </div>
          </div>
          
          
          <!-- stylesheet -->
          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />
        
        </a>








    <!-- <Link to="/SignUp">Sign up</Link>
    <Link to="/Bags">Bags</Link>
    <Link to="/Hats">Hats</Link>
    <Link to="/Cards">Cards</Link>

    <Route path="SignUp" component={SignUp} /> -->
    <Route path="Bags" component={Bags} />
    <Route path="Hats" component={Hats} />
    <Route path="Cards" component={Cards} />

</router>
<AboutUs></AboutUs>
